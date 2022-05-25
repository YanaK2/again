import React from 'react';

const Pet = () => {
    return (
        <div>
            <main style={{"min-height":" 70vh"}}>
                <h2 className="text-center text-white bg-primary m-2">Карточка животного</h2>


                <div className="d-flex flex-row flex-wrap border  border-primary m-auto  p-3 position-relative w-50"
                     style={{"min-width": "300px"}}>
                    <div className="d-flex flex-row flex-wrap justify-content-around border border">
                        <img src={'./images/pets/курица1.jpg'} className="w-25 p-3" style={{"min-width": "250px"}}
                             alt="Изображения животного"/>
                            <img src={'./images/pets/курица2.jpg'} className="w-25 p-3" style={{"min-width": "250px"}}
                                 alt="Изображения животного"/>
                                <img src={'./images/pets/курица3.jpg'} className="w-25 p-3" style={{"min-width": "250px"}}
                                     alt="Изображения животного"/>
                    </div>

                    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{"min-width": "300px"," width": "45%"}}>
                        <em className="w-50" style={{"min-width": "250px"}}>id:15</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Имя: Иван</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Телефон: +7-921-485-65-44</em>
                        <em className="w-50" style={{"min-width": "250px"}}>E-mail:: my_chiken@mail.ru</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Вид животного: Курица</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Описание: потерялась курица, пятнистая, рыжая.
                            Любит играть, ласковая.</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Номер чипа: ch-001-spb</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Район: Невский</em>
                        <em className="w-50" style={{"min-width": "250px"}}>Дата: 29-03-2020</em>
                    </div>

                </div>
                <br/>

            </main>

        </div>
    );
};

export default Pet;