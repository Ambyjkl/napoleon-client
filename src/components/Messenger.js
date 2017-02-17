import React, { Component } from "react";
import { connect } from "react-redux";
import { findDOMNode } from "react-dom";

class Message extends Component {
    render() {
        const t = this.props.message.timestamp;
        return (
            <div className={this.props.className} style={this.props.style}>
                <i>
                    {`[${t.hours}:${t.minutes}:${t.seconds}] `}
                </i>
                <b>
                    <span style={this.props.nameStyle}>
                        {this.props.message.sender}
                    </span>
                </b>: {this.props.message.content}
            </div>
        );
    }
}

Message.propTypes = {
    message: React.PropTypes.object,
    style: React.PropTypes.object,
    nameStyle: React.PropTypes.object,
    className: React.PropTypes.string
};

class Messages extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = () => {
            const node = findDOMNode(this.messagesEnd);
            node.parentNode.scrollTop = node.offsetTop;
        };
    }
    componentDidMount() {
        this.scrollToBottom();
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    render() {
        let messagesCount = 0;
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
        return (
            <div style={{
                maxHeight: "150px",
                overflowY: "auto"
            }}>
                {
                    this.props.messages.map((message) => {
                        const style = {
                            color: `#${intToRGB(hashCode(message.sender))}`,
                            textShadow: "0px 0px 1px black"
                        };
                        console.log(`wordBreakStyle ${messagesCount % 2 ? "odd" : "even"}`);
                        return (
                            <Message
                                key={messagesCount++}
                                message={message}
                                className={`wordBreakStyle ${messagesCount % 2 ? "odd" : "even"}`}
                                nameStyle={style}
                            />
                        );
                    })
                }
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

Messages.propTypes = {
    messages: React.PropTypes.array
};

class TextBox extends Component {
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
        const inputStyle = {
            boxSizing: "border-box",
            width: "100%"
        };
        return (
            <div style={this.props.style}>
                <form onSubmit={this.handleSubmit}>
                    <input
                        style={inputStyle}
                        type="text"
                        placeholder="Type a message..."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        );
    }
}
TextBox.propTypes = {
    name: React.PropTypes.string,
    sendMessage: React.PropTypes.func,
    style: React.PropTypes.object
};

const mapState = (state) => ({
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
const WrapTextBox = connect(mapState, mapDispatchToProps)(TextBox);

class Messenger extends Component {
    render() {
        return (
            <div className={this.props.className} style={this.props.style}>
                <Messages messages={this.props.messages} />
                <div style={{ display: "flex" }}>
                    <div style={{ textOverflow: "ellipsis", maxWidth: "70%", margin: "auto 5px" }}>
                        {this.props.name}:
                    </div>
                    <WrapTextBox style={{ flex: "1" }} />
                </div>
            </div>
        );
    }
}
Messenger.propTypes = {
    messages: React.PropTypes.array,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.string
};

const mapStateToProps = (state) => ({
    messages: state.messages,
    name: state.name
});

const Wrapper = connect(mapStateToProps)(Messenger);
export default Wrapper;