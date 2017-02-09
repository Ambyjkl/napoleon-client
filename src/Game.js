import React, { Component } from "react";
import io from "socket.io-client";

export default class Game extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <p>I am a game</p>
        );
    }
}