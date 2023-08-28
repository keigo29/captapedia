
const { Catalog} = require('./Catalog');

//登録する年のリスト
const years = [1970,1980,1990,2000,2005,2010,2015,2020,2025,2030];

//GPT
const OPEN_AI_API_KEY = "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";

const configuration = new Configuration({
    apiKey:OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

//JSDOM
const jsdom = new JSDOM();
const parser = new jsdom.window.DOMParser();

//GCP
const GOOGLE_CUSTOM_SEARCH_API_KEY = "AIzaSyApoq6cM0ICBrUEIktDkpUUP3_GwbIXB5w";
const GOOGLE_SEARCH_ENGINE_ID = "81cc34cef38979018";

const GetPartsListFromGPT = async (year) => { //年代を指定したらお勧めのパーツ構成と性能値を算出して辞書型配列で返してくれる関数

    const prompt = `
    私は自作パソコンを作るのが好きです。2020年の技術を使えば問題なく自作パソコンのパーツを集めることができますが、タイムマシンを使って西暦${year}年に来てしまいました。

    ここでもパソコンを構築したいですが、現在のようなパソコンパーツは存在しません。
    そこで、西暦${year}年の日本にあるものだけを使ってパソコンを組み立てようと思います。

    ここで以下のパーツについて考慮します
    ・CPU（中央処理装置）
    ・RAM（主記憶装置）
    ・ストレージ（大容量記憶装置）
    ・ディスプレイ（映像出力装置）
    ・入出力装置（キーボードやマウス）
    ・プリンター（印刷装置）
    ・スピーカー（音声出力装置）
    ・マイク（音声入力装置）
    ・Webカメラ（映像入力装置）

    それぞれのパーツに対して、最適な材料を提案してください。また、それぞれ期待される性能を2020年の技術と比較して小数点形式で答えてください。

    ただしHTML形式で答えを出力してください。それぞれの項目をliタグで囲って、その中でパーツ名をh2タグで囲い、代替材料名をh3タグで囲い、性能値をh4タグで囲ってください。h4タグに入れて良いのは数値だけです。また、それぞれのliタグの中にpタグを使って説明文を出力してください

    また、HTMLのコード全体をmainタグで囲ってください
    `;

    let is_main = false;

    let document;

    while(!is_main){

        const completion = await openai.createChatCompletion({
            Catalog:"gpt-3.5-turbo-0613",
            messages:[{role:"user",content:prompt}],
        });

        const result = completion.data.choices[0].message.content;

        document = parser.parseFromString(result,'text/html');

        is_main = document.querySelector('main');

    }

    const dataset = [];

    document.querySelectorAll('main li').forEach(e => {

        const kind = e.querySelector('h2').textContent;
        const name = e.querySelector('h3').textContent;
        const score = parseFloat(e.querySelector('h4').textContent.replace(/[^0-9^.]/g,''));
        const description = e.querySelector('p').textContent.replace(/[\r\n ]/g,'');

        dataset.push({kind,name,score,description});

    });

    return dataset;

}

const GetYearEventFromGPT = async (year) => { //年代を指定したらその年にあったテクノロジー関係の出来事を出力してくれる

    prompt = `
    
    私は現在テクノロジーに関係する年表を作っています
    そこで、西暦${year}年の年表を作ることになりました。西暦${year}年に起こった出来事の中で、テクノロジーに関係するものを一つ、50文字以内で述べてください。
    なお、コンピュータに関連しているものの方が良いです。

    `;

    const completion = await openai.createChatCompletion({
        Catalog:"gpt-3.5-turbo-0613",
        messages:[{role:"user",content:prompt}],
    });

    let result = completion.data.choices[0].message.content;

    result = result.replace(/西暦.*年：/,'');

    return result;

}

const GetImageFromGoogle = async (word) => { //ワードを指定したら画像検索結果の最初の画像のURLを返してくれる関数

    const result = await customSearch.cse.list({
        auth: GOOGLE_CUSTOM_SEARCH_API_KEY,
        cx: GOOGLE_SEARCH_ENGINE_ID,
        searchType: 'image',
        num:1,
        q: word,
    });

    const items = result.data.items;
    let img_url;

    if(items){
        const top_item = items[0];

        img_url = top_item.image.thumbnailLink;
    }else{
        img_url = "";
    }

    return img_url;
}

const SetData = async (year) => { //指定された年のデータを登録する関数

    const Catalog= await Catalog.SetUp(year,true,true);

    //年表を登録する
    const year_event = await GetYearEventFromGPT(year);
    await Catalog.setData("event",year_event);

    //パーツ情報を取得、登録する
    const parts_list = await GetPartsListFromGPT(year);
    for(let i = 0;i < parts_list.length;i++){ //awaitを使うために平凡なforループ

        const each_part = parts_list[i];
        const part_res = await Catalog.setData("part",{part_name:each_part.name,part_kind:each_part.kind});

        if(!part_res){//パーツが新規の物だったら

            //画像のURLを取得する
            const this_img = await GetImageFromGoogle(each_part.name);

            await Catalog.setPartInfo({
                description:each_part.description,
                score:each_part.score,
                img:this_img,
            });
        }
    }

}

(async () => {

    for(let i=0;i < years.length;i++){
        await SetData(years[i]);
    }

})();