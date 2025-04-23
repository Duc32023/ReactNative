import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Calculator = () => {
  const buttons = [
    ['C', 'DEL', '/', '*'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.', ''], // Empty cell for alignment, '0' spans two columns
  ];

  const [theme, setTheme] = useState('light');
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('theme');
      if (savedTheme) setTheme(savedTheme);
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme);
  };

  const handleButtonPress = (btn) => {
    if (['+', '-', '*', '/', '=', 'C', 'DEL'].includes(btn)) {
      Vibration.vibrate(50);
    }

    if (btn === 'C') {
      setExpression('');
      setResult('');
    } else if (btn === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (btn === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
        setExpression('');
      } catch {
        setResult('Error');
      }
    } else if (btn !== '') {
      setExpression(expression + btn);
    }
  };

  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#1C2526' : '#F5F5F5' }]}>
      {/* Header with theme toggle and display */}
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleTheme}>
          <Ionicons
            name={isDark ? 'sunny' : 'moon'}
            size={28}
            color={isDark ? '#FFF' : '#000'}
          />
        </TouchableOpacity>
        <View style={styles.display}>
          <Text style={[styles.expression, { color: isDark ? '#FFF' : '#000' }]}>
            {expression || '0'}
          </Text>
          <Text style={[styles.result, { color: '#00BCD4' }]}>{result || '0'}</Text>
        </View>
      </View>

      {/* Button Grid */}
      <View style={[styles.buttonContainer, { backgroundColor: isDark ? '#2E3A3B' : '#FFF' }]}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((btn, btnIndex) => {
              if (btn === '') return <View key={btnIndex} style={styles.emptyCell} />;
              const isOperator = ['C', 'DEL', '/', '*', '-', '+', '='].includes(btn);
              const isZero = btn === '0';
              return (
                <TouchableOpacity
                  key={btnIndex}
                  style={[
                    styles.button,
                    {
                      backgroundColor: isOperator ? '#00BCD4' : isDark ? '#3E4E50' : '#FFF',
                      flex: isZero ? 2 : 1,
                    },
                  ]}
                  onPress={() => handleButtonPress(btn)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      { color: isOperator ? '#FFF' : isDark ? '#FFF' : '#333' },
                    ]}
                  >
                    {btn}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  display: {
    alignItems: 'flex-end',
  },
  expression: {
    fontSize: 30,
    marginBottom: 10,
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 2,
    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  emptyCell: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default Calculator;