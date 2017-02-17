import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "./Login";
import PlayerList from "./PlayerList";
import Game from "./Game";
import { deepOrange500 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <h1><span style={{ fontWeight: "normal" }}>♚</span> napoleon</h1>
                    {
                        this.props.gameStarted
                            ? <Game />
                            : (<div>
                                <PlayerList />
                                <Login />
                            </div>)
                    }
                </div>
            </MuiThemeProvider>
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