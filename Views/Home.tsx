import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ICommon from '../common/interfaces/ICommon';
import Card from '../common/Card';
import { Icon } from 'react-native-elements';




interface IProps extends ICommon{}
interface IState{}

export default class Home extends React.Component<IProps, IState> {

  static navigationOptions=({ navigation })=>{
    return{
      headerRight:()=>
      {
        return <View>
          
          <Icon
          containerStyle={{marginRight:10}}
          size={30}
          name="bars"
          type="font-awesome"
          color="pink"
          onPress = {() => navigation.openDrawer ()}>
         
          </Icon>
          </View>

      }


    }

  }
  cards=[{color:"#54c5b4", count:1, title:"Banka"},
  {color:"#54c5b4", count:2, title:"Facebook"},
  {color:"#54c5b4", count:3, title:"Twittere"}
 ]
  constructor(p: IProps, s: IState)
  {
    super(p,s)
  }
  render(){

  return (
   
      <ScrollView>
      <View style={styles.container}>

          {

          this.cards.map( (item,index)=>{
            return <Card key={`card_${index}`} color={item.color} count={item.count} title={item.title}></Card>
          })
          }
       </View>
      </ScrollView>
  
    
   
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
