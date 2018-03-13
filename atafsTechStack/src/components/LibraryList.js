import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {

    renderItem(library) {
        return <ListItem library={library} />;
    }

    render() {
        console.log('this.props', this.props)

        return (
            <FlatList
                data={this.props.libraries}
                extraData={this.state}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.index}
            />
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state)

    return {libraries: state.libraries}
};

export default connect(mapStateToProps)(LibraryList)
