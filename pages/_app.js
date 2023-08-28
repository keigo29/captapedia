import Head from 'next/head'
import Header from '../components/header' //ヘッダーコンポーネント
import Main from '../components/main' //メインコンポーネント
import Footer from '../components/footer' //フッターコンポーネント
import "../styles/global.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Catapedia</title>
        <link rel="stylesheet" href="/css/common.css" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet"></link> */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"></link>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
