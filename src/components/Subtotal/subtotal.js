import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import './subtotal.css';
import { getBasketTotal } from '../../reducer';

function Subtotal({ price }) {
	const [ { basket }, dispatch ] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="gift">
							<input type="checkbox" />
							This order cantains gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
			<button>Proceed to checkout</button>
		</div>
	);
}

export default Subtotal;
