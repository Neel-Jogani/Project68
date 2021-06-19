import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class SearchScreen extends React.Component{
  render(){
    return(
      <View>
<Image
            style={{width: 306, alignSelf:'center',
    height: 108,marginTop:200}}
        source={{
          uri: 'https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2005.jpg',
        }}
      />
       
       
       </View>
    );
  }
}
