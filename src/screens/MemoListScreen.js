import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

// this.props.navigation.navigate('MemoEdit');

class MemoListScreen extends React.Component {
  // eslint-disable-next-line
  handlePless() {
    const { params } = this.props.navigation.navigate;
    const db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: 'hi',
      createtedOn: '2019-09-28',
    })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.log(eroor);
      });
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
