import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { viewActions } from '../store/viewSlice';

const Header = (props) => {

  // const view = useSelector(state=> state.auth.isAuthenticated)
  const dispatch = useDispatch();

  const logoutHandler = () => {
     dispatch(viewActions.homePage());
    // props.view(false);
  }

  return (
    <header className={classes.header}>
      <h1>Shipment Project</h1>
        <ul>
          <li>
          <button onClick={logoutHandler}>Home Page</button>
          </li>
        </ul>
    </header>
  );
};

export default Header;
