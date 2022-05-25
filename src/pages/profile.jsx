import React from 'react';
import cat from "../images/pets/кошка.jpg";
import goat from "../images/pets/коза.jpeg";

const Profile = () => {
    return (
        <div style={{"min-height": "80vh"}}>
                <h2 className="text-center text-primary m-2">Личный кабинет</h2>
                <div className="p-3">
                    <div className="d-flex flex-row flex-wrap border m-auto p-3 w-50" style={{"min-width": "300px"}}>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>Телефон:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>+7-999-999-99-99</p>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>E-mail:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>Email@mail.ru</p>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>Имя:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>Имя</p>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>Дата регистрации:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>01-01-0001</p>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>Количество найденных животных:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>2</p>

                        <p className="w-50 text-primary" style={{"min-width": "300px"}}>Количество объявлений:</p>
                        <p className="w-50" style={{"min-width": "300px"}}>4</p>
                    </div>
                </div>

                <h2 className="text-center text-primary m-2">Изменить адрес электронной почты</h2>
                <form className="w-50 m-auto p-3" style={{"min-width": "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Отправить</button>
                </form>

                <h2 className="text-center text-primary m-2">Изменить номер телефона</h2>
                <form className="w-50 m-auto p-3" style={{"min-width": "300px"}}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Введите номер телефона</label>
                        <input type="text" className="form-control item" id="phone" placeholder="+7-9**-***-**-**"/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick="">Отправить</button>
                </form>

                <h2 className="text-center text-primary m-2">Добавленные объявления</h2>


                        <div className="d-flex flex-row flex-wrap">
                            <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "300px", "width": "45%"}}>
                                <img src={cat} className="w-75" alt="рисунок животного"/>
                                <em className="w-50" style={{"min-width": "250px"}}>id:14</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Вид животного: кошка</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Описание: потерялась кошка, пушистая, серая.
                                    Любит играть, ласковая.</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Номер чипа: ca-001-spb</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Район: Василеостровский</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Дата: 24-03-2020</em>
                                <strong className="w-50" style={{"min-width": "250px"}}>Статус: не найден</strong>
                                <button type="submit" className="btn btn-primary">Редактировать объявление</button>

                            </div>

                            <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "300px", "width": "45%"}}>
                                <img src={goat} className="w-75" alt="рисунок животного"/>
                                <em className="w-50" style={{"min-width": "250px"}}>id:18</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Вид животного: коза</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Описание: потерялась коза, последний раз
                                    видели в здании Московского вокзала
                                    г. Санкт-Петербург. Коза белая, пуховая.</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Номер чипа: go-011-spb</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Район: Центральный</em>
                                <em className="w-50" style={{"min-width": "250px"}}>Дата: 14-03-2022</em>
                                <strong className="w-50" style={{"min-width": "250px"}}>Статус: не найден</strong>
                                <button type="submit" className="btn btn-primary">Редактировать объявление</button>

                            </div>

                    </div>



                <nav aria-label="Page navigation example" className="m-3">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
    );
};

export default Profile;