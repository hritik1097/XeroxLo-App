import React from 'react'
// import { Link } from 'react-router-dom'


const Services = () => {
    return (
        <>
            <div className="flex justify-around service">
                <div className="">
                    <h1 id="Service" className="text-5xl font-bold flex p-10  text-white ">SEND YOUR PRINT</h1>
                    <input className="pl-10" type="file" />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col text-white">
                        <h1 className="pt-10 pb-10 font-bold ">TYPE OF PRINT</h1>
                        <div className="flex gap-10">
                            <button className="bg-cyan-900 p-3  rounded-2xl ">Black&White</button>
                            <button className="bg-cyan-900 p-3 rounded-2xl ">Color Print</button>
                            <button className="bg-cyan-900 p-3  rounded-2xl ">Golden Book</button>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h1 className="pt-10 pb-10 font-bold">EXTRA STUFFS</h1>
                        <div className="flex gap-10">
                            <button className="bg-cyan-900 p-3 rounded-2xl ">stick file</button>
                            <button className="bg-cyan-900 p-3 rounded-2xl ">index page</button>
                            <button className="bg-cyan-900 p-3 rounded-2xl ">project file</button>
                            <button className="bg-cyan-900 p-3 rounded-2xl ">stick file</button>
                            <button className="bg-cyan-900 p-3 rounded-2xl ">front page</button>
                        </div>
                    </div>

                    <div className="flex flex-col text-white">
                        <h1 className="pt-10 pb-10 font-bold">PICK BLOCK</h1>
                        <div className="flex gap-10">
                            <button className="bg-cyan-900 px-4 py-2 rounded-2xl ">B4</button>
                            <button className="bg-cyan-900 px-4 py-2 rounded-2xl ">D1</button>
                            <button className="bg-cyan-900 px-4 py-2 rounded-2xl ">C3</button>
                        </div>
                    </div>

                    <button className="flex justify-center w-32 text-white bg-cyan-900 p-2 mt-10 mb-10 rounded-2xl ">WhatsApp no</button>
                    <button className="flex justify-center w-20 p-2 text-white bg-cyan-900 rounded-2xl ">Submit</button>


                </div>
            </div>
        </>

    )
}

export default Services
