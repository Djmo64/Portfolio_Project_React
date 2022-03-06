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
            title: 'Vimbel: Remote - Front-end Developer/Mobile(Contract)',
            date: 'June 2021 – Present',
            body: 'Currently developing UI and front facing functionality for workplace tool application. Successfully built task management system for mobile application users and groups. Working on both the web application and mobile.',
            icons: [reactIcon,jsIcon,nodeIcon,cssIcon,sassIcon,mongoDBIcon]
        },
        {
            title: 'Tasweiq Marketing: Remote - Full Stack Developer(Contract)',
            date: 'July 2020 – July 2021',
            body: 'Designed and implemented fully function ecommerce web application components during agile development for overseas digital marketing platform using React.js library. Built backend databases for the company’s products and user account authentification.',
            icons: [reactIcon,jsIcon,nodeIcon,cssIcon,sassIcon,mongoDBIcon]
        },
        {
            title: 'Cuti App: Remote - Web Developer(Part-Time)',
            date: 'February 2021 - June 2021',
            body: 'Worked part-time at a small startup. Assisting in building front-end components.',
            icons: [reactIcon,jsIcon,nodeIcon, cssIcon]
        },
        {
            title: 'Upwork:  Freelance developer(Contract)',
            date: 'January 2019 – January 2022',
            body: 'Currently an active freelance developer, working on projects as needed for clientele. Primarily taking projects that require react implementation or CSS styling.',
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