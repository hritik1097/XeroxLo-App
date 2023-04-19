import React from 'react'
import { Link } from 'react-scroll'
import Images from '../Images/logoimg.png'


const Navbar = () => {
    const links = [
        {
            id: 1,
            link: "Home"
        },

        {
            id: 2,
            link: "Service"
        },

        {
            id: 3,
            link: "Contact"
        },
    ];

    return (
        <div className='navbar flex justify-between  w-full text-white bg-transparent fixed '>
            <div>
                <img className="logo2" src={Images} alt="logo" />
            </div>
            <ul className="flex items-center">
                {links.map(({ id, link }) => (
                    <li key={id} data-value={link} className="linkButtons px-4 cursor-pointer font-medium text-gray-100">
                        <Link to={link} smooth duration={1000}>
                            {link}
                        </Link>

                    </li>

                ))}

            </ul>
        </div>


    )

}

export default Navbar
