import React from 'react';


const Add = () => {
    return (
        <div>

            <main style={{"min-height": "80vh"}}>
                <h2 className="text-center text-primary m-2">Добавление нового объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-primary p-3" style={{"min-width": "300px"}}>

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
                            <label htmlFor="kind" className="form-label">Введите вид животного (обязательное
                                поле):</label>
                            <input type="text" className="form-control" id="kind"/>

                        </div>

                        <div className="mb-3 form-check border p-3">
                            <input type="checkbox" className="form-check-input m-3" id="exampleCheck1"/>
                                <label className="form-check-label m-3" htmlFor="exampleCheck1">Пройти автоматическую
                                    регистрацию</label>
                                <label htmlFor="password" className="form-label hidden">Введите пароль:</label>
                                <input type="password" className="form-control hidden" id="password"/>
                                    <div className="form-text hidden">Не менее 7 символов, обязательно: 1 - цифра, 1 -
                                        строчная буква, 1 - заглавная буква
                                    </div>
                                    <label htmlFor="confirm_password" className="form-label hidden">Повторите пароль
                                        пароль:</label>
                                    <input type="password" className="form-control hidden" id="confirm_password"/>


                        </div>

                        <div className="mb-3 p-3 border">
                            <label htmlFor="image1" className="form-label">Выберите файлы изображений (обязательное
                                поле):</label>
                            <input type="file" className="form-control" id="image1" />
                                <input type="file" className="form-control mb-3" id="image2"/>
                                    <input type="file" className="form-control mb-3" id="image3"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label">Электронный чип (обязательное поле):</label>
                            <input type="text" className="form-control" id="chip"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Описание (обязательное поле):</label>
                            <textarea className="form-control" id="description"></textarea>
                        </div>

                        <div className="mb-3 form-check p-3">
                            <input type="checkbox" className="form-check-input" id="check1"/>
                                <label className="form-label" htmlFor="check1">Подтвердить согласие на обработку
                                    персональных данных</label>
                        </div>

                        <input type="submit" className="btn btn-primary form-control" />
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Add;