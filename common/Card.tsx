import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import {Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IProps {
    title:string,
    color:string,
    count:number
}
interface IState{
    title:string,
    color:string,
    count:number
}

const width=Dimensions.get("window").width;

export default class Card extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState)
  {
    super(p,s);
    this.state={
        color:this.props.color,
        title:this.props.title,
        count:this.props.count

    }
  }
  render(){

  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.container, {backgroundColor:this.state.color}]}>
        <Text  style={{fontWeight:"bold", fontSize:20}}>{this.state.title}</Text>
        <Text style={{fontWeight:"bold", fontSize:20}} >{this.state.count}</Text>
        </TouchableOpacity>
       
    </View>
  );
}
  
}

const styles=StyleSheet.create({
    container:{
        marginTop:10,
        width:(width-30)/2,
        height:(width-30)/2,
        borderRadius:10,
        alignItems:"center",
        justifyContent:"center"

    }

});
