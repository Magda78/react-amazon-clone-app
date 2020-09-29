import React from 'react';
import Product from "../Product/product";
import './home.css';

function Home() {
	return (
		<div className="home">
			<div className='home-container'>
                <img class='home-img' src='https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255085_1315904_US_PD20_3296237_1500x600_2X_US_en._CB404717945_.jpg' alt='home-img'/>
            <div className='row'>
            <Product />
            <Product />
            </div>
            <div className='row'>
            <Product />
            <Product />
            <Product />
            </div>
            <div className='row'>
            <Product />
            </div>
            </div>
		</div>
	);
}

export default Home;