import React, { Component } from "react";
import { connect } from "react-redux";

class Game extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(this.props.status.log.length);
    // }
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
        const myTurn = this.props.status.currentPlayer === this.props.name;
        const suitChars = {
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
        let cardsList;
        if (!this.props.status) {
            cardsList = null;
        } else {
            let hand = new Map();
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
                    <p>
                        My cards:
                </p>
                    {
                        this.props.status.allAreGroups ?
                            <p>Hidden because all your cards are groups</p>
                            :
                            <ul>
                                {
                                    Array.from(hand).map(([value, suits]) => {
                                        let suitArr = suits.map((suit) => {
                                            const suitChar = suitChars[suit];
                                            return (
                                                <span key={suit} style={suitChar.style}>
                                                    {suitChar.char}
                                                </span>
                                            );
                                        });
                                        const valueStyle = {
                                            color: suitArr.length === 4 ? "green" : "black"
                                        };
                                        return (
                                            <li key={cardCount++}>
                                                <span style={valueStyle}>
                                                    {value.toUpperCase()}
                                                </span>: {suitArr}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
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
            let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            movesBox = (
                <div>
                    <p>Choose a value</p>
                    {
                        values.map((value) => (
                            <button key={value} type="button" onClick={() => {
                                this.props.setTargetCardValue(value);
                                if (this.props.status.allAreGroups) {
                                    this.props.move({
                                        name: this.props.name,
                                        targetPlayer: this.props.localState.targetPlayer,
                                        targetCard: this.props.localState.targetCard
                                    });
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
                        Object.keys(suitChars).map((suit) => {
                            const suitChar = suitChars[suit];
                            {/*console.log(suitChar, suitChar.char, suit.toString());*/ }
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
        // let logCount = 0;
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>
                    {myTurn ? "Your turn" : `${this.props.status.currentPlayer}'s turn`}
                </p>
                <p>
                    Log:
                </p>
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
                {cardsList}
                {movesBox}
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
    status: React.PropTypes.object
};

const mapStateToProps = (state) => ({
    name: state.name,
    status: state.status,
    localState: state.localState
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