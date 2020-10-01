import React from 'react';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from '../../StateProvider';
import './subtotal.css';

function Subtotal({price}) {
    const [{basket}, dispatch] = useStateValue();
    let total = 0;
    {basket.map(item =>{
        return total += item.price; 
    })}
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value) => (
                <div>
                    <p>
                       Subtotal ({basket.length} items): <strong>{total}</strong>
                    </p>
                    <small className='gift'>
                        <input type='checkbox' />
                        This order cantains gift
                    </small>
                </div>
            )}
            decimalScale={2}
            value={0}    
            displayType = {'text'}
            thousandSeparator={true}
            prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
