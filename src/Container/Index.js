import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Component/Product';
import { getProducts } from '../Action/ProductAction'
import { getSearch } from '../Action/ProductAction'
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


const IMAGE_URL = "https://mobile-tha-server-8ba57.firebaseapp.com/";
const Index = () => {
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [rating,setRating] = useState(0);
  const [price,setPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getProducts(page));

  }, [page])
  const products = useSelector(state => state.product.products)

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
        width:'175px',
      },
    },
    panelheading:{
      background:'#ccc',
      padding:'10px',
    },
    filterlay:{
      width:'100%',
    },
    filterbox:{
      padding: '20px !important',
      border: '1px solid lightgrey',
      margin: '20px 0',
    },
    
    
    productbox:{
      margin:'20px 0',
      border:'1px solid #ccc',
    },
    paginationbar:{
      margin:'20px 0',
      background:'#ccc',
      color:'white',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.150),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.250),

      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '60ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    searchbutton: { background: 'yellow', float: 'right', }
  }));
  const classes = useStyles();

 
  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <Typography  className={classes.title} variant="h6" noWrap>
              Walmart
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                onChange={(e) => { setTerm(e.target.value) }}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
              <Button onClick={() => {
                setRating(0)
                setPrice(0)
                dispatch(getSearch(page, 8, term))
              }} className={classes.searchbutton} variant="contained" color="secndary">Search</Button>
            </div>

          </Toolbar>
        </AppBar>

      </div >
      <Grid  container xs={12} lg={12} md={12} spacing={3}>
        <Grid className={classes.filterbox} item xs={6} lg={2} md={3}>
          <FormControl className={classes.filterlay} component="fieldset" >
            <FormLabel className={classes.panelheading} component="legend">Ratings</FormLabel>
            <RadioGroup aria-label="rating" name="rating" value={rating} onChange={(e)=>{
              setRating(e.target.value)
              dispatch(getSearch(page,8,term,e.target.value,price))
              }}>
              <FormControlLabel value="1" control={<Radio />} label="1 and Above" />
              <FormControlLabel value="2" control={<Radio />} label="2 and Above" />
              <FormControlLabel value="3" control={<Radio />} label="3 and Above" />
              <FormControlLabel value="4" control={<Radio />} label="4 and Above" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
          </FormControl>
              <br></br>
          <FormControl  className={classes.filterlay} component="fieldset">
            <FormLabel className={classes.panelheading} component="legend">Price</FormLabel>
            <RadioGroup aria-label="price" name="price" value={price} onChange={(e)=>{
              setPrice(e.target.value)
              dispatch(getSearch(page,8,term,rating,e.target.value))
            }}>
              <FormControlLabel value="500" control={<Radio />} label="500 and Above" />
              <FormControlLabel value="1000" control={<Radio />} label="1000 and Above" />
              <FormControlLabel value="2000" control={<Radio />} label="2000 and Above" />
              <FormControlLabel value="3000" control={<Radio />} label="3000 and Above" />
              <FormControlLabel value="4000" control={<Radio />} label="4000 and above" />
            </RadioGroup>
          </FormControl>

        </Grid>
        <Grid className={classes.productbox} item xs={6} lg={10} md={9}>
          {products.map((product, index) => (

            <Product key={index} image={IMAGE_URL + product.productImage} productId={product.productId} productName={product.productName} price={product.price} shortDescription={product.shortDescription} />

          ))}
        </Grid>
      </Grid>

      <Pagination className={classes.paginationbar} count={8} color="white" shape="rounded" size="large" onChange={(event, page) => setPage(page)} />

    </>
  )
}

export default Index;