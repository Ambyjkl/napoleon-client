import React, { Component } from "react";
import { connect } from "react-redux";
import Messenger from "./Messenger";

class Game extends Component {
    constructor(props) {
        super(props);
        this.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        this.cardStyle = {
            alignItems: "center",
            background: "#FFFFFA",
            border: "1px solid black",
            borderRadius: "5px",
            boxShadow: "0 1px 2px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.23)",
            display: "inline-block",
            padding: "0px 10px 5px",
            textAlign: "center",
            width: "70px"
        };
        this.overlapStyle = {
            marginTop: "-50px"
        };
        this.suitChars = {
            "s": {
                char: "♠",
                style: {
                    color: "black"
                }
            },
            "h": {
                char: "♥",
                style: {
                    color: "red"
                }
            },
            "c": {
                char: "♣",
                style: {
                    color: "black"
                }
            },
            "d": {
                char: "♦",
                style: {
                    color: "red"
                }
            }
        };
        this.flexStyle = {
            container: {
                // display: "flex"
                // display: "inline-block"
            },
            leftChild: {
                // flex: 1
                // float: "left",
                margin: "10px"
            },
            rightChild: {
                float: "right",
                margin: "10px"
            }
        };
    }
    move() {
        const data = {
            source: this.props.name,
            target: this.props.localState.targetPlayer,
            card: this.props.localState.targetCard
        };
        this.setprops.localState({
            targetPlayer: null,
            targetCard: {
                value: null,
                suit: null
            }
        }, this.props.move(data));
    }

