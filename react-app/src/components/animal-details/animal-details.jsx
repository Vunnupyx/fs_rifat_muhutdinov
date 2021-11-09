import React from "react";
import './animal-details.css';

function AnimalDetails({animals}) {
    return (
        <div className="animals__details">
            <div>Порода: {animals[1]}</div>
            <div>Пол: {animals[4]}</div>
            <div>Возраст: {animals[5]} г.</div>
            <div>Вес: {animals[6]}кг</div>
            <div>Шерсть: {animals[7]}</div>
        </div>
    )
}

export default AnimalDetails