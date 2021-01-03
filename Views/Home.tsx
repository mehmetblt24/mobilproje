import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import Card from '../common/Card';

interface IProps extends ICommon{}
interface IState{}

export default class Home extends React.Component<IProps, IState> {

  cards=[{color:"#54c5b4", count:2, title:"bir"},
  {color:"#eb7988", count:1, title:"iki"},
  {color:"#54c5b4", count:3, title:"üç"},
  {color:"#54c5b4", count:4, title:"dört"},
  {color:"#54c5b4", count:5, title:"beş"},
  {color:"#54c5b4", count:6, title:"alt"},
  {color:"#54c5b4", count:7, title:"yedi"}]
  constructor(p: IProps, s: IState)
  {
    super(p,s)
  }
  render(){

  return (
    <View style={styles.container}>
      {

        this.cards.map( (item,index)=>{
          return <Card key={`card_${index}`} color={item.color} count={item.count} title={item.title}></Card>
        })
      }
    
    </View>
  );
}
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    flexDirection:"row",
   justifyContent:"space-between",
   flexWrap:"wrap"
  },
});
