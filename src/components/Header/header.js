import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from '../../StateProvider';
import {auth} from '../../firebase';
import './header.css';

function Header() {

	const [{basket, user}, dispatch] = useStateValue();

	const handleAuthentication = () => {
		if(user) {
			auth.signOut();
		}
	}

	return (
		<div className="header">
			<Link to=''>
			<img className="logo" src="https://cdn.worldvectorlogo.com/logos/amazon-dark.svg" alt="logo" />
			</Link>
			<div className="search">
				<input className="search-input" type="text" />
				<SearchIcon className="search-icon" />
			</div>
			<div className="header-nav">
				<Link to={!user && '/login'}>
				<div onClick={handleAuthentication} className="header-options">
					<span className="line-one">Hello {user?.email}</span>
					<span className="line-two">{user ? 'SignOut' : 'SignIn'}</span>
				</div>
				</Link>
				<div className="header-options">
					<span className="line-one">Returns</span>
					<span className="line-two">& Orders</span>
				</div>
				<div className="header-options">
					<span className="line-one">Your</span>
					<span className="line-two">Prime</span>
				</div>
			</div>
			<Link to='checkout'>
			<div className='cart'>
				<ShoppingBasketIcon />
				<span className='line-two cart-count'>{basket?.length}</span>
			</div>
			</Link>
		</div>
	);
}

export default Header;
