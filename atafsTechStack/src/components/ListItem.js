import React, {Component} from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common';
import * as actions from '../actions'

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props

        return expanded
            ?   <CardSection>
                    <Text style={{ flex: 1 }}>{library.item.description}</Text>
                </CardSection>
            :   null
    }

    render() {
        console.log('this.props', this.props)

        const { id, title } = this.props.library.item
        const { titleStyle } = styles

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectedLibrary(id)}
            >
                <View>
                    <CardSection style={titleStyle} key={id}>
                        <Text>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('ownProps', ownProps)

    const expanded = state.selectedLibraryId === ownProps.library.item.id
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)