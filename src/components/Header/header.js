import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './header.css';

function Header() {
	return (
		<div className="header">
			<img className="logo" src="https://cdn.worldvectorlogo.com/logos/amazon-dark.svg" alt="logo" />
			<div className="search">
				<input className="search-input" type="text" />
				<SearchIcon className="search-icon" />
			</div>
			<div className="header-nav">
				<div className="header-options">
					<span className="line-one">Hello Guest</span>
					<span className="line-two">Sign In</span>
				</div>
				<div className="header-options">
					<span className="line-one">Returns</span>
					<span className="line-two">& Orders</span>
				</div>
				<div className="header-options">
					<span className="line-one">Your</span>
					<span className="line-two">Prime</span>
				</div>
			</div>
			<div className='cart'>
				<ShoppingBasketIcon />
				<span className='line-two cart-count'>0</span>
			</div>
		</div>
	);
}

export default Header;
