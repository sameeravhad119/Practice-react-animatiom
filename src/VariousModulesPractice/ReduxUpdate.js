import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userUpdateAction } from '../actions/userAction';

class ReduxUpdate extends Component {
    constructor() {
        super();
        this.state = {}
    }

    updateUser = (e) => {
        this.props.onUpdateUser(e.target.value);
    }

    render() {
        return (
            <div>
                <input type={'text'} onChange={this.updateUser} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    onUpdateUser: userName => dispatch(userUpdateAction(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUpdate);
