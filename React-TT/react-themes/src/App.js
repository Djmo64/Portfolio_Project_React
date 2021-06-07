import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Main } from "./components/main";
import { TabContext, ThemeContext } from "./components/themeContext";
import {BrowserRouter as Router, Link} from "react-router-dom";
import lock from '../src/assets/icons/lock-fill.svg';

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [tab, setTab] = useContext(TabContext);
  const [isLoaded, setIsLoaded] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isclosed, setClosed] = useState(true);

  
  useEffect(() => {
    setIsLoaded(true)

    setTimeout(() => {
      setIsLoaded(false);
       setTimeout(()=>{
         setIsLoaded(null)
    }, 1000)
    }, 5000)

    
  }, [tab])

  

  const route = ["Ocean", "Heavy Metal", "Garden", "Space"];
  const routes = route.map((r, index) => {
    return <div className='routeStyle' style={{transition: 'opacity .8s ease-in, transform .8s ease-in'}}><img className='lock' src={lock}/>{r}</div>;
  });
  const sideroute = [
    "Overview",
    "Skills", 
    "Work Experience",
    "Contact Information",
    "Other Projects",
  ];
  const sideroutes = sideroute.map((s, index) => {
    const sRoute = s.replace(/\s+/g, '');
    return <>
    <Link to={sRoute} className={tab=== index ?'sideroutes-tabs-active': 'sideroutes-tabs' } onClick={()=> {setTab(index); setClosed(true)}}>
      {s}
    <span className='arrows'>{'>>'}</span>
    </Link>
    </>;
  });
  return (
<Router>
    <div className="App">
      <nav className={theme}>
       <div className="banner">
        <h1>
          <div className="DevName" style={{marginRight:'15px'}}>Darron's</div>
          Web Developer Portfolio
        </h1>
        <div className='inset-radius'></div>
        </div>

        <div className="nav-themes"><p className='themeTitle'>Themes:</p>{routes}</div>

        <div onClick={()=>setIsActive(!isActive)} className={`burger${theme}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      </nav>
      <div className='main'>

      <div className={isclosed === false?'routes': 'routes-closed'}>
        <div className={isclosed === false? 'close-routes': 'close-routes-closed' } onClick={()=>{ setClosed(!isclosed)}}>
          <div className={isclosed === false?'close-line1': 'close-line1-closed'}></div>
          <div className={isclosed === false?'close-line2': 'close-line2-closed'}></div>
        </div>

        <h2 style={{marginBottom: '0', textAlign: 'center'}}>Content</h2>

        <div className='sideroutes-container'>
      {sideroutes}
      </div>

      </div> 


      <div  className={isActive=== true?`sidebar${theme}-active`: `sidebar${theme}`}>{routes}</div>
      
      <div className="content-container">


        {isLoaded === true ?<><div  className='preloader open'>
          <div className='loading-text'>
            <h1>Loading...</h1>
          </div>
        </div>
       
        </>:
          null
        }
        {isLoaded === false?
         <div className='preloader-finish close'>
         <div className='loading-text'>
           <h1>Loading...</h1>
         </div>
       </div>: null  
      }
        {isLoaded === null? 
        <Main/>: null
      }
      </div>
      </div>
      <div className='footer'></div>
    </div>
    </Router>
  );
}

export default App;
