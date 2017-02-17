import React, { Component } from "react";
import PlayerList from "./PlayerList";
import Login from "./Login";

export default class LoginPage extends Component{
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.socket.on("prepareForNewGame", (playerNames) => {
            console.log(this.props.history);
            this.props.history.push('/Game');
        });
    }
    render() {
        return (
            <div>
                <PlayerList />
                <Login socket={this.socket}/>
            </div>
        );
    }
}