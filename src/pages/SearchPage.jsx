import React from 'react';

const SearchPage = () => {
    return (

        <div>
            <main style={{"min-height": "80vh"}}>
                <h2 className="text-center text-primary m-2">Поиск по объявлениям</h2>
                <div className="p-3">
                    <form className="w-50 m-auto border p-3" style={{"min-width": "300px"}}>

                        <div className="mb-3">
                            <label htmlFor="district" className="form-label">Выберите район:</label>
                            <select id="district" className="form-select">
                                <option>Приморский</option>
                                <option>Петроградский</option>
                                <option>Василиостровский</option>
                                <option>Центральный</option>
                                <option>Красногвардейский</option>
                                <option>Выборгский</option>
                                <option>Калининский</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kind" className="form-label">Введите вид животного:</label>
                            <input type="text" className="form-control" id="kind"/>
                        </div>

                        <input type="submit" className="btn btn-primary"/>
                    </form>
                </div>
            </main>

        </div>
    );
};

export default SearchPage;