import Head from "next/head";
import Link from 'next/link'
import Navigation from "../components/Navigation";
import NewsletterSignup from "../components/NewsletterSignup";

const LynneYun = <Link href="https://lynneyun.com">Lynne Yun</Link>;
const KevinYeh = <Link href="http://kevbk.com">Kevin Yeh</Link>;
const Instagram = <Link href="https://instagram.com/spacetypeco">Instagram</Link>;
const HelloSpaceType = <span className="email">hello@spacetypeco.com</span>;

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
            intersection of type and technology. Led by { LynneYun } and { KevinYeh }, 
            the studio specializes in experiental letterforms and web experiences.
            </p>
            <p>
            We work with individuals and organizations to express unique narratives 
            and connect the seams between type design and digital interaction. We offer retail typefaces, partner with institutions, and engage with communities through 
            workshops, classes, and donation-based resources.
            </p>
            <p>
              Stay in touch:
            </p>
              <NewsletterSignup/>
            <div className="flex-h flex-v-sm" style={{ 'margin-top': '2rem '}}>
              <div className="flex-item-1-2 flex-item-sm-1">
                <h3>Contact</h3>
                <p className="subtext">
                  <ul className="list-basic">
                    <li>{ HelloSpaceType }</li>
                    <li>{ Instagram }</li>
                  </ul>
                </p>
              </div>
              <div className="flex-item-1-2 flex-item-sm-1">
                <h3>Services</h3>
                <p className="subtext">
                  <ul className="list-basic">
                  <li>Brand Strategy</li>
                  <li>Identity Systems</li>
                  <li>Web and Digital Design</li>
                  <li>Software Development</li>
                  <li>Custom Type Design</li>
                  <li>Retail Typeface Licensing</li>
                  </ul>
                  </p>
              </div>
            </div>
            </div>
            </div>
          </div>
        </main>
     </div>
  )
}