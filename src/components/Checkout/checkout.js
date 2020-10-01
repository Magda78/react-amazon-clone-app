import React from 'react';
import Subtotal from '../Subtotal/subtotal'
import './checkout.css';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout-left'>
                <img src='https://m.media-amazon.com/images/G/01/shazam/05-PrimeDay2020-HouseAds-x2-1940x500-V07-LWptg._V404442492_.jpg' className='add' alt='' />
            <div>
                <h2 className='title'>Your shopping basket</h2>
            </div>
            </div>
            <div className='checkout-right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
