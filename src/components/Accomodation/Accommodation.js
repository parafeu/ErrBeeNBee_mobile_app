import React from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import { Card, Icon } from 'react-native-elements';

export default class Accommodation extends React.Component {

    state = {
        opened: false
    }

    render() {
        return (
            <Card
                image={require('../../../assets/default.jpg')}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 15, marginBottom: 10 }}>{this.props.data.name.toUpperCase()}</Text>
                    <Text>{this.props.data.price_by_night + " €"}</Text>
                </View>
                {
                    !this.state.opened && (
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ opened: true })}>
                            <Icon name={"keyboard-arrow-up"} color={"#CDCDCD"}/>
                        </TouchableWithoutFeedback>
                    )
                }
                {
                    this.state.opened && (
                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ opened: false })}>
                            <Icon name={"keyboard-arrow-down"} color={"#CDCDCD"}/>
                        </TouchableWithoutFeedback>
                    )
                }
                {
                    this.state.opened && (
                        <View>
                            <View style={styles.flexRow}></View>
                        </View>
                    )
                }
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        elevation: 2,
        flex: 3,
        borderRadius: 5,
        marginHorizontal: 0,
        marginBottom: 10
    },
    image: {
        flex: 1,
        width: "100%",
        maxHeight: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    content: {
        flex: 2
    },
    flexRow: {
        flexDirection: "row"
    }
});