import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {
    filterAnimals,
    getAnimals,
    removeAnimal,
    setExpandedAnimal,
    setHideCats,
    setShowAddForm
} from "../../redux/reducers/animals";
import Animals from "./animals.jsx";
import AnimalFormContainer from "../animal-form/animal-form-container";
import {ThemeContext} from "../theme-context";

class AnimalsContainer extends React.Component {

    static contextType = ThemeContext;

    componentDidMount() {
        if (this.props.animals.length === 0) {
            this.props.getAnimals();
        }
    }

    showForm = () => {
        this.props.setShowAddForm();
    }

    hideShowCats = () => {
        this.props.setHideCats();
    }
    onInputChanged = (event) => {
        this.props.filterAnimals(event);
    }

    showDetails = (i) => {
        if (this.props.expandedAnimal === i) {
            this.props.setExpandedAnimal(-1);
        } else {
            this.props.setExpandedAnimal(i);
        }
    }

    removeAnimal = (id) => {
        this.props.removeAnimal(id);
    }

    render() {
        return (
            <>
                {this.props.showAddForm ? <AnimalFormContainer showForm={this.showForm}/> : null}
                <Animals style={{background: this.context.background}}
                         animals={this.props.animals}
                         showDetails={this.showDetails}
                         expandedAnimal={this.props.expandedAnimal}
                         hideShowCats={this.hideShowCats}
                         hideCats={this.props.hideCats}
                         onInputChanged={this.onInputChanged}
                         showForm={this.showForm}
                         removeAnimal={this.removeAnimal}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    animals: state.animals.animals,
    expandedAnimal: state.animals.expandedAnimal,
    hideCats: state.animals.hideCats,
    showAddForm: state.animals.showAddForm
});

export default compose(
    connect(mapStateToProps, {
        getAnimals,
        setExpandedAnimal,
        setHideCats,
        filterAnimals,
        setShowAddForm,
        removeAnimal
    }),
)(AnimalsContainer);
