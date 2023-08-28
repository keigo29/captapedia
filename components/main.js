import React, { useEffect, useState } from 'react';
import styles from '../styles/main.module.scss';
import image4 from "../public/img/saiya2.png";
import image5 from "../public/img/sayanblue.png";
import Image from 'next/image';

// import Page from "../data/Page";
// import Catalog from "../data/Catalog";


// コンポーネント
const Categolies = (props) => {
    return (
    
            
                        <div className={styles.contain}>
                            <Image src={props.img} alt="スーパーサイヤ人2" height={80} className={styles.img}/>
                            <div className={styles.title}>{props.title}</div>
                        </div>
        
    )
}
const Pages = (props) => {
    return (
        <div className={styles.page}>
            <div className={styles.t4}>Page</div>
            <div className={styles.h4}>{props.h4}</div>
            <div className={styles.flexcon}>

            <div className={styles.card}>
                <Image src={props.img} alt="スーパーサイヤ人2" height={60} className={styles.img}/>
                <div className={styles.h4}>{props.name}</div>
                <div className={styles.content}>{props.content}</div>
                <div className={styles.button}>詳しく見る</div>
            </div>
            </div>
        </div>
    );
}

export default function Main() {

    const title = "ドラゴンボール各形態";
    const name ="超サイヤ人ゴット超サイヤ人"
    const content ="超サイヤ人ゴッドの力をもった超サイヤ人として登場。髪の色やオーラが青いことから、超サイヤ人ブルーともいわれています"
    
    const [catalogs,setCatalogs] = useState([]);
    const [pages,setPages] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8091/api/catalogs');
                const data = await response.json();
                // console.log(data);
                setCatalogs(data);
               
            } catch (error) {
                console.error('カタログ取得エラー', error);
            }
        }

        fetchData();
        
    }, []);
    console.log(catalogs);
    // page.db内のデータをすべて読み込む
    // データを定数に格納しcontext or propsにmapで入れる
    // const dbCatalog = new Catalog();
    // const dbPage = new Page();
    return (
        <main className={styles.main}>
            <div className={styles.categoli}>
                <div className={styles.t4}>Catalog</div>
                    <div className={styles.flexcon}>
                    {catalogs.map((item, i) => <Categolies key={i} title={item.title}/>)}
            </div>
            </div>
        
            <Pages h4={title} img={image5} name={name} content={content}/>
        </main>
    )
}