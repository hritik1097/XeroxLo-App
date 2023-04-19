import React from 'react'
// import { Link } from 'react-router-dom'
import Image from '../Images/homeimg.png'

const Home = () => {
    return (

        <div id="Home" className="flex justify-center bg-gradient-to- from-black to-cyan-700">
            <div className="flex flex-col mr-10  pt-28 gap-6 ">
                <div className="flex flex-col gap-6">
                    <h1 className="  text-7xl font-bold text-right webkitEdit ">ARE U</h1>
                    <h1 className=" text-7xl font-bold text-right webkitEdit">HURRY FOR</h1>
                    <h1 className="   text-7xl font-bold text-right webkitEdit">PRINT ?</h1>
                    <h1 className=" text-white text-right text-5xl font-bold">XEROXLO IS HERE</h1>
                </div>
                <div className="flex gap-3 items-center justify-end">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-5xl text-right text-white">SEND</h1>
                        <h1 className="text-5xl text-right text-white">GET</h1>
                    </div>
                    <h1 className=" flex justify-end text-9xl  font-bold webkitEdit">IT</h1>
                </div>
            </div>
            <img className="logo" src={Image} alt="hero" />
        </div>

    )
}

export default Home
