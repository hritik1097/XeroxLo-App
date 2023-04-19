import React from 'react'
import Images from '../Images/logoimg.png'

const Contact = () => {
    return (
        <>


            <div id="Contact" className=" flex pt-8 justify-around text-white bg-gradient-to-b from-slate-900 to-black">
                <div class=" flex flex-col ">
                    <h4 className="text-2xl font-semibold pb-4">FOR ANY SUPPORT</h4>
                    <h4 className="text-xl"> Contact no</h4>
                    <h4 className="text-xl pb-4"> 7780072387</h4>
                    <h4 className="text-xl"> Email Id</h4>
                    <h4 className="text-xl"> xeroxlo48@gmail.com</h4>
                </div>

                <img className="logo3" src={Images} alt="logo" />


            </div>


        </>

    )
}

export default Contact
