import React, { Component } from "react";
import { connect } from "react-redux";

class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.count = 0;
    }
    render() {
        return (
            <div className="PlayerList">
                {
                    this.props.players.length > 0 ?
                        <h2> Ready Players: </h2>
                        : null
                }
                <ul>
                    {
                        this.props.players.map((playerName) => (
                            <li key={++this.count}>
                                {playerName}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

PlayerList.propTypes = {
    players: React.PropTypes.array
};

const mapStateToProps = (state) => ({
    players: state.playerList
});

const Wrapper = connect(mapStateToProps)(PlayerList);
export default Wrapper;