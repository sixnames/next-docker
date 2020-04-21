import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid dolores, excepturi, ipsa iste officiis possimus provident quasi rem sint tempore, velit vitae? Amet dolore doloremque inventore laborum laudantium tempora.
      <div>
        <img src="/images/home.jpeg" alt=""/>
      </div>
      <div><Link href={'/about'}>About</Link></div>
    </div>
  )
}
