import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const Screen3 = () => {
  const datas = [
    { "id": 1, "title": "First Item", "description": "This is the first item description. Scroll down to see more." },
    { "id": 2, "title": "Second Item", "description": "This is the second item description. It's also scrollable!" },
    { "id": 3, "title": "Third Item", "description": "This is the third item. The scroll keeps going!" },
    { "id": 4, "title": "Fourth Item", "description": "Here's the fourth item. Keep scrolling for more content." },
    { "id": 5, "title": "Fifth Item", "description": "Last but not least, this is the fifth item in the list." }
  ];

  const presentingItem = ({ item }) => {

    return (
      <View style={{backgroundColor:'black',height:400,marginTop:20,alignItems:'center',justifyContent:'center'}}>
        <Text style={{color:'#ffffff'}}>{item.id}</Text>
        <Text style={{color:'#ffffff'}}>{item.title}</Text>
        <Text style={{color:'#ffffff'}}>{item.description}</Text>
      </View>
    )

  }

  return (
    <View>
      <FlatList
        data={datas}
        renderItem={presentingItem}
        keyExtractor={(item) => { item.id.toString() }}
      />
    </View>
  )
}

export default Screen3

const styles = StyleSheet.create({})