import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand mt-2 mt-lg-0" href="#">
                    <img
                        src="./../src/assets/images/brand/pokemonBrandName.png"
                        height="30"
                        alt="Pokemon"
                        loading="lazy"
                    />
                </a>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01"aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarExample01">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item hvr-underline-from-center">
                            {/* <Link className="nav-link" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item hvr-underline-from-center" id="pokedexLink">
                            <Link className="nav-link" to="/">Pokedex</Link>
                        </li>
                        <li className="nav-item hvr-underline-from-center">
                            <Link className="nav-link" to="/pokecard">Pokecard</Link>
                        </li>
                        {/* <li className="nav-item hvr-underline-from-center">
                            <a className="nav-link" href="/pokeforum" >PokeForum</a>
                        </li>
                        <li className="nav-item hvr-underline-from-center">
                            <a className="nav-link" href="/admin/dashboard" >Dashboard</a>
                        </li>
                        <li className="nav-item hvr-underline-from-center">
                            <a className="nav-link" href="/about" >About</a>
                        </li> */}
                    </ul>

                    <div className="d-flex align-items-center me-5">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item hvr-underline-from-center">
                            {/* <a className="nav-link" href="{{ route('login') }}">Log In</a> */}
                        </li>
                  

                        <li className="nav-item hvr-underline-from-center">
                            {/* <a className="nav-link" href="{{ route('register') }}">Sign In</a> */}
                        </li>

                    </ul>

                        <div className="dropdown">
                            {/* <a className="dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false" style="text-decoration: none; color:white;">
                            <div className="rounded-circle bg-secondary me-2"><img className="m-1" width="30px" src="{{Auth::user()->image}}"/></div>
                            </a> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="navbarDropdownMenuAvatar"
                            >
                                <li>
                                {/* <a className="dropdown-item" href="#">My profile</a> */}
                                </li>
                                <li>
                                {/* <a className="dropdown-item" href="#">Settings</a> */}
                                </li>
                                <li>
                                {/* <a className="dropdown-item" href="{{ route('logout') }}" >Logout</a> */}
                                </li>
                                {/* <form id="logout-form" action="{{ route('logout') }}" method="POST" className="d-none"> */}
                                {/* </form> */}
                            </ul>
                        </div>
                      
                        
                    </div>
                </div>
            </div>
        </nav>
	)
}

export default Navbar