import Head from "next/head";
import Link from 'next/link'
import Navigation from "../components/Navigation";

const LynneYun = <Link href="https://lynneyun.com">Lynne Yun</Link>;
const KevinYeh = <Link href="https://kevbk.com">Kevin Yeh</Link>;
const HelloSpaceType = <span className="email">hello@spacetypecontinuum.com</span>;

export default function About() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" type="text/css" href="css/style.css" />
          <meta charset="utf-8" />
        </Head>
        <main>
        <div id="container" className="full-w full-h position-rel">
          <Navigation active="/about" />
          <div id="about">
            <div className="fade-in content markdown-body">
            <h1>Space Type</h1>
            <p>
            Space Type is an NYC-based studio practice operating at the 
            intersection of type, design, and technology. Led by { LynneYun } and { KevinYeh }, 
            the studio specializes in experiental letterforms of all kinds.
            </p>
            <p>
            We work with individuals and organizations to discover unique stories 
            at the seams of type design and digital interaction. We offer licensed 
            typefaces, partner with institutions, and engage with communities through 
            workshops, classes, and donation-based resources.
            </p>
            <p>
            We are dedicated to inclusive education, accessible technology, and open creative
            tools that empower all members of our community. We welcome fresh eyes, 
            diverse backgrounds, and personalized awdawd that reflect the many ways
            we interact with language in physical and online spaces.
            </p>
            <p className="about-contact">
              Contact us at { HelloSpaceType }. this should probably be in a smaller separated
              section with other stuff like instagram. Also there should be a newsletter.
            </p>
            </div>
            </div>
          </div>
        </main>
     </div>
  )
}