import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Component/Product';
import {getProducts} from '../Action/ProductAction'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { usePagination } from '@material-ui/lab/Pagination';


const IMAGE_URL = "https://mobile-tha-server-8ba57.firebaseapp.com/";
const Index = () => {
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(()=>{
        
            dispatch(getProducts(page));           

    },[page])
    const products = useSelector(state => state.product.products)
    return(
        <Grid container spacing={3}>
        {products.map((product,index)=>(
             <Grid item xs={6} lg={3} md={3}>
        <Product key={index} image={IMAGE_URL+product.productImage} productId={product.productId} productName={product.productName} price={product.price} shortDescription={product.shortDescription} />
        </Grid>
        ))}
        <Pagination count={8} shape="rounded" size="large" onChange={(event,page)=>setPage(page)} />
        </Grid>
    )
}

export default Index;