import React from 'react';
import {useStateValue} from '../../StateProvider';
import './product.css';

function Product({ id, title, price, rating, image }) {
    const [{basket}, dispatch] = useStateValue();
    console.log('this is a basket', {basket})

    const addToBasket = () => {
        dispatch ({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title,
                price,
                image,
                rating
            }
        })
    }

	return (
		<div className="product">
			<div className="info">
				<p>{title}</p>
				<p className="price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="rating">
					{Array(rating).fill().map((_, i) => {
						return <p>⭐</p>;
					})}
				</div>
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket} price={price}>Add to cart</button>
		</div>
	);
}

export default Product;
