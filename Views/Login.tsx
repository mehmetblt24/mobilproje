import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import {Input } from 'react-native-elements';
interface IProps extends ICommon{}
interface IState{
  errorMessage:string
  psw:string
}

export default class Login extends React.Component<IProps, IState> {

  constructor(p: IProps, s: IState)
  {
    super(p,s)
    this.state={
      errorMessage:"",
      psw:""
    }
  }
  render(){

  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor:"pink", justifyContent:"center", alignItems:"center"}}>
        <Text style={{fontSize:30, fontWeight:"bold"}}>Uygulamam</Text>
      </View>
      <View style={{flex: 1, padding:20}}>
        <Input 
        onChangeText={(e)=>this.setState({psw:e})}
        value={this.state.psw}
        secureTextEntry={true}
        placeholder={this.props.screenProps.t("PassPlaceHolder")}
        errorStyle={{color:'red'}}
        errorMessage={this.state.errorMessage}></Input> 

        
        <Button title={this.props.screenProps.t("Accept")} onPress={this.login}></Button>
      </View>
      <View style={{flex: 1}}></View>
   
    </View>
  );
}
login =  () =>{

  if(this.state.psw==="123")
  {
    this.props.navigation.navigate("Home")
  }
  else{
    this.setState({errorMessage:this.props.screenProps.t("PassErr")})
  }
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
