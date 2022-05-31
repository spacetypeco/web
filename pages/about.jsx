import Head from "next/head";
import Link from 'next/link'

const LynneYun = <Link href="https://lynneyun.com">Lynne Yun</Link>;
const KevinYeh = <Link href="http://kevbk.com">Kevin Yeh</Link>;

export default function About() {
    return (
    <>
      <Head>
        <title>Space Type - About</title>
        <meta property="og:title" content="Space Type - About" />
      </Head>
      <div>
        <main>
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <div className="fade-in content markdown-body">
            <h1>Space Type</h1>
            <p>
            Space Type is an NYC-based studio practice operating at the 
            intersection of type and technology. Led by { LynneYun } and { KevinYeh }, 
            the studio specializes in experiential letterforms and web experiences.
            </p>
            <p>
            We work with individuals and organizations to express unique narratives 
            and connect the seams between type design and digital interaction. We offer retail typefaces, partner with institutions, and engage with communities through 
            workshops, classes, and donation-based resources.
            </p>
            </div>
            </div>
          </div>
        </main>
     </div>
     </>
  )
}
