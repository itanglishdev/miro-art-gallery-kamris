// import '../App.css'

function Card({id,image,title,year}) {
    return ( 
        <div className="single-image-container"
          >
             <img 
             className='image__paintings'
             src={image}
             id={id}
             alt={title}
             />
             
             <div className="image__details">
               <p className="image__details__p">{title}</p><p className="image__details__p">{year}</p>
             </div>
          </div>
     );
}

export default Card;