import React, { useEffect, useState , useRef} from 'react';
import styles from '../styles/main.module.scss';

import addImage from "../public/img/ic_baseline-plus.svg";
import X from "../public/img/x.png";
import Image from 'next/image';




const Pages = (props) => {
    
    const maxLength=70;
    const [showDetail, setShowDetail] = useState(false);
   
    const toggleDetail = () => {
        setShowDetail(!showDetail);
    }
    const detail= (id)=>{
      toggleDetail();
    }

    

    return (
       
            <div className={styles.card}>
                <img src={props.img}  height={60}  className={styles.img}/>
                <div className={styles.h4}>{props.h4}</div>     
                <div className={styles.content}>
  {props.content ? (props.content.length > maxLength ? props.content.substr(0, maxLength) + "..." : props.content) : ""}
</div>

                <div className={styles.button} onClick={()=> detail(props.id)}> もっと見る</div>
                {showDetail && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalContent}>
                        <div className={styles.ima} > <img src={props.img}  height={200}  className={styles.img}/>
                        <div className={styles.modalh4}>
                        {props.h4}
                        </div>
                        </div>
                        <div className={styles.modalMain}>
                        <div className={styles.modalhead}>
                
                        </div>
                       <div className={styles.modalText}>
                         {props.content}
                        
                        </div>
                        </div>
                         <div className={styles.button} onClick={toggleDetail}>戻る</div>
                        </div>
                    </div>
                </div>
            )}
            
            </div>
            
    );
}
const PostP =(props)=>{
    const [clikedImage,setClikedImage] = useState(false)
    const [cliked,setCliked] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        content:"",
        catalog_id:props.idp
    });

    const [images, setImages]= useState([]);

    const handleOnAddImage = (e) => {
        if (!e.target.files) return;
        setImages([...e.target.files]);
      };
      
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // setFormData({
        //      catalog_id:idp
        // })
        console.log(formData);
      };
    const clickHander=()=>{
        setCliked(true) ;
    }
    const imgAdd=()=>{
        setClikedImage(true)
    }
    const clickX=(e)=>{
        e.stopPropagation();
        setCliked(false) 
        setClikedImage(false);
    }
    
    const reRoad=()=>{
        location.reload()
    }

    const handleSubmit=async(e)=>{
       e.preventDefault();
       try {
        const response = await fetch('http://localhost:8091/api/addPageData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.status === 201) {
          console.log('データが正常に登録されました。');
          // フォームをクリアするか、リダイレクトなどの適切な処理を追加
         
        } else {
          console.error('データの登録中にエラーが発生しました。');
        }
      } catch (error) {
        console.error('ネットワークエラー', error);
      }
     
    }

    return(
        <div className={styles.containpm} onClick={clickHander}>
            <Image src={addImage} width={50} className={styles.plusimg}/>
            <div className={styles.titlep}>新規追加</div>
            {cliked && (
                <div className={styles.modalOverlay} >
                   <div className={styles.modalFp}>
                   <div className='imgrf'>
                   <Image src={X} width={50} className={styles.imgr} onClick={clickX} />
                    </div>
                    <div className={styles.cform}>
                    <form method="post" onSubmit={handleSubmit}>
                    {!clikedImage && (
                           <div className={styles.imgAdd} onClick={imgAdd}>
                           <Image src={addImage} height={50}/>
                           <div>写真を追加</div>
                       </div>
                    )}
                     
                        {clikedImage && (
                            <div className={styles.inputImg}>
                                  <div className={styles.inputT}>画像URLを追加</div>
                                <input name="imageUrl" type='text' placeholder='https://' className={styles.inputxt} value={formData.imageUrl} onChange={handleChange}/>
                            </div>
                        )}
                        <div className={styles.inputT}>タイトル</div>
                        <input name="title" type='text'   value={formData.title} onChange={handleChange} className={styles.inputxt}/>
                        {/* <div className={styles.inputT}>説明</div>
                        <input name="description"type='text'    value={formData.description} onChange={handleChange} className={styles.inputxt}/> */}
                        <div className={styles.inputT}>概要</div>
                        <textarea name="content" type="textarea" rows="20" value={formData.content} onChange={handleChange} className={styles.inputxtArea}/>
                        <input type='submit' value="追加" className={styles.button} onClick={reRoad}/>
                    
                    </form>
                   </div>
                   </div>
                </div>
            )}
        </div>
    )
}

