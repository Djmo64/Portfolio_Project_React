import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext();
export const TabContext = React.createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('theme');
   
    return( 
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}

// export const TabProvider = (props) => {
//     const [tab, setTab] = useState(0);
    
//     useEffect(()=>{
//         const TabData = window.localStorage.getItem('Page-Information');        
       
//         if(TabData){
//            setTab(JSON.parse(TabData));
//         }
       
//       },[])
//       useEffect(()=>{
//         window.localStorage.setItem('Page-Information', JSON.stringify(tab));
//         console.log('tab is now: ' + tab);
        
//     },[tab])
   
//     return( 
//         <TabContext.Provider value={[tab,setTab]}>
//             {props.children}
//         </TabContext.Provider>
//     )
// }