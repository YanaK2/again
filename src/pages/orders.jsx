import React from 'react';
import cat from '../images/pets/кошка.jpg';
import goat from '../images/pets/коза.jpeg';

const Orders = () => {
    return (
        <div>
            <main style={{"min-height": "80vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Результаты поиска</h2>
                <div className="d-flex flex-row flex-wrap">
                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "300px", "width": "45%"}}>
                        <img src={cat} className="w-75" alt="рисунок животного"/>
                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>id:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>14</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Вид животного:</p>
                            <p className="w-50" style={{"min-width": "250px"}}> Кошка</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Описание:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>Потерялась кошка, пушистая, серая. Любит
                                играть, ласковая.</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Номер чипа:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>ca-001-spb</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Район:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>Василиостровский</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Дата:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>24-03-2020</p>
                    </div>
                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "300px", "width": "45%"}}>
                        <img src={goat} className="w-75" alt="рисунок животного"/>
                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>>id:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>18</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Вид животного:</p>
                            <p className="w-50" style={{"min-width": "250px"}}> Коза</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Описание:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>Потерялась коза, последний раз видели в здании
                                Московского вокзала
                                г. Санкт-Петербург. Коза белая, пуховая.</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Номер чипа:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>go-011-spb</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Район:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>Центральный</p>

                            <p className="w-50 text-primary" style={{"min-width": "250px"}}>Дата:</p>
                            <p className="w-50" style={{"min-width": "250px"}}>14-03-2022</p>
                    </div>
                </div>

            </main>

        </div>
    );
};

export default Orders;
