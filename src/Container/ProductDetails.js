import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { List, ListItem } from '@material-ui/core';

const ProductDetails = () => {
    const {id} = useParams();
    const products = useSelector(state => state.product.products)
    const detail = products.filter((product)=>{ return product.productId==id })[0]
    const IMAGE_URL = "https://mobile-tha-server-8ba57.firebaseapp.com/";

    return(
        <>
            <List>
            <ListItem>Product ID:{detail.productId}</ListItem>
            <ListItem><img src={IMAGE_URL+detail.productImage} /></ListItem>
                
                <ListItem>Product Name : {detail.productName}</ListItem>
                <ListItem>Product Price : {detail.price}</ListItem>                
                <ListItem><div
  dangerouslySetInnerHTML={{
    __html: detail.shortDescription
  }}></div></ListItem>                
                <ListItem>Review Rating : {detail.reviewRating}</ListItem>
                <ListItem>Review Count : {detail.reviewCount}</ListItem>
                <ListItem>inStock : {detail.inStock ? "Available" : "outofStock"}</ListItem>
                
            </List>
            
        </>
    )
}

export default ProductDetails;