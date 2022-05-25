import React from 'react';

const Edit = () => {
    return (
        <div>
            <main style={{"min-height": "80vh"}}>
                <h2 className="text-center text-primary m-2">Редактирование объявления</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border border-primary p-3" style={{"min-width": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label">Введите вид животного (обязательное
                                поле):</label>
                            <input type="text" className="form-control" id="kind"/>
                        </div>


                        <div className="mb-3 p-3 border">
                            <label htmlFor="image1" className="form-label">Выберите файлы изображений (обязательное
                                поле):</label>
                            <input type="file" className="form-control" id="image1" value="Загрузить изображение"/>
                                <input type="file" className="form-control mb-3" id="image2"
                                       value="Загрузить изображение"/>
                                    <input type="file" className="form-control mb-3" id="image3"
                                           value="Загрузить изображение"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="chip" className="form-label">Электронный чип (обязательное поле):</label>
                            <input type="text" className="form-control" id="chip"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Описание (обязательное поле):</label>
                            <textarea className="form-control" id="description"></textarea>
                        </div>


                        <input type="submit" className="btn btn-primary form-control" value="Отправить"/>
                    </form>
                </div>
            </main>

        </div>
    );
};

export default Edit;