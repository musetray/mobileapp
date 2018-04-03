import React from 'react';
import {StyleSheet, Text, View, FlatList, TextInput} from 'react-native';
import _ from 'lodash';
import {MKButton} from 'react-native-material-kit';
// colored button with default theme (configurable)
const ColoredRaisedButton = MKButton.coloredButton()
    .withText('BUTTON')
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();

export default class App extends React.Component {
    render() {


        let anies = [];
        for (let i = 0; i <= 50; i++) {
            anies.push({key: i});
        }
        let map = _(anies).map(v => {
            key:v
        });
        // let anies = [{key:1},{key:2}];
        return (
            <View style={styles.container}>
                <TextInput
                    style={{width: '100%'}}
                    onChangeText={(text) => this.setState({text})}
                    autoFocus={true}
                    placeholder={'Поиск'}
                />
                <ColoredRaisedButton/>
                <FlatList
                    data={anies}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
    },
});
