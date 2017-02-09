import React, { Component } from "react";
export default class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        };
    }
    componentDidMount() {
        this.props.socket.on("newPlayer", (playerName) => {
            console.log(playerName);
            this.setState({
                players: this.state.players.concat([playerName])
            });
        });
    }
    render() {
        return (
            <div className="PlayerList">
                <h2> Ready Players: </h2>
                    <ul>
                    {
                        this.state.players.map((playerName) => {
                            return (
                                <li>{playerName}</li>
                            );
                        })
                    }
                    </ul>
            </div>
        );
    }
}