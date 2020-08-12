import React,{useState, useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from "react-redux";
import {Link} from  'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickEl = (event) => {
     setAnchorEl(event.currentTarget);
   };
 
   const handleClose = () => {
     setAnchorEl(null);
   };
 
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.productName[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={handleClickEl}>
            <MoreVertIcon />
          </IconButton>
          
        }
        
        title={props.productName}
        subheader={props.price}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
      <Link to={`/productdetail/${props.productId}`}><CardMedia
        className={classes.media}
        image={props.image}
        title={props.productName}
      /></Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <div
  dangerouslySetInnerHTML={{
    __html: props.shortDescription
  }}></div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
    </Card>
  );
}