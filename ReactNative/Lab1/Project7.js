import { Alert, StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

const Project7 = () => {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>What is your name?</Text>
            <TextInput
                style={styles.input}
                placeholder="John Doe"
                placeholderTextColor="rgba(0,0,0,0.5)"
                onChangeText={(text) => setName(text)}
                value={name}
                mode="outlined"
            />
            <Button
                title="Say Hello"
                onPress={() => {
                    alert(`Hello, ${name}!`);
                    setName('');
                }}
                color="#4caf50" 
            />
        </View>
    );
};

export default Project7;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        width: '100%',
        marginTop: 10,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 8,
        elevation: 3, 
    },
});
