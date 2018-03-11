import React, {Component} from 'react';
import {connect} from 'react-redux';

class LibraryList extends Component {
    render() {
        console.log('this.props', this.props)
        return;
    }
}

const mapStateToProps = state => {
    console.log('state', state)

    return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList)
