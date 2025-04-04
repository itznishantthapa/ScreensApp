import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Screen1 = ({navigation}) => {

    const [number, setNumber] = useState(0)
    const [isDark,setDark] = useState(false)

    const handleToNextScreen=()=>{
        navigation.navigate('Screen2')
    }

    const handleColorChange=()=>{
       setDark(!isDark)
    }


    useEffect(() => {
        
        console.log('halchal vyo haii useEffect ma')

   
    }, [isDark,number])
    


  return (
    <View style={[styles.container, {backgroundColor: isDark ? 'black' : 'white'}]}>
      <Text style={styles.txt}>Screen1</Text>
      <Text>{number}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleToNextScreen}>
        <Text>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn,{backgroundColor:'grey'}]} onPress={handleColorChange}>
        <Text>Color Change</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Screen1

const styles = StyleSheet.create({
    txt:{
        color:'#dadada',
        fontSize:20,
      
    },
    container:{
        justifyContent:'center',
        height:'100%',
        backgroundColor:'red',
        alignItems:'center'
    },
    btn:{
        height:50,
        width:100,
        backgroundColor:'white',
        justifyContent:'center',
        margin:10
    }
})