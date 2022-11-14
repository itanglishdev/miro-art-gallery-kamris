import { useState } from "react";
import { data } from "../data/DataBase";
import { Link } from "react-router-dom";
import Card from "./Card";

function Home() {

    const [transition,setTransition] = useState(data)
  
    let allImages = transition.map((item) => {
      return  (
         <Link key={item.id} className="" to={`/about/${item.id}`}>
            <Card 
            value={item.id}
            title={item.title}
            image={item.image}
            year={item.year}
            />
         </Link>
      )})

    return ( 
        <div  className="images-container">
            {allImages}
        </div>
     );
        
}

export default Home;