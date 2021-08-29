import React from "react";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils";
import {Link} from "react-router-dom"
import {ReactComponent as Logo} from "../../assets/crown.svg";


const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                    :
                    <Link className="option" to="/SignIn">
                        Sign in
                    </Link>
            }
        </div>
    </div>
)


export default Header;