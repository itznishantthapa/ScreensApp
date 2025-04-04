import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { text } from 'stream/consumers';

const Screen2 = ({navigation}) => {
    const [email, setemail] = useState('');
   const [password, setpassword] = useState('');


    const handleToNextScreen=()=>{
   navigation.navigate('Screen3')
    }



    const handleSubmit=()=>{
       navigation.navigate('Screen3')
    }





  return (
     <View style={styles.container}>
      
        <TextInput style={styles.inputField} placeholder='Email' onChangeText={(text)=>{setemail(text)}} value={email}></TextInput>
    
        <TextInput style={styles.inputField} placeholder='password' onChangeText={(text)=>{setpassword(text)}} value={password}></TextInput>


        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text>Submit</Text>
        </TouchableOpacity>
     </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
  

    container:{
        backgroundColor:'#ffffff',
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        gap:10
    },
    text:{
        fontSize:18,
        color:'grey'
    },
    inputField:{
        borderWidth:1,
        borderColor:'black',
        width:'80%',
        paddingHorizontal:10,
        borderRadius:10,
        height:50
    },
    submitBtn:{
        backgroundColor:'green',
        height:50,
        width:'80%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    }

})