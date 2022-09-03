import React, { Component } from "react";
import Form from "./components/Form";
import User from "./components/User";

const URL = "https://reqres.in/api/users";
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    // antes del constructor

    //despues del constructor
    componentDidMount() {
        this.findUsers();
    }


    findUsers = () => {
        fetch(URL)
            .then(response => response.json())
            .then(json => this.setState({ users: json.data }))
            .catch(error => alert(error))
            .finally(end => console.log("Finalizado correctamente el llamado a los usuarios..." + end))
    }

    addUser = (email, first_name, last_name) => {

        const user = {
            email: email,
            first_name:first_name,
            last_name: last_name,
            avatar: "https://reqres.in/img/faces/2-image.jpg"
        }

        const HEADER = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        }

        fetch(URL, HEADER)
            .then(response => response.json())
            .then(user => this.setState({ users: [...this.state.users, user] }))
            .catch(error => console.log(error))
            .finally(end => console.log("Finalizado correctamente el llamado a los usuarios..." + end))

    }

    render() {
        return (
            <>
                <Form addUserOnline = {this.addUser}/>
                {
                    this.state.users.map((user) =>
                        <User
                            key={user.id}
                            id={user.id}
                            email={user.email}
                            first_name={user.first_name}
                            last_name={user.last_name}
                            avatar={user.avatar}
                        />
                    )
                }

            </>
        );
    }
}
