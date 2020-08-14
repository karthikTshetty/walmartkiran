import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} 
from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../Reducer/Index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Index from '../Container/Index';
import ProductDetails from '../Container/ProductDetails'
import { composeWithDevTools } from 'redux-devtools-extension';
import EditForm from '../Container/EditForm';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function App() 
 
{
    return(
        <Provider store={store}>      
            <Router>
                <Switch>
                    <Route path="/" component={Index} exact/>  
                    <Route path="/productdetail/:id" component={ProductDetails} exact/> 
                     <Route path="/editform" component={EditForm}  exact />                 
                </Switch>
            </Router>
        </Provider>
    )
}


