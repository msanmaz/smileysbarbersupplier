import React from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function Layout({ children }) {
    return (

        <>
<Head>
<title>Smileys Barber Supplies</title>
<meta name="title" content="Smileys Barber Supplies">
<meta name="description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers">

<meta property="og:type" content="website">
<meta property="og:url" content="https://smileysbarbersupplier.vercel.app">
<meta property="og:title" content="Smileys Barber Supplies">
<meta property="og:description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers">
<meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/smileysbarber.appspot.com/o/Screenshot%202021-05-20%20at%2021.13.00.png?alt=media&token=3f0c4ee1-d293-4365-b53f-267434406b6b">

<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="Smileys Barber Supplies">
<meta property="twitter:description" content="We are a professional barber shop and barber equipment supplier, Our products are hair care items, shaving, barbering. We sell barbering products from brands such as Totex, Arko, Absolute, PermaSharp, Barbicide. We also have a range of professional clippers">
<meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/smileysbarber.appspot.com/o/Screenshot%202021-05-20%20at%2021.13.00.png?alt=media&token=3f0c4ee1-d293-4365-b53f-267434406b6b">
</Head>
            <Navbar/>

            {children}

            <Footer/>
        </>

    )
}