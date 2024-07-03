import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { router } from 'expo-router';

const PurchaseTourScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePurchase = () => {
    // Handle the purchase logic here
    alert('Purchase successful!');
    router.push('TourScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Purchase Tour</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        value={cardNumber}
        onChangeText={setCardNumber}
        placeholder="Enter your card number"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Expiry Date</Text>
      <TextInput
        style={styles.input}
        value={expiryDate}
        onChangeText={setExpiryDate}
        placeholder="MM/YY"
        keyboardType="numeric"
      />

      <Text style={styles.label}>CVV</Text>
      <TextInput
        style={styles.input}
        value={cvv}
        onChangeText={setCvv}
        placeholder="CVV"
        keyboardType="numeric"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handlePurchase}>
        <Text style={styles.buttonText}>Complete Purchase</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#242424',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#242424',
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: '#B9B9B9',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 8,
  },
  button: {
    backgroundColor: '#8DE8C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginTop: 32,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
  },
});

export default PurchaseTourScreen;
