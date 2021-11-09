import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {createAnimal} from "../../redux/reducers/animals";
import AnimalForm from "../animal-form/animal-form";

class AnimalFormContainer extends React.Component {
    componentDidMount() {
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
        const newAnimal = this.props.animal;
        newAnimal[e.target.id] = e.target.value;
        this.setState(newAnimal);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createAnimal(this.props.animal);
    }

    render() {
        return (
            <AnimalForm showForm={this.props.showForm}
                        animal={this.props.animal}
                        handle={this.handle}
                        handleSubmit={this.handleSubmit}
                        onFileChanged={this.onFileChanged}/>
        );
    }
}

const mapStateToProps = () => {
    return {
        animal: {
            breed: '',
            name: '',
            type: '',
            gender: 'М',
            age: 0,
            weight: 0,
            furLength: '',
            img: ''
        }
    }

};

export default compose(
    connect(mapStateToProps, {
        createAnimal
    }),
)(AnimalFormContainer);
