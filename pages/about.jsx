import Head from "next/head";
import Link from 'next/link'
import Navigation from "../components/Navigation";
import Script from "next/script";

//    <Script src="js/fade.js"/>

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
      <Navigation/>
      <div id="about">
        <div className="content markdown-body">
          <h1>Space Type</h1>
          <p>
          Space Type is an NYC-based studio practice operating at the 
intersection of type, design, and technology. Led by { LynneYun } and { KevinYeh }, the studio specializes in creating experiential letterforms of all 
kinds, from typeface design to generative typography. The studio also 
offers licensing for digital typefaces in the retail store. Another core 
aspect of Space Type is to also share expertise for the creative 
community through teaching, and often run workshops, classes, and free 
online resources to provide accessibiliy to all.
          </p>
          <p className="about-contact">
            Contact us at { HelloSpaceType }.
          </p>
        </div>
      </div>
    </div>
  </main>
  </div>
    )
}