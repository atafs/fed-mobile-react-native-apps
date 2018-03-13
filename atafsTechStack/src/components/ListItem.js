import React, {Component} from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        console.log('this.props', this.props)

        const { id, title } = this.props.library.item

        return (
            <CardSection key={id}>
                <Text>{title}</Text>
            </CardSection>
        );
    }
}

export default ListItem
