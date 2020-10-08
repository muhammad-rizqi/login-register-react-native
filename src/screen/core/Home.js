import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollViewComponent,
} from 'react-native';
import FloatingActionBar from '../../components/FloatingActionBar';
import {styles} from '../../assets/styles/styles';
import Category from '../../components/Category';
import Todo from '../../components/Todo';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <ScrollView style={styles.contentWrapper}>
          <View style={styles.appBar}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}>
              <Image
                source={require('../../assets/icon/list.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>What's Up, Rizqi </Text>
          <View>
            <Text style={styles.text}>CATEGORIES</Text>
            <ScrollView horizontal={true} style={styles.categoryContainer}>
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
              <Category />
            </ScrollView>
            <View style={styles.todoList}>
              <Text style={styles.text}>TODAY TASKS</Text>

              <View>
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
                <Todo />
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.floatActionBar}>
          <FloatingActionBar />
        </View>
      </View>
    );
  }
}