// コンポーネント
const Categolies = (props) => {
    const ids = props.id;
   
    const [selectedCatalogs,setSelectedCatalogs] = useState([]);
    useEffect(()=>{
        async function fetchData() {
         
            try {
                const response = await fetch(`http://localhost:8091/api/selectpages/${ids}`);
                const data = await response.json();
                // console.log(data);
                setSelectedCatalogs(data);
            
            } catch (error) {
                console.error('カタログ取得エラー', error);
            }
        }

        fetchData();
    }, [])
   
    const [showCatalog, setShowCatalog] = useState(false);
    const toggleCatalog = () => {
        setShowCatalog(!showCatalog);
    }
    return (            <div className={styles.contain}>
                            <div onClick={toggleCatalog}> 
                            <img src={props.img} height={50} className={styles.img}/>
                            <div className={styles.title}>{props.title}</div>

                            </div>
                            {showCatalog && (
                                <div className={styles.cmodal}>
                                    <div><Image src={X} width={50} className={styles.imgr} onClick={toggleCatalog} /></div>
                                    <div className={styles.chead}>
                                        <div className={styles.f}>
                                        <img src={props.img}  height={120} />
                                        <h2 className={styles.h2}>{props.title}</h2>
                                        </div>
                                        <div className={styles.description}>{props.description}</div>
                                    </div>
                                    <div className={styles.flexcon} >
                                        <PostP idp={props.id}/>
                                      {selectedCatalogs.map((item, i) =>  <Pages key={i} h4={item.title} img={item.imageUrl} name={item.title} id={item.id} content={item.content}/>)}
                                    </div>
                                    <div onClick={toggleCatalog}>icon X</div>
                                    
                                </div>

                            )}
                        </div>
        
    )
}

const PostC =()=>{
    const [cliked,setCliked] = useState(false)
    const [clikedImage,setClikedImage] = useState(false)
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const imgAdd=()=>{
        setClikedImage(true)
    }
    const clickHander=()=>{
        setCliked(true) 
    }
    const clickX=(e)=>{
        e.stopPropagation();
        setCliked(false) 
        setClikedImage(false)
    }
    const handleSubmit=async(e)=>{
       e.preventDefault();
       try {
        const response = await fetch('http://localhost:8091/api/addData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.status === 201) {
          console.log('データが正常に登録されました。');
          // フォームをクリアするか、リダイレクトなどの適切な処理を追加
          setCliked(false)
        } else {
          console.error('データの登録中にエラーが発生しました。');
        }
      } catch (error) {
        console.error('ネットワークエラー', error);
      }

      
    }

    return(
        <div className={styles.containp} onClick={clickHander}>
            <Image src={addImage} width={50}/>
            <div className={styles.titlep}>新規追加</div>
            {cliked && (
                <div className={styles.modalOverlay} >
                   <div className={styles.modalF}>
                    <div >
                   <Image src={X} width={40} className={styles.imgr} onClick={clickX} />
                    </div>
                   <div className={styles.cform}>
                    <form method="post" onSubmit={handleSubmit} >
                    {!clikedImage && (
                           <div className={styles.imgAdd} onClick={imgAdd}>
                           <Image src={addImage} height={50}/>
                           <div>写真を追加</div>
                       </div>
                    )}
                     
                        {clikedImage && (
                            <div className={styles.inputImg}>
                                  <div className={styles.inputT}>画像URLを追加</div>
                                <input name="imageUrl" type='text' placeholder='https://' className={styles.inputxt} value={formData.imageUrl} onChange={handleChange}/>
                            </div>
                        )}
                        <div className={styles.inputT}>タイトル</div>
                        <input name="title" type='text' className={styles.inputxt}  value={formData.title} onChange={handleChange}/>
                        <div className={styles.inputT}>説明</div>
                        <input name="description"type='text' className={styles.inputxt}  value={formData.description} onChange={handleChange}/><br/>
                        <input type='submit' value="追加" className={styles.button}/>    
                    </form>
                   </div>
                   </div>
                </div>
            )}
        </div>
    )
}


export default function Main() {
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
    

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8091/api/pages');
                const data = await response.json();
                // console.log(data);
                setPages(data);
              
            } catch (error) {
                console.error('ページ取得エラー', error);
            }
        }

        fetchData();
        
    }, []);
    
   
    return (
        <main className={styles.main}>
            <div className={styles.categoli}>
                <div className={styles.t4}>Catalog</div>
                    <div className={styles.flexconc}>
                        <PostC/>
                    {catalogs.map((item, i) => <Categolies key={i} title={item.title} img={item.imageUrl} id={item.id} description={item.description}/>)}
            </div>
            </div>
            <div className={styles.page}>
            <div className={styles.t4}>Page</div>
            <div className={styles.h4}></div>
            <div className={styles.flexcon}>
                
                {pages.map((item,i) => <Pages key={i} h4={item.title} img={item.imageUrl} name={item.title} id={item.id} content={item.content} />)}

            </div>
            </div>
        </main>
    )
}