import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

const Project6 = () => {
    const Square = ({ text, bgColor = "#7ce0f9" }) => (
        <View style={[styles.box, { backgroundColor: bgColor }]}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {data.map((item, index) => (
                <Square key={item} text={`Square ${index + 1}`} />
            ))}
        </ScrollView>
    );
};

export default Project6;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f4f8',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 12,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
