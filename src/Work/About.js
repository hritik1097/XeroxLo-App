import React from 'react'
import Omi from '../Images/altaf.jpeg'
import Ritik from '../Images/ritik.jpeg'
import Altaf from '../Images/altaf.jpeg'
// import Omi from '../Images/altaf.jpeg'

const About = () => {
    return (
        <div className="">
            <h1 className="text-4xl flex  justify-center">About Us</h1>
            <div className="flex justify-around items-center">
                <div className="ceo">
                    <img className="w-60 h-70 bg-clip-content" src={Omi} alt="ceo" />
                    <h3>Om Prakash Prasad <br /> (Founder&CEO)</h3>

                </div>
                <div class="">
                    <img className="w-60 h-70 bg-clip-content" src={Ritik} alt="cto" />
                    <h3>Ritik Kumar Ratna <br /> (Co-founder&CTO)</h3>
                </div>
                <div class="ceo">
                    <img className="w-60 h-70 bg-clip-content" src={Altaf} alt="cfo" />
                    <h3> Md Altaf Alam <br /> (Co-founder&CMO)</h3>
                </div>

            </div>
        </div>

    )
}

export default About
