const bagReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BAG':
            return state.map(product => {
                if(product.id === action.id) {
                    console.log(product.id, action.id);
                    console.log('ADDED TO BAG!! ');
                    console.log('NEW STATE: ' + state);
                    return {...product, inBag: true}
                } else {
                    console.log(product.id, action.id)
                    console.log('Not added to bag')
                    return product;
                }
            })
        case 'REMOVE_FROM_BAG':
            return state.map(product => {
                if(product.id === action.id) {
                    console.log('Removed from bag')
                    return {...product, inBag: false}
                } else {
                    console.log('Not Removed from bag')
                    return product;
                }
            })
        default:
            console.log('NOTHING HAPPENED!')
            return state;
    }
}

export default bagReducer;