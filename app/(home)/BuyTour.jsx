import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const BuyTourScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTour, setSelectedTour] = useState('');

  const handlePurchase = () => {
    // Handle the tour purchase logic here
    alert('Tour purchased successfully!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}></Text>
      
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <Text style={styles.label}>Select a Tour</Text>
      <Picker
        selectedValue={selectedTour}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedTour(itemValue)}
      >
        <Picker.Item label="Select a tour" value="" />
        <Picker.Item label="Yosemite National Park" value="yosemite" />
        <Picker.Item label="Golden Gate Bridge" value="golden_gate" />
        <Picker.Item label="Alcatraz Island" value="alcatraz" />
      </Picker>

      <TouchableOpacity style={{ backgroundColor: '#8DE8C7', justifyContent: 'center', alignItems: 'center', borderRadius: 16, padding: 16, marginTop: 16 }}
  onPress={() => router.push('PurchaseTour')}>
  <Text style={{ color: '#FFF', fontSize: 24, fontWeight: 600 }}>Buy a tour</Text>
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
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#242424',
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#F8F8F8',
  },
  picker: {
    height: 50,
    marginBottom: 16,
    backgroundColor: '#F8F8F8',
  },
  button: {
    backgroundColor: '#8DE8C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default BuyTourScreen;
