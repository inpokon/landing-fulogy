import React from 'react';
import Head from 'next/head';
import './index.scss';
import Nav from "../components/Nav/Nav";
import Main from "../conteiners/Main/Main";
import Price from "../conteiners/Price/Price";
import Established from "../conteiners/Established/Established";
import Slider from "../conteiners/Slider/Slider";
import BoxInfo from "../conteiners/BoxInfo/BoxInfo";
import ConstructorBlock from "../conteiners/Construcror/ConstructorBlock";

const Home = () => (
    <>
        <Head>
            <title>Fulogy | Группа компаний</title>
            <link rel="icon" href="/favicon.ico"/>
            <link rel="stylesheet" href="/fonts/fonts.css"/>
        </Head>
        <Nav/>
        <Main/>
        <Price/>
        <Established/>
        <Slider/>
        <BoxInfo/>
        <ConstructorBlock/>
    </>
);

export default Home