    render() {
        if (this.props.status.gameOver || this.props.status.lost || this.props.status.won) {
            return (
                <div style={{ ...this.flexStyle.container, ...this.props.style }}>
                    <Messenger style={this.flexStyle.rightChild} />
                    <div style={this.flexStyle.leftChild}>
                        <h2>
                            Log:
                        </h2>
                        <ul>
                            {/*{
                            this.props.status.gameLog.map((logItem) => (
                                <li key={logCount++}>
                                    {logItem}
                                </li>
                            ))
                        }*/}
                            <li>
                                {this.props.status.gameLog[this.props.status.gameLog.length - 1]}
                            </li>
                        </ul>
                    </div>

                    <p>
                        {
                            this.props.status.gameOver ? "Game over!"
                                : null
                        }
                        {
                            this.props.status.lost ? "You lost!"
                                : this.props.status.won ? "You won!"
                                    : "Error..."
                        }
                    </p>
                </div>
            );
        }
        const myTurn = this.props.status.currentPlayer === this.props.name;
        let cardsList;
        if (!this.props.status) {
            cardsList = null;
        } else {
            const hand = new Map();
            for (let {value, suit} of this.props.status.myHand) {
                let suitArr = hand.get(value);
                if (hand.has(value)) {
                    suitArr = hand.get(value);
                } else {
                    suitArr = [];
                }
                suitArr.push(suit);
                hand.set(value, suitArr);
            }
            let cardCount = 0;
            cardsList = (
                <div>
                    <h2>
                        My cards:
                    </h2>
                    {
                        hand.size === 0 ?
                            <p><i>Hidden</i></p>
                            :
                            this.props.status.allAreGroups ?
                                <p><b>All your cards are now in groups of 4, so you get to see them one last time</b></p>
                                : null
                    }
                    {
                        hand.size === 0 ? null
                            :
                            <div style={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", clear: "both" }}>

                                {
                                    Array.from(hand).map(([value, suits]) => {
                                        let count = 0;
                                        let suitArr = suits.map((suit) => {
                                            const suitChar = this.suitChars[suit];
                                            let cardStyle = { ...suitChar.style, ...this.cardStyle };
                                            if (count !== 0) {
                                                cardStyle = {
                                                    ...cardStyle,
                                                    ...this.overlapStyle
                                                };
                                            }
                                            count++;
                                            let suitStyle = {
                                                fontSize: "60px", paddingRight: "10px", paddingTop: "15px"
                                            };
                                            if (count !== suits.length) {
                                                suitStyle = {
                                                    ...suitStyle,
                                                    marginTop: "-25px"
                                                };
                                            }
                                            return (
                                                <div key={suit} style={cardStyle}>
                                                    <div style={{ float: "left", paddingTop: "5px", fontFamily: "serif" }}>
                                                        {value}
                                                    </div>
                                                    <div style={suitStyle}>
                                                        {suitChar.char}
                                                    </div>
                                                    <div style={{ float: "right", fontFamily: "serif" }}>
                                                        {value}
                                                    </div>
                                                </div>
                                            );
                                        });
                                        return (
                                            <div key={cardCount++} style={{
                                                display: "flex",
                                                flexDirection: "column",
                                                margin: "10px 5px",
                                                border: suitArr.length === 4 ? "2px solid green" : null
                                            }}>
                                                {suitArr}
                                            </div>
                                        );
                                    })
                                }
                            </div>
                    }
                </div>
            );
        }
        let movesBox;
        if (!this.props.status) {
            movesBox = null;
        } else if (!myTurn) {
            movesBox = (
                <div>
                    <p>Waiting for {this.props.status.currentPlayer}</p>
                </div>
            );
        } else if (this.props.localState.targetPlayer === null) {
            movesBox = (
                <div>
                    <p>Choose a target</p>
                    {
                        this.props.status.players.map((player) => (
                            <button key={player} type="button" onClick={() => {
                                this.props.setTargetPlayer(player);
                            }}>{player}</button>
                        ))
                    }
                </div>
            );
        } else if (this.props.localState.targetCard.value === null) {
            movesBox = (
                <div>
                    <p>Choose a value</p>
                    {
                        this.values.map((value) => (
                            <button key={value} type="button" onClick={() => {
                                this.props.setTargetCardValue(value);
                                if (this.props.status.allAreGroups) {
                                    this.props.setTargetCardSuit("all");
                                    const r = {
                                        name: this.props.name,
                                        target: this.props.localState.targetPlayer,
                                        card: {
                                            value
                                        }
                                    };
                                    console.log("all ar groups!: ", r);
                                    this.props.move(r);
                                }
                            }}>{value}</button>
                        ))
                    }
                </div>
            );
        } else if (this.props.localState.targetCard.suit === null) {
            movesBox = (
                <div>
                    <p>Choose a suit</p>
                    {
                        Object.keys(this.suitChars).map((suit) => {
                            const suitChar = this.suitChars[suit];
                            return (
                                <button key={suit + suit} style={suitChar.style} type="button" onClick={() => {
                                    const r = {
                                        name: this.props.name,
                                        target: this.props.localState.targetPlayer,
                                        card: {
                                            value: this.props.localState.targetCard.value,
                                            suit: suit.toString()
                                        }
                                    };
                                    console.log(r);
                                    this.props.move(r);
                                    this.props.setTargetCardSuit(suitChar);
                                }}>{suitChar.char}</button>
                            );
                        })
                    }
                </div>
            );
        } else {
            movesBox = (
                <div>
                    <p>
                        Loading...
                    </p>
                </div>
            );
        }
        let logCount = 0;
        return (
            <div style={{ ...this.flexStyle.container, ...this.props.style }}>
                <Messenger style={this.flexStyle.rightChild} />
                <div style={this.flexStyle.leftChild}>
                    <h2>
                        {myTurn ? "Your turn" : `${this.props.status.currentPlayer}'s turn`}
                    </h2>
                    <h2>
                        Log:
                    </h2>
                    <ul>
                        {/*{
                            this.props.status.gameLog.map((logItem) => (
                                <li key={logCount++}>
                                    {logItem}
                                </li>
                            ))
                        }*/}
                        <li>
                            {this.props.status.gameLog[this.props.status.gameLog.length - 1 + logCount]}
                        </li>
                    </ul>
                    {cardsList}
                    {movesBox}
                </div>
            </div>
        );
    }
}

Game.propTypes = {
    localState: React.PropTypes.object,
    move: React.PropTypes.func,
    name: React.PropTypes.string,
    setTargetPlayer: React.PropTypes.func,
    setTargetCardSuit: React.PropTypes.func,
    setTargetCardValue: React.PropTypes.func,
    status: React.PropTypes.object,
    style: React.PropTypes.object
};

const mapStateToProps = (state) => ({
    localState: state.localState,
    name: state.name,
    status: state.status
});

const mapDispatchToProps = (dispatch) => ({
    move: (data) => {
        dispatch({
            type: "s/move",
            data: {
                source: data.name,
                target: data.target,
                card: data.card
            }
        });
    },
    reset: () => {
        dispatch({
            type: "RESET_LOCAL_STATE"
        });
    },
    setTargetPlayer: (player) => {
        dispatch({
            type: "SET_TARGET_PLAYER",
            data: player
        });
    },
    setTargetCardValue: (value) => {
        dispatch({
            type: "SET_TARGET_CARD_VALUE",
            data: value
        });
    },
    setTargetCardSuit: (suit) => {
        dispatch({
            type: "SET_TARGET_CARD_SUIT",
            data: suit
        });
    }
});

const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Game);
export default Wrapper;