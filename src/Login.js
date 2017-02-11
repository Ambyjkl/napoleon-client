import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            submitted: false,
            started: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStart = this.handleStart.bind(this);
    }
    nameTaken() {
        return this.props.playerList.includes(this.state.value);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    enterToSubmit(event) {
        if (event.keyCode === 13) {
            this.handleSubmit(event);
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value === "") {
            alert("Come on, I know you have a name");
        } else if (this.nameTaken()) {
            alert("This name is already taken");
        } else {
            this.setState({
                submitted: true
            });
            this.props.name(this.state.value);
            this.props.ready(this.state.value);
        }
    }
    handleStart() {
        this.props.start();
        this.setState({
            started: true
        });
    }
    render() {
        if (!this.state.submitted) {
            return (
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.enterToSubmit} />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>Join</button>
                </div>
            );
        } else if (!this.state.started) {
            return (
                <div>
                    <button type="button" onClick={this.handleStart}>Start!</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
    }
}

Login.propTypes = {
    name: React.PropTypes.func,
    ready: React.PropTypes.func,
    playerList: React.PropTypes.array,
    start: React.PropTypes.func
};
const mapStateToProps = (state) => ({
    playerList: state.playerList
});
const mapDispatchToProps = (dispatch) => ({
    ready: (name) => {
        dispatch({
            type: "s/ready",
            data: name
        });
    },
    start: () => {
        dispatch({
            type: "s/start",
            data: "glhf"
        });
    },
    name: (name) => {
        dispatch({
            type: "NAME",
            data: name
        });
    }
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Wrapper;