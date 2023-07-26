import React from 'react'
import './header.css'
import CTA from './CTA'
const Header=()=>{
    return(
        <header>
            <div className='container header__container'>
                <h1>Sri lakshmi Dadi</h1>
                <h5 className="text-light">Fullstack developer</h5>
                <CTA/>
            </div>
        </header>
    )
}
export default Header