import React from 'react'
import { Link } from 'react-router-dom'
import { MDBDropdown,  MDBDropdownToggle, MDBIcon, MDBDropdownMenu } from 'mdbreact'
import Cart from '../Cart'
import { useSelector } from 'react-redux'


export default function Navigation() {

    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    return (



        <nav className="mb-1 navbar navbar-expand-lg navbar-dark navbar-color ">
            <div className="container">


                <Link className="navbar-brand" to="/" >
                    <i className="fab fa-erlang"></i> -shop
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/news">Nyheter</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/clothes">Kläder</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/shoes">Skor</Link>
                        </li>

                    </ul>

                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        {/* <!-- ShoppingCart --> */}
                        <li className="nav-item dropdown">

                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                {totalCartQuantity} <MDBIcon icon="shopping-cart" />
                                </MDBDropdownToggle>
                            <MDBDropdownMenu right basic className="dropdown-default shopping-cart">
                                <Cart/>
                            </MDBDropdownMenu>
                            </MDBDropdown>

                            {/* <a href="!#" className="nav-link mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                20<i className="fas fa-shopping-cart"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                                <Cart/>
                            </div> */}

                        </li>

                        {/* <!-- UserSettings --> */}
                        <li className="nav-item dropdown">
                            <a href="!#" className="nav-link dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right z-depth-2"> 
                            <div className="p-2">UserSettings</div>
                                
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

