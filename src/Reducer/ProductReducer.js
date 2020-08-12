import Types from "../Action/Types";

const initialState = {
    products: [],
    productError: "",

} 

const product = (state = initialState,action) => {
    switch(action.type){
        case Types.getProductsSuccess:
            return Object.assign({},state,{
                products: action.payload.products
            })
        case Types.getProductFailure:
            return Object.assign({}, state, {
                productError: action.payload
            })

        default:
            return state
    }
} 

export default product;