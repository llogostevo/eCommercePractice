// react components
import {Link, Outlet} from 'react-router-dom'

// image components
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg' 

// styling sheets
import '../../routes/navigation/navigation.styles.scss';

const Navigation = () =>{
    return(
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <CrwnLogo className='logo' />
        </Link>   
        <div className='nav-links-container'>
            <Link className="nav-link" to='/shop'>Shop</Link>
            <Link className="nav-link" to='/shop'>Contact</Link>
            <Link className="nav-link" to='/shop'>Sign In</Link>
            <Link className="nav-link" to='/shop'>Basket</Link>
        </div>
    </div>
      <Outlet />
    </>
    );
  }

  export default Navigation;