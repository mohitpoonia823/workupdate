import React, {Fragment} from 'react'
import mealsimg from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
         <header className={classes.header}>
             <h1>ReactMeals</h1>
             <HeaderCartButton onClick={props.onShowCart}/>
         </header>
         <div className={classes['main-image']}>
             <img src={mealsimg} alt="A table full of delecious food!" />
         </div>
    </Fragment>
  )
}

export default Header