import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/user/Nav'
import Script from 'next/script'
import UserLayout from '../components/user/UserLayout'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router'

export default function Home() {
            const mahasiswa=
            [
              {nim : '1120101862',nama:'Ajeng'},
              {nim : '1120101936', nama:'Dinny Aziza'},
              {nim : '1120101909', nama:'Titis Nur'},
            ];

  const router = useRouter()
  const sendParamRouter=(nim)=>{
    router.push(`/user/${nim}`)
  }

  return (
    <UserLayout>
      <div className="container mt-3">
      <Head>
        <title>project Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h2>DATA MAHASISWA</h2>
        <h5>DAFTAR MAHASISWA</h5>
        <ul>
          {mahasiswa.map((mhs,idx)=>(
            <>
            <li key={idx}>
              <Link href={`user/${mhs.nim}`}>
              <a>{mhs.nim}</a>
              </Link>
              <p>{mhs.nama}</p>
              <button className='btn btn-primary' onClick={(e)=>sendParamRouter(mhs.nim)} >cek nilai</button>
            </li>
            </>
          ))}
        </ul>
      </main>

      <footer>
       <h4>footer</h4>
      </footer>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>

    </div>
    </UserLayout>
    
  )
}
