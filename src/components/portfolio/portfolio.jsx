import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.png'
import IMG6 from '../../assets/6.png'
import IMG7 from '../../assets/7.png'
import IMG8 from '../../assets/8.png'
import IMG9 from '../../assets/9.png'
import IMG10 from '../../assets/10.png'
import IMG11 from '../../assets/11.png'
import IMG12 from '../../assets/12.png'
const data=[
    {
        id:1,
        image:IMG1,
        title: 'Tenzies game',
        github:'https://github.com/dadisri245/tenzies-game' ,
        demo: 'https://react-tenzies-game-website.netlify.app/'
    },
    {
        id:2,
        image:IMG2,
        title: 'weather forecast app',
        github:'https://github.com/dadisri245/weather' ,
        demo: 'https://react-live-weather-website.netlify.app/' 
    },
    {
        id:3,
        image:IMG3,
        title:'Mathematic website',
        github:'https://github.com/dadisri245/mathsWebsite',
        demo:'https://dadisri245.github.io/mathsWebsite/' 
    },
    {
        id:4,
        image:IMG4,
        title: 'To do application',
        github:'https://github.com/dadisri245/ToDo',
        demo:'https://dadisri245.github.io/ToDo/'

    },
    {
        id:5,
        image:IMG5,
        title: 'Online notepad app',
        github: 'https://github.com/dadisri245/notes-react-app',
        demo:'https://react-online-notepad.netlify.app' 
    },
    {
        id:6,
        image:IMG6,
        title: 'password generator',
        github:'https://github.com/dadisri245/random-password',
        demo:'https://dadisri245.github.io/random-password/'        
    },
    {
        id:7,
        image:IMG7,
        title: 'result management system',
        github: 'https://github.com/dadisri245/ResultManagementSystem'
    },
    {
        id:8,
        image:IMG8,
        title: 'online e-learning website',
        github:'https://github.com/dadisri245/EduTech' ,
        demo:'https://dadisri245.github.io/EduTech/' 
    },
    {
        id:9,
        image:IMG9,
        title: 'Birthday counter website',
        github:'https://github.com/dadisri245/birthday-counter',
        demo:'https://dadisri245.github.io/birthday-counter/0' 

    },
    {
        id:10,
        image:IMG10,
        title: 'Grocery management app',
        github:'https://github.com/dadisri245/grocery-store'
    },
    {
        id:11,
        image:IMG11,
        title: 'Fruit slicer game',
        github:'https://github.com/dadisri245/Fruit-Slicer',
        demo:'https://dadisri245.github.io/Fruit-Slicer/'

    },
    {
        id:12,
        image:IMG12,
        title: 'Snake game',
        github:'https://github.com/dadisri245/snake-game', 
        demo:'https://dadisri245.github.io/snake-game/' 
    }
    
]
const Portfolio=()=>{
    return(
            <section id='portfolio'>
                <h2>Projects</h2>
                <div className='container portfolio__container'>{
                    data.map(({id,image,title,github,demo})=>{
                        return(
                        <article key={id} className='portfolio__item'>
                        <div className='portfolio__item-image'>
                            <img src={image} alt={title}/>
                        </div>
                        <h3>{title}</h3>
                        <div className='portfolio__item-cta'>
                         <a href={github} className='btn' rel='noreferrer' target='_blank'>Github</a>
                         <a href={demo} className='btn btn-primary' rel='noreferrer' target='_blank'>Live demo</a>
                        </div>
                    </article>
                        )
                    })
                }
                </div>
            </section>
    )
}                   
export default Portfolio