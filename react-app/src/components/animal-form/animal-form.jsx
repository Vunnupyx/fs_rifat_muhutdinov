function AnimalForm({showForm, animal, handle, handleSubmit, onFileChanged}) {
    return (
        <div className="animal-form">
            <div className="animal-form__wrap">
                <div className="animal-form__panel">
                    <div onClick={showForm} className="animal-form__close">×
                    </div>
                    <div className="animal-form__title">Добавить животного</div>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form__group">
                            <label htmlFor="type">Тип животного *</label>
                            <input
                                onChange={(e => handle(e))}
                                className="form__control"
                                id="type"
                                value={animal.type}
                                maxLength="20"
                                minLength="3" name="type"
                                pattern="^[A-Za-zА-Яа-яЁё]+$"
                                required type="text"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="name">Имя *</label>
                            <input
                                onChange={(e => handle(e))}
                                className=" form__control"
                                id="name"
                                value={animal.name}
                                maxLength="20"
                                minLength="3"
                                name="name"
                                pattern="^[A-Za-zА-Яа-яЁё]+$"
                                required
                                type="text"/>
                        </div>

                        <div className="form__group">
                            <label htmlFor="breed">Порода *</label>
                            <input
                                onChange={(e => handle(e))}
                                className="form__control"
                                id="breed"
                                value={animal.breed}
                                maxLength="20"
                                minLength="3"
                                name="breed" pattern="^[A-Za-zА-Яа-яЁё]+$"
                                required
                                type="text"/>
                        </div>

                        <div className="form__group">
                            <label htmlFor="gender">Пол *</label>
                            <select
                                onChange={(e => handle(e))}
                                className="form__control" id="gender"
                                name="gender"
                                value={animal.gender}
                                required>
                                <option value="М">М</option>
                                <option value="Ж">Ж</option>
                            </select>
                        </div>
                        <div className="form__group">
                            <label htmlFor="age">Возраст</label>
                            <input
                                onChange={(e => handle(e))}
                                className="form__control"
                                id="age"
                                value={animal.age}
                                name="age" pattern="[0-9]{1,2}" type="text"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="weight">Вес (г.)</label>
                            <input
                                onChange={(e => handle(e))}
                                className="form__control"
                                id="weight"
                                value={animal.weight}
                                name="weight" pattern="^[0-9]+$" type="text"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="furLength">Шерсть</label>
                            <input
                                onChange={(e => handle(e))}
                                className="form__control" id="furLength"
                                value={animal.furLength}
                                name="furLength" type="text"/>
                        </div>
                        <div className="form__group">
                            <label htmlFor="img">Изображение *</label>
                            <input
                                onChange={(e => onFileChanged(e))}
                                className="form__control"
                                id="img"
                                name="img" type="file"/>
                        </div>
                        <div className="form__group">
                            <button className="form__btn"
                                    type="submit">Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>)
}

export default AnimalForm;