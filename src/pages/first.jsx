import React from 'react';
import dog from '../images/pets/собака.jpg';
import mouse from '../images/pets/мышь.jpg';
import gorilla from '../images/pets/горилла.jpg';
import cat from '../images/pets/кошка.jpg';
import goat from '../images/pets/коза.jpeg';
const First = () => {
    return (
        <div style={{"min-height":" 80vh"}}>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <p style={{"text-align": "center"}}>Найдена собака</p>
                        <img src={dog} className="d-block w-100" alt="Собака"/>
                            <p style={{"text-align": "center"}}>Собака с чипом, найдена в Выборгском районе </p>
                    </div>
                    <div className="carousel-item">
                        <p style={{"text-align": "center"}}>Найдена мышь</p>
                        <img src={mouse} className="d-block w-100" alt="Мышь"/>
                            <p style={{"text-align": "center"}}>Мышь декоративная, без чипа, найдена в Калининском районе </p>
                    </div>
                    <div className="carousel-item">
                        <p style={{"text-align": "center"}}>Найдена горилла</p>
                        <img src={gorilla} className="d-block w-100" alt="Горилла"/>
                            <p style={{"text-align": "center"}}>Горилла агрессивна, без чипа, обнаружена в Красносельском
                                районе </p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true">
                    </span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true">
                    </span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>

                <h2 className="text-center text-black bg-warning m-2">Карточки найденных животных</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "200px", "width": "45%"}}>
                        <img src={cat} className="w-75" alt="рисунок животного"/>
                            <em className="w-50" style={{"min-width":"250px"}}>id:14</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Вид животного: кошка</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Описание: потерялась кошка, пушистая, серая.
                                Любит играть, ласковая.</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Номер чипа: ca-001-spb</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Район: Василеостровский</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Дата: 24-03-2020</em>
                    </div>

                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "200px", "width": "45%"}}>
                        <img src={goat} className="w-75" alt="рисунок животного"/>
                            <em className="w-50" style={{"min-width":"250px"}}>id:18</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Вид животного: коза</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Описание: потерялась коза, последний раз
                                видели в здании Московского вокзала
                                г. Санкт-Петербург. Коза белая, пуховая.</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Номер чипа: go-011-spb</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Район: Центральный</em>
                            <em className="w-50" style={{"min-width":"250px"}}>Дата: 14-03-2022</em>
                    </div>
                </div>

                <h2 className="text-center text-primary m-2">Подписка на новости</h2>
                <form className="w-50 m-auto p-3" style={{"min-width":"300px"}}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Введите адрес электронной
                            почты</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">Мы никогда не делимся Вашими e-mail ни с кем.
                            </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Подписаться</button>
                </form>
        </div>
    );
};

export default First;