import { Link, useLocation } from "react-router-dom";
export default function NavbarItem(props){
    const curPage = useLocation();

    return (
        <li className={'navbar-item ' + (curPage.pathname == props.props.url ? 'navbar-item-cur' : '')}>
            <Link className='navbar-item-link' to={props.props.url}>{props.props.name}</Link>
        </li>
    );
}