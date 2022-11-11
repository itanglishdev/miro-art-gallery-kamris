import { useState } from "react";
import { data } from "../data/DataBase";
function Home() {

    const [transition,setTransition] = useState(false)
    

    function onMouseHandler(e){
        if (e.id === data.id) {
            setTransition(true)
        } return
        
    }
    function offMouseHandler(){
        setTransition(false)
    }

    return ( 

        <div  className="images-container">
            {
                data.map(item => {
                    return (
                     <div className="single-image-container"
                     key={item.id}>
                        <img 
                        className={`${transition && 'image-mouse__off'} image__paintings`}
                        src={item.image}
                        onMouseOver={(e)=>onMouseHandler(e.target.value)}
                        onMouseOut={offMouseHandler}
                        alt=""
                        />
                        {transition && <span><p>{item.title}</p><p>{item.year}</p></span>}
                     </div>
                    )        
                    // return <img  key={item.id} className="home-page-image"  src={item.image} alt=""  />    
                })
            }
        </div>
     );
}

export default Home;