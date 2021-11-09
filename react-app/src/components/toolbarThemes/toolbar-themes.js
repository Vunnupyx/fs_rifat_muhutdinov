import React from "react";
import './toolbar-themes.css';

function ToolbarThemes(props) {
    return (
        <button className="switch-theme__btn" onClick={props.changeTheme}>
            Сменить тему
        </button>
    )
}

export default ToolbarThemes