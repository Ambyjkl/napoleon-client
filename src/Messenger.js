import React, { Component } from "react";
import { connect } from "react-redux";
// import "./Messenger.css";

class Messenger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value !== "") {
            const content = this.state.value;
            const time = new Date();
            const hours = time.getHours();
            const minutes = time.getMinutes();
            const seconds = time.getSeconds();
            this.setState({
                value: ""
            },
                this.props.sendMessage({
                    sender: this.props.name,
                    content,
                    timestamp: {
                        hours: hours < 10 ? "0" + hours : hours,
                        minutes: minutes < 10 ? "0" + minutes : minutes,
                        seconds: seconds < 10 ? "0" + seconds : seconds
                    }
                })
            );
        }
    }
    render() {
        let messagesCount = 0;
        console.log(this.props.messages);
        const odd = {
            backgroundColor: "#AAAAAA"
        };
        const even = {
            backgroundColor: "#FFFFFF"
        };
        const wordBreakStyle = {
            overflowWrap: "break-word"
        };
        function hashCode(str) { // java String#hashCode
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            return hash;
        }

        function intToRGB(i) {
            var c = (i & 0x00FFFFFF)
                .toString(16)
                .toUpperCase();

            return "00000".substring(0, 6 - c.length) + c;
        }
        const messages = (
            <div>
                {
                    this.props.messages.map((message) => {
                        console.log(message.timestamp);
                        const style = {
                            color: `#${intToRGB(hashCode(message.sender))}`,
                            WebkitTextStroke: "0.4px black"
                        };
                        return (
                            <div key={messagesCount++} style={{ ...(messagesCount % 2 ? odd : even), ...wordBreakStyle }}>
                                <span><i>{`[${message.timestamp.hours}:${message.timestamp.minutes}:${message.timestamp.seconds}] `}</i><b><span style={style}>{message.sender}</span></b>: {message.content}</span>
                            </div>
                        );
                    })
                }
            </div>
        );
        console.log(messages);
        const inputStyle = {
            width: "100%",
            boxSizing: "border-box"
        };
        const textBox = (
            <form onSubmit={this.handleSubmit}>
                <input style={inputStyle} type="text" placeholder="Type a message..." value={this.state.value} onChange={this.handleChange} />
            </form>
        );
        return (
            <div style={this.props.style}>
                <p>Messages:</p>
                {messages}
                {textBox}
            </div>
        );
    }
}

Messenger.propTypes = {
    messages: React.PropTypes.array,
    name: React.PropTypes.string,
    sendMessage: React.PropTypes.func,
    style: React.PropTypes.object
};

const mapStateToProps = (state) => ({
    messages: state.messages,
    name: state.name
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (message) => {
        dispatch({
            type: "s/message",
            data: message
        });
    }
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Messenger);
export default Wrapper;