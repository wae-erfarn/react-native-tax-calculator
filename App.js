import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [money, setMoney] = useState(0);
  const [vat, setVat] = useState(0);

  const m = parseFloat(money);
  const v = parseFloat(vat);

  const TaxResult = Number(m * v / 100 + m).toFixed(2) + " บาท";

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#2dd5fd', '#22c393']}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>คำนวณภาษี</Text>

        <View style={styles.inputs}>
          <TextInput
            keyboardType='numbers-and-punctuation'
            placeholder="จำนวนเงิน"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            style={styles.input}
            value={money}
            onChangeText={setMoney}
          />
          <TextInput
            keyboardType='numbers-and-punctuation'
            placeholder="จำนวนภาษี %"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            style={styles.input}
            value={vat}
            onChangeText={setVat}
          />
        </View>

        <Text style={styles.subtitle}>จำนวนเงินรวมภาษี %</Text>
        <Text style={[styles.input, styles.result]}>{TaxResult}</Text>

        <StatusBar style="auto" />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    fontFamily: 'Unispace',
  },

  linearGradient: {
    alignItems: 'center',

    height: '100%',
    width: '100%',
  },
  
  title: {
    marginTop: 100,

    fontSize: 26,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },

  inputs: {
    alignItems: 'center',

    marginTop: 30,
  },

  input: {
    textAlign: 'center',

    width: 250,

    paddingVertical: 20,
    paddingHorizontal: 60,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 10,
    marginTop: 10,

    fontSize: 20,
  },

  subtitle: {
    marginTop: 10,

    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
  },

  result: {
    marginTop: 8,

    fontSize:28,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});