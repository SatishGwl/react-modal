import MainNavigation from '../layout/MainNavigation'
import classes from './Layout.Module.css';
function Layout(props){
    return(
        <><MainNavigation/>
        <main className={classes.main}>
          {props.children}
        </main></>
        
    )
}
export default Layout