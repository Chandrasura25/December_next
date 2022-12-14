import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
export default function Home() {
  let router = useRouter();
  const prevPage = ()=>{
    // router.push(-1)
    router.back()
  }
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
     <Head>
      <title>Home Page</title>
     </Head>
      <main className={styles.main}>
        <Link href='/users'>Link to Users</Link>
        <Link href='/posts'>Link to Posts</Link>
        <img src="/img.jpg" alt="" width="300px" height="300px"/>
        {/* <Image src="/img.jpg" alt="" width="300" height="300" placeholder='blur'/> */}
        <Image src="/img.jpg" alt="" width="300" height="300"/>
        <button className='btn btn-outline-success' onClick={prevPage}>Prev page</button>
      </main>

    </div>
  )
}
// Home.getLayout = function PageLayout(page){
//   return <>
//   {page}
//   </>
// }
Home.getLayout = (page)=>{
  return <>
  {page}
  <Footer/>
  </>
}