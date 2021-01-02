import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './AppContainer';

interface IProps{}
interface IState{}

export default class App extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState)
  {
    super(p,s)
  }
  render(){

  return (
    <AppContainer></AppContainer> 
  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
