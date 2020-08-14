
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




export const getSearch = (page=1,size=8, search="", rating=0, price=0) => async(dispatch) => {
    try{
        let query = "?";
        if(search!=""){
            query +="search="+search; 
        }
        if(rating!=0){
            query +="&minReviewRating="+rating; 
        }
        if(price!=0){
            query +="&minPrice="+price; 
        }
        console.log(rating);
        const request = await fetch(BASE_URL+page+'/'+size+ query);
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
