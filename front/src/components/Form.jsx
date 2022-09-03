import React, { Component } from "react";
import '../resources/css/form.css';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            first_name: "",
            last_name: "",
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        }
    }

    setValues = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    cleanValues = () => {
        this.setState(
            {
                email: "",
                first_name: "",
                last_name: "",
                avatar: "https://reqres.in/img/faces/2-image.jpg"
            }
        )
    }

    insertUser=(event)=>{
        event.preventDefault();
        this.props.addUserOnline(this.state.email,this.state.first_name,this.state.last_name);
        this.cleanValues();
    }

    render() {
        return (
            <>
                <form onSubmit={this.insertUser}>
                    <input
                        id="first_name"
                        type="text"
                        name="first_name"
                        required={true}
                        placeholder="Nombre"
                        value={this.state.first_name}
                        onChange={this.setValues}

                    />
                    <input
                        id="last_name"
                        type="text"
                        name="last_name"
                        required={true}
                        placeholder="Apellido"
                        value={this.state.last_name}
                        onChange={this.setValues}
                    />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required={true}
                        placeholder="Correo"
                        value={this.state.email}
                        onChange={this.setValues}
                    />
                    <div>
                        <button class="success" >Agregar Usuario</button>
                        <button class="warning" onClick={this.cleanValues}>Limpiar</button>

                    </div>


                </form>

            </>
        );
    }
}