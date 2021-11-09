import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {getAnimalId, updateAnimal} from "../../redux/reducers/animals";
import AnimalEdit from "./animal-edit";

class AnimalEditContainer extends React.Component {
    componentDidMount() {
        this.props.getAnimalId(this.props.match.params.id);
    }

    onFileChanged = (e) => {
        if (e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (event) => {
                const newAnimal = this.props.animal;
                newAnimal[e.target.id] = event.target.result;
                this.setState(newAnimal);
            }
        }
    }

    handle = (e) => {
        const newAnimal = this.props.animal
        newAnimal[e.target.id] = e.target.value
        this.setState(newAnimal)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateAnimal(this.props.animal)
    }

    render() {
        return (
            <AnimalEdit animal={this.props.animal}
                        handle={this.handle}
                        handleSubmit={this.handleSubmit}
                        onFileChanged={this.onFileChanged}/>
        );
    }
}

const mapStateToProps = (state) => ({
    animal: state.animals.animal
});

export default compose(
    connect(mapStateToProps, {
        getAnimalId,
        updateAnimal
    }),
)(AnimalEditContainer);
