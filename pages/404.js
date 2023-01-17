import Image from "next/image";
import Layout from "../components/layout";
import utilStyles from '../styles/utils.module.css'

export default function Custom404() {
  return (
    <Layout>
      <h1 className={`${utilStyles.heading2Xl} ${utilStyles.textCenter}`}>404 - Page Not Found</h1>
      <div className={utilStyles.centeredContent}>
        <Image
          src="https://images.unsplash.com/photo-1597633611385-17238892d086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Fatty Corgi"
          width={200}
          height={200}
          style={{ borderRadius: '4px' }}
        />
        <p>Here's a consolation Corgi</p>
      </div>
    </Layout>
  )
}
