import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Product from '../Component/Product';
import { getProducts } from '../Action/ProductAction'
import { getSearch } from '../Action/ProductAction'

import { fade, makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';



const EditForm = () =>
{
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
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '100%',
          },
        },
        formlayout:{
            padding:'20px',
            display: 'inline-grid',
    width: '50%',
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
          searchbutton: { background: 'yellow', float: 'right', },
        }));
     
    const classes = useStyles();
    return(
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
 <form c
 lassName={classes.root} noValidate autoComplete="off"  xs={12} lg={6}>
      <div className={classes.formlayout}>
      <TextField id="standard-basic" label="Product Name" />
      <TextField id="standard-basic" label="Product Price" />
      <TextField id="standard-basic" label="Product Desciption" />
      <TextField id="standard-basic" label=" Reviewcount" />
      <TextField id="standard-basic" label=" Reviewrating" />
      <TextField id="standard-basic" label=" Instock" />
      </div>
    </form>
        </>
    )
}

export  default EditForm;


