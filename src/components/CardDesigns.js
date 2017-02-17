import React, { Component } from "react";

export default class CardDesigns extends Component {
    render() {
        const value = this.props.value;
        switch (this.props.value) {
            case "2": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                2
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn top">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                2
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "3": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                3
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn top">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middle">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                3
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "4": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                4
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                4
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "5": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                5
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middle">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                5
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "6": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                6
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left middle">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right middle">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                6
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "7": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                7
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left middle">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middleTop">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right middle">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                7
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "8": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                8
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left middle">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middleTop">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middleBottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right middle">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                8
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "9": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                9
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left topMiddle">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottomMiddle rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn middle">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right topMiddle">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottomMiddle rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                9
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "10": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                10
                            <br />
                                {this.props.suit}
                            </div>
                            <div className="suit left top">
                                {this.props.suit}
                            </div>
                            <div className="suit left topMiddle">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottomMiddle rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit left bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn tenMiddleTop">
                                {this.props.suit}
                            </div>
                            <div className="suit middleColumn tenMiddleBottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right top">
                                {this.props.suit}
                            </div>
                            <div className="suit right topMiddle">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottomMiddle rotate">
                                {this.props.suit}
                            </div>
                            <div className="suit right bottom rotate">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                10
                            <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            case "A": {
                return (
                    <div key={this.props.suitVal} className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                {value}
                                <br />
                                {this.props.suit}
                            </div>
                            <div className="suitA">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                {value}
                                <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
            default: {
                console.log(`url(${value}${this.props.suitVal}).svg`);
                return (
                    <div className={`card ${this.props.red ? "red" : "black"} ${this.props.overlapStyle ? "overlapStyle" : ""}`}>
                        <div className="content">
                            <div className="value topLeft">
                                {value}
                                <br />
                                {this.props.suit}
                            </div>
                            <div className="suit faceTopLeft">
                                {this.props.suit}
                            </div>
                            <div className="face" style={{ backgroundImage: `url(${value}${this.props.suitVal}.svg)` }}>
                            </div>
                            <div className="suit faceBottomRight">
                                {this.props.suit}
                            </div>
                            <div className="value bottomRight">
                                {value}
                                <br />
                                {this.props.suit}
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
}

CardDesigns.propTypes = {
    suit: React.PropTypes.string,
    suitVal: React.PropTypes.string,
    red: React.PropTypes.bool,
    overlapStyle: React.PropTypes.bool,
    value: React.PropTypes.string
};