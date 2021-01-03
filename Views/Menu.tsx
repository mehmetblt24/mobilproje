import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import {Icon, Input,ListItem,Text } from 'react-native-elements';
import { DrawerContentComponentProps } from 'react-navigation-drawer';
interface IProps extends DrawerContentComponentProps{}
interface IState{
 
}

export default class Menu extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState)
  {
    super(p,s)
    this.state={
     
    }
  }
  render(){

  return (
    <View style={styles.container} >
        <View style={{flex:1,backgroundColor:"pink"}}></View>
        <View style={{flex:1,backgroundColor:"pink"}}></View>
        <View style={styles.container}>
            <ListItem title="Kategoriler" bottomDivider rightIcon={<Icon size={30} type="font-awesome" name="chevon-right" color="pink"  onPress={()=>{this.props.navigation.navigate("CategoryList")}}></Icon>}></ListItem>
        </View>
        <View style={styles.container}></View>
    </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
     
    }
  });

