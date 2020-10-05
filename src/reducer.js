export const initialState = {
	basket: [],
	user: null
};

// Selector
export const getBasketTotal = (basket) => {
	let total = 0;
		basket.map((item) => {
            console.log(item.price)
			return (total += item.price);
        });
        return total;
    }


const reducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
                basket: [ ...state.basket, action.item ]
            };
        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(item => {
                      return item.id === action.id
                })

                let newBasket = [...state.basket];
                if (index >= 0 ) {
                    newBasket.splice(index,1)
                }else {
                    console.warn('is not in a basktet')
                }
                return (
                    {...state, basket: newBasket}
                )
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
		default:
			return state;
	}
};

export default reducer;
