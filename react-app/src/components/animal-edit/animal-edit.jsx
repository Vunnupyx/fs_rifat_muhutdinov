import './animal-edit.css';
import {NavLink} from "react-router-dom";
import React from "react";


function AnimalEdit({animal, handle, handleSubmit, onFileChanged}) {
    return (
        <div className="animal-form">
            <div className="animal-form__wrap">
                <div className="animal-form__panel">
                    <NavLink to="/">
                        <div className="animal-form__close">×</div>
                    </NavLink>

                    <div className="animal-form__title">Редактировать животного</div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form__group">
                            <label>Тип животного</label>
                            <input onChange={(e => handle(e))} value={animal.type} className="form__control"
                                   name="type"/>
                        </div>
                        <div className="form__group">
                            <label>Имя</label>
                            <input onChange={(e => handle(e))} id="name" value={animal.name} className="form__control"
                                   name="name"/>
                        </div>
                        <div className="form__group">
                            <label>Порода</label>
                            <input onChange={(e => handle(e))} value={animal.breed} className="form__control"
                                   name="breed"/>
                        </div>
                        <div className="form__group">
                            <label>Пол</label>
                            <select onChange={(e => handle(e))} value={animal.gender} className="form__control"
                                    name="gender">
                                <option value="М">М</option>
                                <option value="Ж">Ж</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label>Возраст</label>
                            <input onChange={(e => handle(e))} value={animal.age} className="form__control" name="age"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="weight">Вес (г.)</label>
                            <input onChange={(e => handle(e))} value={animal.weight} className="form__control"
                                   id="weight" name="weight"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="furLength">Шерсть</label>
                            <input onChange={(e => handle(e))} value={animal.furLength} className="form__control"
                                   id="furLength" name="furLength" type="text"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="img">Изображение</label>
                            <input onChange={(e => onFileChanged(e))} className="form__control"
                                   id="img" name="img" type="file"/>
                        </div>
                        <div className="form__group">
                            <button className="form__btn" type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AnimalEdit;