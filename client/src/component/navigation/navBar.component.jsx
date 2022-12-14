import {React, useState} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Fragment } from 'react'
// import UniButton from '../button/button.component'
// import Footer from '../footer/footer.component'
// import { BsLinkedin, BsGithub } from "react-icons/bs";

// import './nav-bar.styles.scss'

const NavBar = () => {
    // const [navBackgroundColor, setNavBackgroudColor] = useState(null)

    // const navHome = () => {
    //     setNavBackgroudColor("home")
    // }

    // const navProject = () => {
    //     setNavBackgroudColor("project")
    // }

    // const navContact = () => {
    //     setNavBackgroudColor("contact")
    // }

  return (
    <Fragment>
    <div className='nav-bar-box'>
        {/* <div className='nav-bar-headline'>
            <h1>Hung Van Hoang</h1>
        </div>
        <div className='nav-bar-sub-headline'>
            <h3>Full-stack Web developer</h3>
        </div>
        
        <div className='nav-bar-button-box'>
            <div className='nav-bar-button'><UniButton url='https://www.linkedin.com/in/vhunghoang/' icon={<BsLinkedin size="1.5rem"/>} variant="outline-light" buttonName='LinkedIn'/></div>
            <div className='nav-bar-button'><UniButton url='https://github.com/HungHoang108' icon={<BsGithub size="1.5rem"/>} variant="info" buttonName="GitHub"/></div>
        </div> */}

        <div className='nav-bar-route-box'>
            <div onClick={navHome} className='nav-bar-route'>
                <Link  className='nav-bar-link' to='/'>Home</Link>
            </div>

            <div onClick={navProject}  className='nav-bar-route'>
                <Link className='nav-bar-link' to='/project'>Projects</Link>
            </div>

            <div onClick={navContact} className='nav-bar-route'>
                <Link  className='nav-bar-link' to='contact' >Contact</Link>
            </div>

            {/* <div className='nav-bar-route'>
                <Link className='nav-bar-link' to='/blog'>Blog</Link>
            </div> */}
        </div>
    </div>
    {/* <Outlet/>
    <Footer/> */}
    </Fragment>
  )
}

export default NavBar