import { combineReducers } from 'redux';
import product from './ProductReducer';


const rootReducer = combineReducers({
    
    product : product,
    

}) 
 
export default rootReducer;