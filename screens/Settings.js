import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    TextInput,
    Text,
    SafeAreaView,
} from 'react-native';
import { Button } from 'react-native-elements';

class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
    };

    render() {
        return (
            <View>
                <Button 
                title="test"/>
            </View>
        )
    }
}

export default Settings;