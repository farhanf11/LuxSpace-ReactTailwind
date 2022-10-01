import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../parts/Hero";
import BrowsRoom from "../parts/BrowsRoom";
import JustArrived from "../parts/JustArrived";
import Clients from "../components/Clients"
import AsideMenu from "../components/AsideMenu";

export default function Home (props){
    return(
        <>
            <Navbar theme='white' position='absolute'/>
            <Hero/>
            <BrowsRoom/>
            <JustArrived/>
            <Clients/>
            <AsideMenu/>
            <Footer/>
        </>
    );
}