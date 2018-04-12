import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions} from 'react-native-router-flux'
import { CardSection } from './common'

class EmployeeListItem extends Component {
    onRowPress() {
        Actions.employeeEdit({ employee: this.props.employee })
    }

    render() {
        const { name, phone, shift } = this.props.employee

        return (
            <TouchableWithoutFeedback onPress={() => this.onRowPress()}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            { `${name} - ${shift} - ${phone}` }
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default EmployeeListItem