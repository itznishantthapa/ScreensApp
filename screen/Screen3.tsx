import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Screen3</Text>
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({
    txt:{
        color:'#dadada',
        fontSize:20,
   
    },
    container:{
        justifyContent:'center',
        height:'100%',
        backgroundColor:'pink',
    }
})