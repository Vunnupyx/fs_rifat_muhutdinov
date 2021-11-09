import React, {useState} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import AnimalsContainer from "./components/animals/animals-container";
import AnimalEditContainer from "./components/animal-edit/animal-edit-container";
import {ThemeContext, themes} from "./components/theme-context";
import ToolbarThemes from "./components/toolbarThemes/toolbar-themes";

function App() {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme => (theme === themes.light ? themes.dark : themes.light));
    }

    return (
        <div className="App">
            <ThemeContext.Provider value={theme}>
                <ToolbarThemes changeTheme={toggleTheme}/>
                <AnimalsContainer/>
                <Route path='/edit/:id' component={AnimalEditContainer}/>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
