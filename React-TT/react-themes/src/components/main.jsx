import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import ContactI from './ContactInfo/contactinfo';
import Overview from './Overview/overview';
import Skills from './Skills/skills';
import WorkE from './WorkExperiece/workexperience';
import OtherProjects from './OtherProjects/OtherProjects';



export function Main(){


    return(
           
               <Switch>
                   <Route exact path= '/' component={Overview}/>
                   <Route exact path= '/Skills' component={Skills}/>
                   <Route exact path= '/WorkExperience' component={WorkE}/>
                   <Route exact path= '/ContactInformation' component={ContactI}/>
                   <Route exact path= '/Projects' component={OtherProjects}/>
                   <Redirect to='/'/>
               </Switch>
          
    )
}