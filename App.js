import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ListView, StatusBar, Image } from 'react-native';
import Accommodation from './src/components/Accomodation';
import { ButtonGroup } from 'react-native-elements';
import { Constants } from 'expo';

export default class App extends React.Component {

    state = {
        isLoading: true,
        dataSource: null
    }

    componentDidMount = () => {
        fetch("http://172.28.55.79:8000/api/rooms")
            .then(response => response.json())
            .then((json) => {
                const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(json)
                })
            });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading && (
                        <View style={styles.splash}>
                            <Image resizeMode={"contain"} style={styles.splashImage} source={require('./assets/logo-white.png')}/>
                            <ActivityIndicator size="large" color="#fff"/>
                        </View>
                    )
                }
                {
                    (!this.state.isLoading && this.state.dataSource) && (
                        <View style={styles.listContainer}>
                            <ButtonGroup
                                buttons={
                                    [
                                        "Chambre seule",
                                        "Logement entier"
                                    ]
                                }
                            />
                            <ListView
                                style={styles.listView}
                                dataSource={this.state.dataSource}
                                renderRow={(rowData) => <Accommodation data={rowData}/>}
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f3f4",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight
    },
    splash:{
        backgroundColor: "#ffb101",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    splashImage:{
        height: 100,
        marginBottom: 20
    },
    listContainer:{
        flex: 1,
        width: "100%",

    },
    listView: {
        flex: 1,
        width: "100%",

    }
});
