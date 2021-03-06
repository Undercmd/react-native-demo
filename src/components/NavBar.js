import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const NavBar = ({title}) => {
    return (
        <View style={styles.navbar}>
           <Text style = {styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000',
        paddingBottom: 10
    },
    text: {
        color: '#FFD700',
        fontSize: 25
    }
});