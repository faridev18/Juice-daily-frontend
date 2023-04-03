import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Bloglayout from "../components/Bloglayout/Bloglayout";
import Trending from "../components/Trending/Trending";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <Bloglayout/>
      <Trending/>

        
    </>
  )
}
