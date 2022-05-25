import React from 'react';
import {Link} from "react-router-dom";

const Auth = () => {
    return (
        <div>
            <main style={{"min-height": "80vh"}}>
                <h2 className="text-center text-primary m-2">Аутентификация</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{"min-width": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>

                        <input className="btn btn-primary" type="submit" value="Войти"/>
                        <div>
                            <Link to='/reg' className="text-center m-2" type="submit">Зарегистрироваться</Link>
                        </div>


                    </form>
                </div>
            </main>
        </div>
    );
};

export default Auth;