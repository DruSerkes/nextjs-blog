import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from '../../../components/layout'
// import Script from "next/script";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated: `, window.FB)}
      /> */}
      <h1>First Post</h1>
      <Image src="/profile.jpg" width={400} height={275} alt="Profile image" className="Profile-Image" />
    </Layout>
  );
}