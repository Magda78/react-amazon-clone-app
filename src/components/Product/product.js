import React from 'react';
import './product.css';

function Product() {
	return (
		<div className="product">
			<div className="info">
				<p>The lean sturtup</p>
				<p className="price">
					<small>$</small>
					<strong>29.98</strong>
				</p>
				<div className="rating">
					<p>⭐</p>
                    <p>⭐</p>
				</div>
			</div>
            <img src='https://images-na.ssl-images-amazon.com/images/I/91Wtt-anksL.__BG0,0,0,0_FMpng_AC_SY220_.jpg' alt='' />
            <button>Add to cart</button>
        </div>
	);
}

export default Product;
