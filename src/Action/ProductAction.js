
import Types from './Types';
const BASE_URL = 'https://mobile-tha-server-8ba57.firebaseapp.com/walmartproducts/';
export const getProducts = (page=1,size=8) => async(dispatch) => {
    try{
        const request = await fetch(BASE_URL+page+'/'+size);
        const response = await request.json()
    dispatch({
        type: Types.getProductsSuccess,
        payload: response,
    })
    } catch(err){
        dispatch({
            type: Types.getProductsFailure,
            payload: err.message
        })
    }

}