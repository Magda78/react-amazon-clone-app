import React from 'react';
import './checkoutProduct.css';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({id, price,title,image,rating}) {
    const [ { basket }, dispatch ] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='image' src={image} />
            <div className='info'>
                <p className='title'>{title}</p>
                <p className='price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                <div className='rating'>
                {Array(rating).fill().map((_, i) => {
						return <p>⭐</p>;
					})}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;