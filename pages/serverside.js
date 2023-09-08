const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {Catalog} = require('../../data/Catalog');
const {Page} = require('../../data/Page');
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:8090', // 許可するオリジンを指定
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(express.json());
const db1 = new Catalog();
const db2= new Page();
// カタログ一覧取得
app.get("/api/catalogs", async (req, res) => {
    // res.status(200).json({
    //     message:"万個をさわりそうになった"
    // })
    try {
        const allCatalogs = await db1.getAllCatalog();
        res.json(allCatalogs);
    } catch (error) {
        res.status(500).json({ error: "カタログ取得の際にエラーが発生しました。" });
    }
});

// カタログにデータ追加
app.post("/api/catalogs", async (req, res) => {
    try {
        const newData = req.body;
      
        const addCatalogs = await db1.addCatalog(newData);
        res.json(addCatalogs);
    } catch (error) {
        res.status(500).json({ error: "カタログ追加の際にエラーが発生しました。" });
    }
});


// ページ一覧取得
app.get('/api/pages', async (req, res) => {
    try {
        const allPages = await db2.getAllPage();
        res.json(allPages);
    } catch (error) {
        res.status(500).json({ error: 'すべてのページ取得時にエラーが発生しました。' });
    }
});
app.get('/api/selectpages/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const selectedPages = await db2.getAllPageByCatalogId(req.params.id)
        res.json(selectedPages);
        console.log(selectedPages)
    } catch (error) {
        res.status(500).json({ error: 'すべてのページ取得時にエラーが発生しました。' });
        console.log(error);
    }
});
app.post("/api/addPageData", async (req, res) => {
    try {
        const {title, description, imageUrl,content,catalog_id} = req.body;
        const newPageEntry = new Page(
            null,
            title,
            description,
            imageUrl,
            content,
            catalog_id
          );
          await newPageEntry.addPage();
        
    } catch (error) {
        res.status(500).json({ error: "ページ追加の際にエラーが発生しました。" });
    }
});
app.post('/api/addData', async (req, res) => {
    try {
      // フォームデータを取得
      const { title, description, imageUrl } = req.body;
  
      // データベースに登録
      const newCatalogEntry = new Catalog(
        null,
        title,
        description,
        imageUrl,
      );
      await newCatalogEntry.addCatalog();
  
      // レスポンスを返す
      res.status(201).json({ message: 'データが登録されました。' });
      console.log("成功");
    } catch (error) {
      console.error('データベースエラー', error);
      res.status(500).json({ error: 'データベースエラーが発生しました。' });
    }
  });
  async function reset() {

    const catalogEntriesToCreate = [
        
        {
          title: 'タイトル2',
          description: '説明1',
          imageUrl: '画像URL1',
        },
        {
            title: "ドラゴンボール変身形態",
            description: '複数あるドラゴンボールの変身形態について解説',
            imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F5d7ef768-ea63-44da-befd-41cd51f6bd30%2Fimage_4.png?table=block&id=09b57c9a-3eb1-49f8-b8e2-d90e450df508&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=210&userId=&cache=v2',
          },
        {    
          title: 'marvelキャラ解説',
          description: '説明1',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F5e18bebb-d472-4218-8285-bf0131c18520%2FUntitled.png?table=block&id=7ece68c3-e131-4ff2-b054-697fb2f0b8c8&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1020&userId=&cache=v2',
        },
        {
          title: 'ラーメン図鑑',
          description: '説明1',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F9df79623-03b0-4e09-8f53-4377a4101fb0%2FUntitled.png?table=block&id=9123f861-fd0c-4fd8-a13b-8ee3c815bf1a&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1130&userId=&cache=v2',
        },
        // 他のPageエントリーを必要なだけ追加
      ];
    const pageEntriesToCreate = [
        {
          title: '超サイヤ人',
          description: '説明1',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F9227be20-80bb-4889-a878-39dc2c3c36ae%2FUntitled.jpeg?table=block&id=f25eebd4-bb5d-4e2a-8e21-45dc0ccaa920&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1130&userId=&cache=v2',
          content: '純血のサイヤ人、もしくはサイヤ人の血を引く人間が変身できる形態。髪、眉毛、髭がある者は髭も金色に変化し、瞳は緑色になる。また、肌の黒いものは白へと変わる。ただし尻尾の色に関しては、そもそも本編で変身するのがことごとく尻尾が切れたサイヤ人であるためかイマイチ描写が安定しておらず、初出の『ドラゴンボールGT』においては金色に変化する描写であった(色が茶色のままのシーンもいくらかあるが、ドラゴンボールGTパーファクトファイルの表紙では金色で描かれているため茶色の方が作画ミスと思われる)。その後のゲーム作品においても金色に変化するものが多いが、『エピソードオブバーダック』や『ドラゴンボールヒーローズ』シリーズ、『ドラゴンボールファイターズ』においては茶色のままとなっている。そのため、近年は茶色で統一されたのかと思いきや、『ドッカンバトル』や『ドラゴンボールレジェンズ』においてはの金色の尻尾を持つ描写がされているものもある。特にシャロットにおいては超サイヤ人ゴッドの形態で尻尾が赤色に変化している。尻尾を持つ超サイヤ人というのが少ない故におそらくはっきりした資料がないものと思われる。通常のサイヤ人は、変身型種族なので満月を見ると大猿に変身し、戦闘力を10倍に上昇させる。しかし、超サイヤ人になると体の大きさはそのままに、大猿以上の戦闘力になる。一部資料では戦闘力が約50倍になると解説されているが、作者の鳥山明は「当初は50倍という話だったがちょっと大袈裟で、実際は10倍ぐらいの気持ちで描いていた」とのこと。サイヤ人自体は異常気象で文明が後退する以前のナメック星にも認知されていた種族で、最長老は超サイヤ人の伝説を知っていたことから、少なくとも異常気象でナメック星が滅亡の危機に瀕する時代では他の星にも超サイヤ人の伝説は伝わっていた模様。作中で初めて変身した孫悟空は、それまで50%の力しか解放していないフリーザ相手に苦戦していたが、超サイヤ人になってからは戦局を逆転させた。また、「怒りによって覚醒する」という性質から、変身すると軽い興奮状態になり好戦的な性格がより表に出る。「穏やかな心を持ちながら激しい怒りによって目覚めた伝説の戦士」と形容される。原作では物語が進むうちに変身可能な人物が「バーゲンセール」と称されるほどに増加し、最終的には一部を除く(パン・ブラなど)すべてのサイヤ人が変身できるまでとなった。近年、原作者の鳥山明はこの超サイヤ人という変身はサイヤ人達の体内に流れるS細胞という特殊な細胞が深く関わっていると語っている。この細胞はほぼ全てのサイヤ人達の体内に流れており、それがある量に達した時、怒りなどをきっかけに爆発的に量を伸ばし、肉体に変化をもたらすとされ、その現象こそが超サイヤ人なのだという。',
          catalog_id: 1,
        },
        {
          title: '超サイヤ人2',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F5d7ef768-ea63-44da-befd-41cd51f6bd30%2Fimage_4.png?table=block&id=09b57c9a-3eb1-49f8-b8e2-d90e450df508&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=210&userId=&cache=v2',
          content: '超サイヤ人を超えた超サイヤ人。超サイヤ人からの見た目の変化は少ないが、髪の毛がより細かく逆立ち、悟空、悟飯(少年期)は前髪も変化、オーラにスパークが走る。また、落ち着きのない状態と好戦的な性格が復活する。「超サイヤ人2」の名称は魔人ブウ編の悟空の発言より名付けられたもので、一部書籍では上記の超サイヤ人の派生として「超サイヤ人第5段階」などの名称でも呼ばれていた。前述の超サイヤ人の2倍の強さとも。セルに人造人間16号の頭部を踏み潰され、とうとうキレた孫悟飯が初変身。すべてにおいて超サイヤ人第4段階を上回る強さを見せ、完全体のセルを圧倒した。また、その後サイヤ人の細胞(死の淵から這い上がるとと強さが増す)により強化復活したセルも、同様のスパークを纏った変身(パーフェクトセル)をしている。そして数年後に悟空とベジータも修行を積んでこの形態へ到達。修行による克服か、性格の変化は見られない。また、『ドラゴンボール超』では未来トランクスやカリフラ、キャベ、ケフラも変身している。',
          catalog_id: 1,
        },
        {
          title: '超サイヤ人3',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F8bacd428-0771-4efe-9e7b-8ca61fd15aa2%2Fsaiyan3.jpeg?table=block&id=86f64615-934d-40d7-852d-c9ca78ee428a&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=2000&userId=&cache=v2',
          content: '超サイヤ人を超えた超サイヤ人をさらに超えた超サイヤ人。髪が大きく伸び、眼窩上隆起が起こり眉毛が無くなる。また、悟空のみ瞳に瞳孔が描かれる。一部資料では超サイヤ人2の4倍の強さとも言われており、パワー、スピードともに優れた形態だが、エネルギーの消耗が激しく、長時間変身し続けることが出来ない。ただし死人が変身する分には問題ないらしい。天界で修行をした悟空が魔人ブウ(無邪気)を前に披露する。初変身では、変身するだけで地球全体が震えるほどのすさまじいエネルギーを放出していた。魔人ブウ(純粋)とのラストバトルでもこの形態になって戦った。悟空は超サイヤ人2のベジータが全く敵わなかった魔人ブウ(無邪気)を倒せる強さを持っており、ゴテンクスはさらに強い(らしい)魔人ブウ(悪)を圧倒できる。しかし制限時間のため倒すには至らなかった。原作では悟空とゴテンクスしか変身できなかったが、原作『ドラゴンボール』における最強の形態であるためか近年のゲーム作品では多くのキャラクターがこの形態に変身し、『ドラゴンバトラーズ』や『レイジングブラスト』ではベジータやブロリーが覚醒し、さらに『ドラゴンボールヒーローズ』では未来トランクスやゴテンクス青年期 など現実的に(多少は)あり得そうなサイヤ人から始まり、サイヤ人なら何でも構わんとばかりに果ては超サイヤ人に変身すらしていなかったラディッツやナッパまでをもこの超サイヤ人3に変身させるに至ってしまった。「……まるで超サイヤ人3のバーゲンセールだな……」',
          catalog_id: 1,
        },
        {
          title: '超サイヤ人ゴッド',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F4c09af16-3f80-4a1f-838f-c5a8b3229893%2Fgod.jpeg?table=block&id=c5bc0197-125d-4f0d-9d3f-395a79a6c1f7&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=2000&userId=&cache=v2',
          content: 'サイヤ人が神の域に達した姿であり、赤髪かつ炎のような比較的穏やかで赤いオーラを纏っている。これまでの形態と違って髪型の変化が全くなく多少身体が若返り引き締まる。加えて、瞳が大きく瞳孔のある赤目へと変化する。超サイヤ人と名のつくものの、その実体は従来のものとは全く異なり、正しい心を持つサイヤ人に、他五人の同じく正しい心を持つサイヤ人が心を注ぎ込むことでこの姿となる。一見いとも容易い条件に思えるが、本来「正しい心を持つサイヤ人」という存在自体が極めて稀であるため、それが六人集まる必要があるというのはかなり難しい条件である。歴史上、過去に一度だけ生まれている。戦闘力は大きく上昇し、超サイヤ人3で手も足も出なかった破壊神ビルスともある程度戦える。しかし、この変身には厳しい時間制限がある上、悟空曰く「無理して強くなっているため、非常に疲れる」とのこと。ただし一部の天才はゴッドの力を体感することで、自分のものとできる。漫画版では破壊神シャンパ編でのヒットとの戦いで悟空が独力で変身して戦っている他、“未来”トランクス編でベジータもこの形態に独力変身している。その後、アニメ版でも独力で変身可能な設定が取り入れられ、宇宙サバイバル編で第11宇宙のディスポ達との戦いで悟空が変身し、後述の超サイヤ人ブルーと切り替えながら戦った。両者共に独力変身後は超サイヤ人ブルーと比べパワーは大きく劣るが、その分スタミナの消費が少ないという部分が強調されている。独力で変身可能になってからは変身後も特別疲れた様子を見せることはなかったが、時間制限が無くなったのかは依然として語られていない。強さ以外に特筆すべき点として、神の領域に達するため、神以外には戦闘力を感じ取れないという点がある。これは、気の質が変化し、クリアで質の高いものになるためだとされている。',
          catalog_id: 1,
        },
        {
          title: '超サイヤ人ゴッドブルー',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F1bc5b6f3-8518-4548-8f4c-a29f078b8c77%2Fimage_5.png?table=block&id=e27bc7f7-157d-4468-9fa4-565faa415dce&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=110&userId=&cache=v2',
          content: 'サイヤ人が神の域に達した姿であり、赤髪かつ炎のような比較的穏やかで赤いオーラを纏っている。これまでの形態と違って髪型の変化が全くなく多少身体が若返り引き締まる。加えて、瞳が大きく瞳孔のある赤目へと変化する。超サイヤ人と名のつくものの、その実体は従来のものとは全く異なり、正しい心を持つサイヤ人に、他五人の同じく正しい心を持つサイヤ人が心を注ぎ込むことでこの姿となる。一見いとも容易い条件に思えるが、本来「正しい心を持つサイヤ人」という存在自体が極めて稀であるため、それが六人集まる必要があるというのはかなり難しい条件である。歴史上、過去に一度だけ生まれている。戦闘力は大きく上昇し、超サイヤ人3で手も足も出なかった破壊神ビルスともある程度戦える。しかし、この変身には厳しい時間制限がある上、悟空曰く「無理して強くなっているため、非常に疲れる」とのこと。ただし一部の天才はゴッドの力を体感することで、自分のものとできる。漫画版では破壊神シャンパ編でのヒットとの戦いで悟空が独力で変身して戦っている他、“未来”トランクス編でベジータもこの形態に独力変身している。その後、アニメ版でも独力で変身可能な設定が取り入れられ、宇宙サバイバル編で第11宇宙のディスポ達との戦いで悟空が変身し、後述の超サイヤ人ブルーと切り替えながら戦った。両者共に独力変身後は超サイヤ人ブルーと比べパワーは大きく劣るが、その分スタミナの消費が少ないという部分が強調されている。独力で変身可能になってからは変身後も特別疲れた様子を見せることはなかったが、時間制限が無くなったのかは依然として語られていない。強さ以外に特筆すべき点として、神の領域に達するため、神以外には戦闘力を感じ取れないという点がある。これは、気の質が変化し、クリアで質の高いものになるためだとされている。',
          catalog_id: 1,
        },
        {
          title: 'アルティメット悟飯',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F7b5bf4a6-0a4c-4143-bca3-895c0130899a%2FUntitled.png?table=block&id=99f4475c-80aa-4ec0-bcf0-560469d68f16&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=350&userId=&cache=v2',
          content: '魔人ブウ編において孫悟飯が老界王神によって潜在能力を限界以上に引き出してもらった状態の通称。尚、この名称は原作には登場しない。(後述)見た目は超サイヤ人のような派手さはないが、その戦闘力は超サイヤ人3以上であり、悟空はもちろんフュージョンしたゴテンクスをも凌駕する。また超サイヤ人3の弱点であった変身の時間制限も見られず、加えて変身中にかかる身体への負担も無い。その圧倒的な強さから、読者からは原作においては合体戦士を除く単独の戦士の中では最強のキャラクターとの声も多い。',
          catalog_id: 1,
        },
        {
          title: 'ゴールデンフリーザ',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2Fc4802270-5e4e-4fcf-b1b7-f5ea3c030e59%2Fgold.png?table=block&id=aad97c2b-a57d-4e36-ad61-333395307442&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=2000&userId=&cache=v2',
          content: '劇場版『復活の「F」』や『ドラゴンボール超』シリーズに登場するフリーザの最終形態の更に上を行く新形態。その名の通り全身が黄金に光り輝いている。ドラゴンボールの願いによって復活したフリーザが、悟空たちへの復讐のために行った4ヵ月に渡る激しいトレーニングの末に体得した。この体色はパワーアップしたのが見た目で分かりやすいようにとフリーザ自らが選んだ色であり、その発言から色は自由に変えられたと推測される。一見、最終形態の色違いの変身に見えるが、実際は肩にあった水晶の様なパーツが無くなり、腕や脛のそれは丸型に変化、額や腰回りの骨は隆起し、全体的に筋肉質な体形になるなど細部が変化している。このデザインについて原作者の鳥山明先生は「あれ以上シンプルな姿にするわけにもいかないので、主に色を変えることにしました。金メダルのイメージから、最強って感じがするでしょ？」とコメントしている。',
          catalog_id: 1,
        },
        {
          title: '超サイヤ人4',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2Fa977c714-d754-43a7-854b-e05437b720ff%2F4c63591e0aef5a6514fedd72de920c77.jpg?table=block&id=d073089c-68a6-46fa-a89e-838397a3262e&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=2000&userId=&cache=v2',
          content: 'アニメオリジナルの完結編である『ドラゴンボールGT』におけるサイヤ人の最終形態又は完全体とも言える姿。原作には登場しない。デザインは中鶴勝祥によるもので、当時デザイン案を鳥山明に送った後、「少し修正はあったと思うんですけどアイデアの変更はなかったから嬉しかった」と中鶴は語っている。後にDVD-BOXのブックレットでは鳥山明の超サイヤ人4を見る事が出来る。従来の超サイヤ人の力に加え、大猿の力をも由来とした最強の戦士。大猿状態の超パワーと大猿にはない超スピードを兼ね備えている。加えてこれまでの超サイヤ人(特に超サイヤ人3)の短所である激しいエネルギー消費と、それに伴う変身持続時間の短さを解消している。しかしながら、エネルギーが膨大すぎるが故か、体力の即時回復はデンデやキビト神の持つ回復能力では効果が薄く、サイヤ人特有の気である「サイヤパワー」が必要な短所がある。一方、サイヤパワーを限界以上に集めるか、或いはブルーツ波の過剰供給を受ける事で戦闘力の大幅アップが可能(悟空曰く超(ちょう)フルパワーサイヤ人4)な利点もある(但し、『神と神』や『燃えつきろ!!熱戦・烈戦・超激戦』等の描写から考えると、これは超サイヤ人ならどの形態でも可能なことかもしれない)。大猿のパワーを由来にしているからか、これまで悟空達が修行によって克服した超サイヤ人変身による性格の変化(気性が荒くなる)も復活。悟空曰く「ちょっとばかし理性がぶっ飛んじまう」らしい。コレに伴い再び悟空の一人称が超サイヤ人第1段階以来の「オレ」に変化。但し、嘗ての超サイヤ人とは異なり言葉遣いや訛りはそのままであり、(「おめぇ(お前)」「10べぇ(10倍)」)である。また、この一人称も「オラ」に戻っている事もある。『GT』本編では孫悟空とベジータが変身した。悟空は超サイヤ人4変身に伴いかめはめ波もパワーアップ。両手に気弾を生み出し、2つを併せる事で大きなエネルギー波に変え放つ「10倍(べぇ)かめはめ波」が撃てる様になった。名付け親は皮肉にも「超サイヤ人は邪道」と発言した老界王神。因みに、炎に耐性が付くらしい(太陽と同等の温度4,000度に触れても平然としていられる)。現在は、『超』の超サイヤ人ゴッド、超サイヤ人ゴッドSS(超サイヤ人ブルー)や破壊神・天使の技がメインになっている為、別次元の悟空達「ゼノ」のメイン形態として登場する事が多い。',
          catalog_id: 1,
        },
        {
          title: '身勝手の極意',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F41af1776-0851-40d3-9019-5510f000dc5c%2Finstict.jpeg?table=block&id=62ccba47-ece6-4f0c-bfc8-4f1ea3bd9e22&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=2000&userId=&cache=v2',
          content: '『ドラゴンボール超』の『宇宙サバイバル編』に登場する新たなる技能・領域。超サイヤ人ゴッドや超サイヤ人ブルーを遥かに超える強化状態である。名前の由来としては「【身】体が【勝手】に動く程の境地」であり、決して身勝手にふるまう事への自虐ネタではない。戦闘中、状況に応じて自動的に肉体が的確な行動をとる能力。第7宇宙の天使ウイス曰く「意識と肉体を切り離し無意識に任せる」力。極めればどんな危機でも回避する事が出来るとされ、その能力は戦闘中、常に進化を続け、攻撃面では攻撃を弾かれる度により強く鋭いものへと進化していく。また行動後の隙が極端に少なくなり、相手の攻撃を避ける行動1つとっても身を捻って避ける動作がそのまま回転蹴りへの動作に繋げられるほどに最適化される強力な能力故、エネルギー消費や身体への負担は非常に激しく長時間維持することは至難の業であり、あらゆる動作を身体が勝手に行ってしまう都合上、相手の実力やその攻撃の激しさによってはかえって負担が増してしまう可能性も存在する。防御面では、界王神界で最強の剣と謳われるゼットソードですら切れない宇宙でいちばん堅いといわれる、カッチン鋼の上位互換であるカチカッチン鋼を頭突きで粉砕しても顔色ひとつ変えないほど頑丈になっている。発動中、凄まじい熱気を放つが、一方で気の流れは非常に穏やかなものになる。作中や書籍などでは「神の御技」「神の領域」とも称されているが、界王神や破壊神など神々でも習得するのは非常に困難。特に破壊神は性格上取得難易度が高いらしい。力の大会で、ジレンとの戦いの最中悟空が覚醒したのが初登場となった。その悟空の場合は自らの意志では発動できず、限界を超え極限の状態にまで追い込まれた際に自動的に発動している。また限界を超えるという特性から、この極意を極める程、身体への負担はより激しいものになっていた。また作中で関係性は語られていないが、悟空が覚醒した際には口数の少ないクールな性格に変化している。ただ意識がないという訳ではなく、通常通り会話する事も可能である模様。海外では「Ultra Instinct」(ウルトラ・インスティンクト)と訳されている。',
          catalog_id: 1,
        },
        {
          title: 'アイアンマン',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2Ff52776ff-8877-4b85-b3f6-89b32f46159e%2FUntitled.png?table=block&id=49b678f5-b9af-4994-a357-af1aa9a1c60e&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1130&userId=&cache=v2',
          content: '『巨大軍需産業“スターク・インダストリーズ”の社長であるトニー・スタークは、自身が開発したクラスターミサイル“ジェリコ”のプレゼンテーションの為に、アフガニスタンにいる親友のジェームズ・“ローディ”・ローズ率いるアメリカ空軍を訪問した。しかし、車で移動中にテロ組織“テン・リングス”がトニーを襲撃、助けを呼ぼうとするトニーにミサイルを撃つ。命中の瞬間、トニーはミサイルに刻まれた自社のロゴマークを目撃し、爆風で吹き飛ばされ意識を失う。気がつくと、トニーはテン・リングスの拠点である洞窟に拉致されており、胸には車載用バッテリーに繋がった電磁石が取り付けられていた。爆発の際飛び散ったミサイルの破片がトニーの心臓周辺に突き刺さり、電磁石で破片を引き留めておかなければ1週間で命を落とすという。テン・リングスの拠点には横流しされたスターク社製の武器が所狭しと並んでいた。トニーは解放の条件としてジェリコの組み立てを強要される。やむなくトニーは、同じく捕虜で彼に電磁石を取り付けて救命措置を施したホー・インセン博士と一緒にエネルギーを生み出す熱プラズマ反応炉“アーク・リアクター”の小型版を、ジェリコ製作に見せかけて開発する。胸に接続して生命維持を可能にする小型アーク・リアクターを完成させたトニーは、続いてアーク・リアクターと連動するパワードスーツ“マーク1”を開発。インセンが自らの命を引き換えにして時間を稼ぎ、その間にアーマーを起動させたトニーは、圧倒的なパワーでゲリラを退けて脱出した。その後、マーク1が壊れてアフガニスタン辺境の砂漠に墜落したトニーは、ローディ率いる米軍の捜索隊に保護されてアメリカに帰還した。トニーは自社製品がゲリラの手に渡り、それが人命を目の前で奪った事から、帰国後の記者会見で軍需産業からの撤退を宣言する。スターク社副社長のオバディア・ステインが役員会でトニーの解任要求を提出するも、彼は犯罪者やテロリストと戦うために私費と技能を投じて新たなアーマーの開発に着手した。試作品の“マーク2”を経て完成品のマーク3”を完成させ、トニーはローディや秘書のペッパー・ポッツ以外の誰にも正体を明かさず、1人でテン・リングスとの戦いを始める。',
          catalog_id: 2,
        },
        {
          title: 'スパイダーマン',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2Fe3c43d6d-ed61-4013-9470-0acc76bcd97f%2FUntitled.png?table=block&id=a36f1b91-a2f4-4ec8-9602-366e86f26e8b&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1130&userId=&cache=v2',
          content: '本作は、アメコミ（マーベル・コミック）原作のヒーロー「スパイダーマン」（ピーター・パーカー）を主人公として操り、既存シリーズから大きく異なるエピソードを辿ったゲームオリジナルの世界観を基に数々の事件に挑む、というゲームである。町中をウェブ・シューターを使ってマンハッタン（ニューヨーク）を自由に飛び回って移動しつつ、メインストーリーを進めたり任意プレイのサイドストーリーやミニゲームに挑むことができる。イベントの中では戦闘が発生することが多く、ここでもウェブ・シューターやガジェットなどを使用し、群がる数多くの敵を撃破していく。なお、時代設定は2018年でスマホが登場したり仮想通貨が流行っていたり、と世界観は現実世界～近未来相当となっている。ゲーム版の世界もマーベルコミックのマルチバース（多元世界）設定に組み込まれており、並行世界のスパイダーマンが多数登場するクロスオーバー作品『スパイダーゲドン（英語版）』（2018年-2019年）に本作のスパイダーマンが主要人物として登場した際には、ゲーム版の世界はEARTH-1048と呼称されている（通常のマーベルコミックの世界はEARTH-616）。本作のシナリオをメインで担当した脚本家クリストス・ゲージ（英語版）は、『スパイダーゲドン』でもライターを担当しており、漫画でもゲームでの出来事を踏まえた描写がされている。',
          catalog_id: 2,
        },
        {
          title: '家系ラーメン',
          description: '説明2',
          imageUrl: 'https://judicious-antler-f35.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F5564609a-a928-4219-a2a9-525e0ad3fe64%2F0e61f52f-b153-4427-896e-5b5ee97e3f0c%2FUntitled.png?table=block&id=45a6079f-ea41-4b53-b63f-ffeb2bb86dff&spaceId=5564609a-a928-4219-a2a9-525e0ad3fe64&width=1130&userId=&cache=v2',
          content: '豚骨や鶏ガラから取った出汁に醤油のタレを混ぜた「豚骨醤油ベース」のスープ、太い中華麺と鶏油に、ホウレンソウ、チャーシュー、海苔のトッピングで構成される[3][4]。麺の硬さや油の量、味の濃さを好みに応じて調整してもらえるのが一般的である[2][3]。元々は吉村家から暖簾分けおよび派生したラーメン店により広まったもので、屋号に「〜家」（～や）が多かったことから、家系（いえけい）という通称で呼ばれるようになった[1]。吉村家の流派に属せず独自展開した店もあり、「壱六家」の流れをくむ店は「壱系」とも呼ばれる。さらには、2010年代中ごろからは大手外食産業が吉村家やその他の家系店舗とは全く無関係に手掛けるチェーン店が増加し、これらは「資本系」と呼ばれる。「資本系」の店舗の多くはセントラルキッチンで作られた既成スープを各店舗に持ち込んでラーメンを作っており、大量の豚ガラ、鶏ガラを常に炊き続けることによってできるフレッシュなスープを提供する吉村家の系譜をたどる個人店舗とは味が異なると言われている。家系ラーメンを出す店は、2013年9月時点で日本とアジアを中心に約1000店舗あるとされ、そのうち横浜市内には約150店舗あるという（「神奈川のラーメンを盛り上げよう!会」調べ。店舗の入れ替わりが激しいため正確な数値は不明）。ただし、そのほとんどが「資本系」によるフランチャイズチェーン店で、本来の「吉村家」の流れを汲む店舗群はごくわずかであり、逆に「資本系」との差別化を図るために、吉村家で修行しながら「～家」を名乗らない独立店主も少なくない。かつて「吉村家」「本牧家」「六角家」の3屋号が「家系ラーメン御三家」と呼ばれていた。',
          catalog_id: 3,
        },
        // 他のPageエントリーを必要なだけ追加
      ];
    try {
      // カタログとページを削除
      await db1.deleteCatalogEvery();
      await db2.deleteAllPage();
      Catalog.createTable()
  
      for (const centry of catalogEntriesToCreate) {
        
        const title = centry.title;
        const description = centry.description; 
        const imageUrl = centry.imageUrl

        const addCatalogEntry= new Catalog(null,title,description,imageUrl);
        await addCatalogEntry.addCatalog() // 非同期でデータベースに追加
        .then(() => {
            // データベースへの保存が成功した場合の処理
            console.log("Catalog entry has been saved.");
            // 新しいエントリのIDを取得
            // const id = newCatalogEntry.id;
    
            // カタログエントリをデータベースから取得する
            // db1.getCatalogById(id)
            //   .then(selectedCatalog => {
            //     console.log("Selected catalog:", selectedCatalog);
            //   })
            //   .catch(error => {
            //     console.error("Error selecting catalog:", error);
            //   });
          })
          .catch(error => {
            // データベースへの保存が失敗した場合の処理
            console.error("Error adding catalog entry:", error);
          });
      }
      // 新しいPageエントリーを登録
      for (const pentry of pageEntriesToCreate) {
        
        const title = pentry.title;
        const description = pentry.description; 
        const imageUrl = pentry.imageUrl
        const content = pentry.content
        const catalog_id = pentry.catalog_id

       const addPageEntry= new Page(null,title,description,imageUrl,content,catalog_id);
        await addPageEntry.addPage() // 非同期でデータベースに追加
        .then(() => {
            // データベースへの保存が成功した場合の処理
            console.log("Catalog entry has been saved.");
            // 新しいエントリのIDを取得
            // const id = newCatalogEntry.id;
    
            // カタログエントリをデータベースから取得する
            // db1.getCatalogById(id)
            //   .then(selectedCatalog => {
            //     console.log("Selected catalog:", selectedCatalog);
            //   })
            //   .catch(error => {
            //     console.error("Error selecting catalog:", error);
            //   });
          })
          .catch(error => {
            // データベースへの保存が失敗した場合の処理
            console.error("Error adding catalog entry:", error);
          });
      }
      console.log('Page entries have been added to the database.');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  reset();
  // 定期的に実行
  setInterval(reset, 1800000);

app.get('/', (req, res) => {

    res.send('Hello World!')
});

app.listen(8091, () => {
    console.log('Server is running on port 8091');
});
