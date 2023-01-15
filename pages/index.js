import Head from 'next/head'
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <b>Dru</b>.
          I'm a software engineer and former broadway performer.
          You can contact me on
          <a href='https://github.com/druserkes' rel='noopener noreferrer' target="_blank"> github</a>
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section>
        <Link href="/blog/posts/first-post">First Post</Link>
      </section>
    </Layout>
  )
}