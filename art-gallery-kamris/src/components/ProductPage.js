import { useParams } from 'react-router-dom'
import {data} from '../data/DataBase'
import NavBar from './NavBar';

function ProductPage() {

    const {id} = useParams()

    return ( 
    <section>
        {
             data.filter(item => item.id === id).map((item,idx) => {
                return (
                    <div key={idx} className='product-container'>
                        <p className='product-container__title'>{item.title}</p>
                        <p className='product-container__year'>{item.year}</p>
                        <img className='product-container__image' src={item.image} alt={item.title} />
                        <article className="product-container__description">
                            {item.description}
                        </article>

                    </div>
                )
             })
        }

    </section> );
}

export default ProductPage;