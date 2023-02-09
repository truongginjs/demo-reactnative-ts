import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import mongoose from 'mongoose';
import Table from './components/Table';

export default function App() {
  // mongoose.connect('mongodb+srv://user:YK8WBUbotHLmpBSf@demo.kto4awg.mongodb.net/test')
  // .then(() => console.log('Connected!'));

  return (
    <View style={styles.container}>
      <Table/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
