import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

 export default class TScreen extends React.Component{
  render(){
    return(
      <View> 
      <Image
            style={{width: 306, alignSelf:'center',marginTop:200,
    height: 108,}}
        source={{
          uri: 'https://1000logos.net/wp-content/uploads/2017/02/ig-logo.png',
        }}
      />
      
      </View>
    );
  }
}

