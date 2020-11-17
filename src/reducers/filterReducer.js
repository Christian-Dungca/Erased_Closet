const filterReducer = (state, action) => {
    switch(action.type){
        case 'SHOW_ALL':
            return 'ALL'
        case 'SHOW_SHIRTS':
            return 'shirt'
        case 'SHOW_PANTS':
            return 'pants'
        case 'SHOW_HOODIES':
            return 'hoodies'
        case 'SHOW_ACCESSORIES':
            return 'accessories'
        default:
            throw new Error();
    }
}

export default filterReducer;