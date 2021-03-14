import React from 'react';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'



export default function Layout({ children }) {
    return (

        <body className="">
            <Head>
                <title>Smileys Barber Supplier</title>
            </Head>
            <Navbar/>

            {children}

            <Footer/>
        </body>

    )
}