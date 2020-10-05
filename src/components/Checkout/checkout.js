import React from 'react';
import Subtotal from '../Subtotal/subtotal'
import CheckoutProduct from '../../components/CheckoutProduct/checkoutProduct';
import { useStateValue } from '../../StateProvider';
import './checkout.css';

function Checkout({id, image, title, raiting, price}) {
    const [ { basket, user }, dispatch ] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img src='https://m.media-amazon.com/images/G/01/shazam/05-PrimeDay2020-HouseAds-x2-1940x500-V07-LWptg._V404442492_.jpg' className='add' alt='' />
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout__title'>Your shopping basket</h2>
        {basket?.map(item => {
            return <CheckoutProduct 
            image={item.image} 
            id={item.id} 
            title={item.title} 
            price={item.price} 
            rating={item.rating}/>
        })}
            </div>
            </div>
            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
