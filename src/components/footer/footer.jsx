import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {SiLeetcode,SiHackerrank,SiGeeksforgeeks} from 'react-icons/si'
import './footer.css'
function Footer(){
    return(
        <footer>
            <ul className='permalinks'>
                <li><a href="index.html">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Projects</a></li>
                <li><a href="#contact">Contact</a></li>               
            </ul>
            <div className='footer__socials'>
                <a href="https://github.com/dadisri245"rel="noreferrer"  target="_blank"><BsGithub/></a>
                <a href="https://www.hackerrank.com/dadisri245?hr_r=1" rel="noreferrer" target="_blank"><SiHackerrank/></a>
                <a href="https://leetcode.com/srilakshmi_245/"rel="noreferrer"  target="_blank"><SiLeetcode/></a>
                <a href="https://www.linkedin.com/in/srilakshmi-dadi-2391b1240" rel="noreferrer" target="_blank"><BsLinkedin/></a>
                <a href='https://auth.geeksforgeeks.org/user/dadisri245' rel="noreferrer" target="_blank"><SiGeeksforgeeks/></a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; srilakshmi dadi</small>
            </div>
        </footer>
    )
}
export default Footer