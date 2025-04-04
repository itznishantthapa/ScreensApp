import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React from 'react'

const ScrollViews = () => {

  const colors=['black','blue','grey','orange','purple','white','green','brown']

  return (
    <View style={styles.container}>
      <ScrollView>
        {
            colors.map((color,index)=>(
              <View 
              key={index}
              style={{backgroundColor:color,height:200,width:'100%'}} 
              />
            ))
        }
      </ScrollView>



    </View>
  )
}

export default ScrollViews






















const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
  }
})