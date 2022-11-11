import { useState } from "react";
import { data } from "../data/DataBase";

function Home() {

    const [transition,setTransition] = useState(data)
    
    function onMouseHandler(e){
       console.log('CLICK',e.target.id);
      let imageHovered = transition.filter(item => item.id === e.target.id)
        setTransition(imageHovered)
    }
    function offMouseHandler(){
         setTransition(data)
    }

    let allImages =[]

    if(transition.length > 1 ){
         allImages = transition.map((item) => {
            return  (
             <div key={item.id} className="single-image-container"
              >
                 <img 
                 className='image__paintings'
                 src={item.image}
                 id={item.id}
                 onMouseOver={(e)=>onMouseHandler(e)}
                 onMouseOut={offMouseHandler}
                 alt=""
                 />
              </div>
            )    
         })
    } else {
        allImages = transition.map((item) => {
            return  (
             <div key={item.id} className="single-image-container"
              >
                <span><p>{item.title}</p><p>{item.year}</p></span>
                 <img 
                 className='image-mouse__off'
                 src={item.image}
                 id={item.id}
                 onMouseOver={(e)=>onMouseHandler(e)}
                 onMouseOut={offMouseHandler}
                 alt=""
                 />
              </div>
            )    
         })
    }

    return ( 
        <div  className="images-container">
            {allImages}
        </div>
     );
        
}

export default Home;