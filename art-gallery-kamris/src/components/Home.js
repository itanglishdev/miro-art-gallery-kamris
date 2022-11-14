import { useState } from "react";
import { data } from "../data/DataBase";
import { Link } from "react-router-dom";

function Home() {

    const [transition,setTransition] = useState(data)
    
   //  function onMouseHandler(e){
   //    let imageHovered = transition.filter(item => item.id === e.target.id)
   //      setTransition(imageHovered)
   //  }
   //  function offMouseHandler(){
   //       setTransition(data)
   //  }

    let allImages = transition.map((item) => {
      return  (
         //  <Link className="" to={`/about/${item.title}`}>
          <div key={item.id} className="single-image-container"
          >
             <img 
             className='image__paintings'
             src={item.image}
             id={item.id}
            //  onMouseOver={(e)=>onMouseHandler(e)}
            //  onMouseOut={offMouseHandler}
             alt=""
             />
          </div>
      )})

   //  if(transition.length > 1 ){
   //       allImages = transition.map((item) => {
   //          return  (
   //             //  <Link className="" to={`/about/${item.title}`}>
   //              <div key={item.id} className="single-image-container"
   //              >
   //                 <img 
   //                 className='image__paintings'
   //                 src={item.image}
   //                 id={item.id}
   //                 onMouseOver={(e)=>onMouseHandler(e)}
   //                 onMouseOut={offMouseHandler}
   //                 alt=""
   //                 />
   //              </div>
               //  </Link>
   //          )    
   //       })
   //  } else {
   //      allImages = transition.map((item) => {
   //          return  (
   //           <div key={item.id} className="single-image-container"
   //           style={{
   //              // width:'100vh',
   //              // opacity: '.7',
   //              // background:'rgb(50, 41, 41, .7)'
   //           }}
   //            >
   //               <img 
   //               className='image-mouse__off flex-image'
   //               src={item.image}
   //               id={item.id}
   //               onMouseEnter={(e)=>onMouseHandler(e)}
   //               onMouseOut={offMouseHandler}
   //               alt=""
   //               />
   //              <span><p>{item.title}</p><p>{item.year}</p></span>
   //            </div>
   //          )    
   //       })
   //  }

    return ( 
        <div  className="images-container">
            {allImages}
        </div>
     );
        
}

export default Home;