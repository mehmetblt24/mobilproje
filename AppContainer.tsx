import React, { Component } from 'react'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { TransitionPresets } from '@react-navigation/stack';
import { Login, Home, Menu } from './Views';
import  {createDrawerNavigator} from 'react-navigation-drawer'



var viewsNavi = createStackNavigator ({
    Login:{
        screen:Login,
        navigationOptions:{
            headerShown:false
        }
    },
    
    Home:{
        screen: Home,
       

    }
},
    {    
        initialRouteName:"Login",
        mode:"card",
        headerMode:"float",
        defaultNavigationOptions:({navigation,navigationOptions,screenProps})=>{
            
            var props:any = screenProps;
            return{
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled:true,
                title: props.t(navigation.state.routeName)
            }
        
        }

    


});

const navi=createDrawerNavigator(
    {viewsNavi},
    {
    contentComponent:Menu
});
export default createAppContainer(navi);