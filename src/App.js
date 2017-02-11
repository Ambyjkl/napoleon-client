import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import PlayerList from "./PlayerList";
import Game from "./Game";

class App extends Component {
    render() {
        return (
            <div>
                <h1 style={{ fontFamily: "sans-serif" }}><span style={{ fontWeight: "normal" }}>♚</span> napoleon</h1>
                {
                    this.props.gameStarted
                        ? <Game style={{ fontFamily: "sans-serif" }} />
                        : (<div style={{ fontFamily: "sans-serif" }}>
                            <PlayerList />
                            <Login />
                        </div>)
                }
            </div>
        );
    }
}

App.propTypes = {
    gameStarted: React.PropTypes.bool
};

const mapStateToProps = (state) => ({
    gameStarted: state.gameStarted
});

const Wrapper = connect(mapStateToProps)(App);
export default Wrapper;