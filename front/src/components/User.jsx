import React, { Component } from "react";
import '../resources/css/cards.css';
import '../resources/css/buttons.css';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            email: this.props.email,
            name: this.props.first_name + ' ' + this.props.last_name,
            avatar: this.props.avatar,
            showEmail:true
        }
    }

    render() {
        return (
        <div class="card">
            <div class="card-side front">
                <div>{this.state.name}</div>
                <img class="card-image" src={this.state.avatar} />
            </div>
            <div class="card-side back">
                <div>{ this.state.showEmail?this.state.email:this.state.name}</div>
                <br/>   <br/>   <br/>
                <button 
                onClick={()=> this.setState({showEmail:!this.state.showEmail})} 
                class="button-swing">
                    Mostrar {this.state.showEmail?"Nombre":"Email"}
                    </button>
            </div>
        </div>
        );
    }
}