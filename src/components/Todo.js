import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles';

export default function Todo() {
  return (
    <TouchableOpacity style={styles.todo}>
      <Image
        source={require('../assets/icon/check.png')}
        style={styles.todoIcon}
      />
      <Text style={styles.text}>Learn React Native</Text>
    </TouchableOpacity>
  );
}
