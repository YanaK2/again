import React from 'react';
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light border-bottom">
                <div className="container-fluid">
                    <Link to={'/first'}><img src={logo} className="w-25 rounded-3"
                                                    alt="logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link to='/first' class={'nav-link'}>Главная</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/profile' class={'nav-link'}>Личный кабинет</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/auth' class={'nav-link'}>Вход</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/addpet' class={'nav-link'}>Добавить объявление</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/SearchPage' class={'nav-link'}>Поиск по объявлениям</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
                            <button className="btn btn-primary" onClick="">Поиск</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;