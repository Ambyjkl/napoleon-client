import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            submitted: false,
            started: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    disableEnter(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            this.handleSubmit(event);
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value === "") {
            alert("Come on, I know you have a name");
        } else {
            this.setState({
                submitted: true
            });
            this.props.socket.emit("ready", this.state.value);
        }
    }
    handleStart() {
        this.props.emit("start");
        this.setState({
            started: true
        });
    }
    render() {
        if(!this.state.submitted) {
            return (
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.disableEnter}/>
                    </label>
                    <button type="button" onClick={this.handleSubmit}>Join</button>
                </div>
            );
        } else if (!this.state.started) {
            return(
                <div>
                    <button type="button" onClick={this.handleStart}>Start!</button>
                </div>
            );
        } else {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
    }
}