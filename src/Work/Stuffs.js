import React from 'react'

const Stuffs = () => {
    return (
        <div>
            <div className="h-full bg-blue-300 w-1/4 rounded-2xl p-8 drop-shadow-xl z-1">
                <h1 className="text-3xl font-bold mb-10 ">Add other stuffs you want</h1>
                <div className="flex flex-col gap-5">
                    <div className="flex justify-around">
                        <h1 className="text-2xl">Stick File</h1>
                        <input className="w-6" multiple="multiple" type="checkbox" name="sfile" id="sfile" />
                    </div>
                    <div className="flex justify-around" >
                        <h1 className="text-2xl">Front page</h1>
                        <input className="w-6" multiple="multiple" type="checkbox" name="fpage" id="fpage" />
                    </div>
                    <div className="flex justify-around">
                        <h1 className="text-2xl">Index</h1>
                        <input className="w-6" multiple="multiple" type="checkbox" name="index" id="index" />
                    </div>
                    <div className="flex justify-around">
                        <h1 className="text-2xl">Punching File</h1>
                        <input className="w-6" multiple="multiple" type="checkbox" name="pfile" id="pfile" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <button className=" mt-10 text-white text-1xl font-semibold p-3 bg-green-600 rounded-xl">Add above</button>
                    <button className=" mt-10 text-white text-1xl font-semibold p-3 bg-green-600 rounded-xl">Next</button>
                </div>

                <p className="mt-10">Disclaimer: per page @ Rs 2</p>
            </div>
        </div>
    )
}

export default Stuffs
