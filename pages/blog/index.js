import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (<>
    <h1>Hello from blog/index.js</h1>
    <div><Link href="/">Home</Link></div>
    <Image src="/profile.jpg" width={400} height={275} alt="Profile image" />
  </>
  );
}