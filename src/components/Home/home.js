import React from 'react';
import Product from '../Product/product';
import './home.css';

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-img"
					src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255085_1315904_US_PD20_3296237_1500x600_2X_US_en._CB404717945_.jpg"
					alt="home-img"
				/>
				<div className="row">
					<Product
						title="Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
						price={420.99}
						image="https://m.media-amazon.com/images/I/71wu+HMAKBL._AC_UL320_.jpg"
						rating={3}
					/>
					<Product 
                    title="New Apple Watch SE (GPS, 40mm) - Gold Aluminum Case with Pink Sand Sport Band"
                    price={290.99}
                    image="https://m.media-amazon.com/images/I/81RClERgB8L._AC_UL320_.jpg"
                    rating={3}/>
				</div>
				<div className="row">
                    <Product 
                    title="Apple AirPods with Charging Case (Wired)"
                    price={129.99}
                    image="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"
                    rating={3}/>
                    <Product 
                    title="Echo Dot (3rd Gen) Kids Edition, an Echo designed for kids with parental controls - Rainbow"
                    price={30.99}
                    image="https://m.media-amazon.com/images/I/619hTFl4+IL._AC_UL320_.jpg"
                    rating={3}/>
					<Product 
                    title="Obuby Walkie Talkies for Kids, 22 Channels "
                    price={90.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71eo3lgsZ8L._AC_SL1500_.jpg"
                    rating={3}/>
				</div>
				<div className="row">
					<Product
                    title="Toshiba TF-55A810U21 55-inch 4K UHD TV - Fire TV Edition"
                    price={449.99}
                    image="https://m.media-amazon.com/images/I/61xU+HbHJyL._AC_UY218_.jpg"
                    rating={3}/>
				</div>
			</div>
		</div>
	);
}

export default Home;
