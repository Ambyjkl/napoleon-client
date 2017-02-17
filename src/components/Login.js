import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            nameConflict: false,
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
            nameConflict: false,
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value !== "" && !this.state.nameConflict) {
            if (this.nameTaken()) {
                this.setState({
                    nameConflict: true
                });
            } else {
                this.setState({
                    submitted: true
                });
                this.props.ready(this.state.value);
            }
        }
    }
    handleStart() {
        this.props.start();
        this.setState({
            started: true
        });
    }
    render() {
        let r;
        if (!this.state.submitted) {
            r = (
                <form onSubmit={this.handleSubmit}>
                    {/*<input type="text" placeholder="Nickname" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit} value="Join" />*/}
                    <TextField errorText={this.state.nameConflict ? "This name is already taken" : ""} hintText="Nickname" value={this.state.value} onChange={this.handleChange} />
                    <RaisedButton label="Join" primary={true} style={{ position: "absolute" }} disabled={this.state.value === "" || this.state.nameConflict} onClick={this.handleSubmit} />
                </form>
            );
        } else if (!this.state.started) {
            r = (

                <form onSubmit={this.handleStart}>
                    {/*<input type="text" placeholder="Nickname" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit} value="Join" />*/}
                    {/*<TextField errorText={this.state.nameConflict ? "This name is already taken" : ""} hintText="Nickname" value={this.state.value} onChange={this.handleChange} />*/}
                    <RaisedButton label="Start!" secondary={true} onClick={this.handleStart} />
                </form>
            );
        } else {
            r = (
                <div>
                    <p>Loading...</p>
                </div>
            );
        }
        return r;
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
            type: "NAME",
            data: name
        });
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
    }
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Login);
export default Wrapper;