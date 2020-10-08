import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles';

const Category = () => {
  return (
    <TouchableOpacity style={styles.category}>
      <Text style={styles.text}>40 Task</Text>
      <Text style={styles.categoryTitle}>Business</Text>
    </TouchableOpacity>
  );
};

export default Category;
