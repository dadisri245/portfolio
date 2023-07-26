import React from 'react'
import './skills.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skills=()=>{
    return(
        <section id='skills'>
            <h2>Technical Skills</h2>
            <div className='container experience__container'>
                <div className="experience__frontend">
                    <h3>frontend </h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>HTML</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>CSS</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Bootstrap</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Javascript</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>JQuery</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>React js</h4>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                <h3>backend </h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Python</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Java</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Php</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>MySQL</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Node Js</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Mongo Db</h4>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className='experience__details-icon'/><h4>Express js</h4>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills