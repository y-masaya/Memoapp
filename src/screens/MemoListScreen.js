import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';


class MemoListScreen extends React.Component {
  handlePless() {
    const { currentUser } = firebase.auth();
    this.props.navigation.navigate('MemoCreate', { currentUser: currentUser.uid });
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePless.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFDF6',
  },
});

export default MemoListScreen;
