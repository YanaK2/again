import React from 'react';

const Reg = () => {
    return (
        <div>

            <main style={{"min-height":" 80vh"}}>
                <h2 className="text-center text-primary m-2">Регистрация</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{"min-width":" 300px"}}>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Введите ваше имя (обязательное поле):</label>
                            <input type="text" className="form-control" id="name"/>
                                <div className="form-text">Используйте кириллические буквы.</div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Введите свой телефон (обязательное
                                поле):</label>
                            <input type="text" className="form-control item" id="phone" placeholder="+7-9**-***-**-**"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Введите адрес электронной почты (обязательное
                                поле)</label>
                            <input type="text" className="form-control item" id="email" placeholder="Email@email.ru"/>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Введите пароль:</label>
                            <input type="password" className="form-control" id="password"/>
                                <div className="form-text">Не менее 7 символов, обязательно: 1 - цифра, 1 - строчная
                                    буква, 1 - заглавная буква
                                </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label">Повторите пароль:</label>
                            <input type="password" className="form-control" id="confirm_password"/>
                                <div className="form-text"></div>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="check"/>
                                <label className="form-check-label" htmlFor="check">Согласие на обработку персональных данных</label>
                        </div>

                        <input type="submit" className="btn btn-primary" value="Зарегистрироваться"/>
                    </form>
                </div>
            </main>


        </div>
    );
};

export default Reg;