import React, { Component } from 'react'; 
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Login, Home } from './Views';



var navi = createStackNavigator ({Login,Home});

export default createAppContainer(navi);