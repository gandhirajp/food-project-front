import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userActions';

function Navbar() {

    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch=useDispatch()

    return (
        <div>
            <nav className="navbar navbar-expand-sm shadow-lg p-3 mb-5 navbarr rounded ">
                <Link className="navbar-brand" to={"/"}>
                    DNC FOOD SHOP
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto mx-4">

                        {/* current user name */}
                        {currentUser ? (
                            <div className="dropdown mt-2">
                                <a className=" dropdown-toggle" style={{color:"black"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   {currentUser.name}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    {/* <a className="dropdown-item" href="/orders">Orders</a> */}
                                    <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></a>
                                </div>
                            </div>
                        ) : (
                            <li className="nav-item ">
                                <Link className="nav-link" to={"/login"}>
                                    Login 
                                </Link>
                            </li>
                        )}


                        <li className="nav-item">
                            <Link className="nav-link" to={"/cart"}>
                                Cart {cartstate.cartItems.length}
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar