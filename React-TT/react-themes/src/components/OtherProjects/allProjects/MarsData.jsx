import { useEffect, useState } from "react"

const API_KEY = `SJtLy0wNppl58fwcHcMcFKo9i4tkASgJlgLSmXkJ`
const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`




export  function MarsData(props){

    const [results, setReslts] = useState([{}])
    const [isloading, setIsLoading] = useState(true)
   
    const dateChoice = props.date
    const cam = props.cam
   
    
     useEffect( ()=>{
         let isSubscribed = true


        async function fetchdata(){

        let payload= [] ;
            const response = await fetch(API_URL)
           if(isSubscribed){ payload = await response.json()}
        try{
            const data = payload.photos;
            
            const marsPhotos = Object.entries(data).map(([key, val])=>{
                return{
                    
                    key: key,
                    name: val.rover.name,
                    img: val.img_src,
                    camera: val.camera.name,
                    date: val.earth_date
                    
                }
            }, )
            console.log(data)
             setReslts([{marsPhotos}]) 
             setIsLoading(false)
        } catch{
            console.log('No Data')
        }
            
        }
             
             
      fetchdata()
      return()=>(isSubscribed = false)
    }, [])
    
    
    return(
        <div>
            
          {isloading ?
            <div>
                fetching...
            </div>
            :
             <div id='mars-items' className='mars-items'>
                 {cam === null && dateChoice === null ?
                    isloading === false ? results[0].marsPhotos.map((m, idx)=>{
                    
                     return(
                         <div onClick={()=>{window.open(m.img)}} className='mars-item-container'  key={idx}>
                            <div className='title'>
                                {m.name}
                            </div>
                            <div className='img-container'>
                            <img className='mars-img' src={m.img} alt={m.name}/>
                            <span>{m.date}</span>
                            </div>
                         </div>
                     )
                 }): null
                 : 
                    isloading === false ? results[0].marsPhotos.map((m, idx)=>{
                        
                     return(
                        cam === m.camera && dateChoice === null  ?
                         <div onClick={()=>{window.open(m.img)}} className='mars-item-container'  key={idx}>
                            <div className='title'>
                                {m.name}
                            </div>
                            <div className='img-container'>
                            <img className='mars-img' src={m.img} alt={m.name}/>
                            <span>{m.date}</span>
                            </div>
                            
                            
                 
                         </div>
                         : 
                         dateChoice === m.date && cam === null ?
                         <div onClick={()=>{window.open(m.img)}} className='mars-item-container'  key={idx}>
                            <div className='title'>
                                {m.name}
                            </div>
                            <div className='img-container'>
                            <img className='mars-img' src={m.img} alt={m.name}/>
                            <span>{m.date}</span>
                            </div>
                         
                         </div>
                         : 
                         dateChoice === m.date && cam === m.camera ?
                         <div onClick={()=>{window.open(m.img)}} className='mars-item-container'  key={idx}>
                         <div className='title'>
                             {m.name}
                         </div>
                         <div className='img-container'>
                         <img className='mars-img' src={m.img} alt={m.name}/>
                         <span>{m.date}</span>
                         </div>
                      
                      </div>: null
                     )
                 }): null}
                 

          
            </div>}
            
        </div>
    )
}