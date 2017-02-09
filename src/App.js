import React, { Component } from "react";
import io from "socket.io-client";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            started: false
        };
        this.socket = io("localhost:1808");
    }
    
    render() {
        return (
            <div>
                <h1>napoleon</h1>
                {this.props.children}
            </div>
        );
    }
}