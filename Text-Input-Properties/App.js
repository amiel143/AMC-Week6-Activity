import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const handleInputExample = () => {
  const [text, setText] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Submitted Text:', text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name:"
          maxLength={10}
          onChangeText={(text) => setFname(text)}
        />
      </View>
      <Text style={styles.displayText}>Remaining: {10 - fname.length} Characters</Text>

      <View style={styles.inputContainer}>
        <Icon name="person" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name:"
          maxLength={10}
          onChangeText={(text) => setLname(text)}
        />
      </View>
      <Text style={styles.displayText}>Remaining: {10 - lname.length} Characters</Text>

      <View style={styles.inputContainer}>
        <Icon name="cake" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="AGE:"
          keyboardType="phone-pad"
          onChangeText={(value) => setAge(value)}
        />
      </View>
      <Text style={styles.displayText}>Remaining: {age.length} Int</Text>

      <View style={styles.inputContainer}>
        <Icon name="email" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email Enter"
          onChangeText={(value) => setEmail(value)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}  
        />
      </View>
      <Text style={styles.displayText}>Password Length: {password.length}</Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}
                  returnKeyType="done"
          onSubmitEditing={handleSubmit}  >Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  displayText: {
    marginTop: 10,
    fontSize: 10,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default handleInputExample;
