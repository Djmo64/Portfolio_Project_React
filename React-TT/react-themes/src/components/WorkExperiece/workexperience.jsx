import React, { useState } from 'react';
import '../WorkExperiece/workexperience.css';
import '../Skills/skills.css'
import reactIcon from '../../logo.svg';
import jsIcon from '../../assets/photos/javascript.png';
import nodeIcon from '../../assets/photos/node.png';
import cssIcon from '../../assets/photos/css.png';
import sassIcon from '../../assets/photos/sass.png';
import pythonIcon from '../../assets/photos/python.png';
import mongoDBIcon from '../../assets/photos/mongodb.png';
import sqlIcon from '../../assets/photos/sql.png';
import rubyIcon from '../../assets/photos/ruby.png';

export default function WorkE(props){
    const [Section, setSection] = useState(2);
    const [WorkEx, setWorkEx] = useState([
        {
            title: 'Vimbel: Remote - Front-end Developer(Contract)',
            date: 'June 2021 – Present',
            body: 'Currently developing UI and front facing functionality for workplace tool application. Working on both the web application and mobile. ',
            icons: [reactIcon,jsIcon,nodeIcon,cssIcon,sassIcon,mongoDBIcon]
        },
        {
            title: 'Tasweiq Marketing: Remote - Full Stack Developer(Part-Time)',
            date: 'July 2020 – July 2021',
            body: 'I have designed and implemented fully function Ecommerce web application components during agile development for overseas digital marketing platform using React.js library. I have also built backend databases for the company’s thousands of products as well as user accounts.',
            icons: [reactIcon,jsIcon,nodeIcon,cssIcon,sassIcon,mongoDBIcon]
        },
        {
            title: 'Cuti App: Remote - Web Developer(Part-Time)',
            date: 'February 2021 - June 2021',
            body: 'Previously a partimer at a startup company. Assisting in front end and back end development.',
            icons: [reactIcon,jsIcon,nodeIcon, cssIcon]
        },
        {
            title: 'Upwork:  Freelance developer(Contract)',
            date: 'January 2019 – January 2022',
            body: 'I have taken and am currently an active freelance developer, working on projects as needed for clientele. Primarily taking projects that require react implementation or CSS/Sass styling.',
            icons: [reactIcon,jsIcon,nodeIcon,cssIcon,sassIcon,pythonIcon,mongoDBIcon,sqlIcon,rubyIcon]
        },
        {
            title:'Beyond Words Workshops:  Front End Developer(Intern)',
            date: 'January 2018 – July 2020',
            body: 'I interned for a non-profit organization designing the UI and functional components for the organizations main site. Building the site using JavaScript and styling with CSS.',
            icons: [reactIcon,jsIcon,cssIcon,sassIcon]
        }
        
       
    ])
    
            const exp = WorkEx.map((w,index)=>{
                    return(
                        <div>
                            <div className='glass-container' >
                            <div className='white-container'>
                            <div className='title' >
                                <h2 >{w.title}</h2>
                                <small>{w.date}</small>
                            </div>
                            <div className='body'>
                                {w.body}
                            </div>
                            <div className='icons'>
                                {w.icons.map((i)=>{
                                    return(
                                        <div>
                                           <img src={i}/>
                                        </div>
                                    )
                                })}
                            </div>
                            </div>
                            </div>
                        </div>
                    )
            })

    return(
        <div className='Exp-Container load'>
            <h1 style={{background:'black'}}>Work Experience</h1>
            <div className='workex-container'>
            {exp}
            </div>
        </div>
    )
}