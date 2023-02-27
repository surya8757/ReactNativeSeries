import { StyleSheet, Text, View,Linking, Image, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                what's new in javascript 12-ES12
            </Text>
        </View>
        <Image
        source={{
            uri:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
        }}
        style={styles.cardImage}
       />       
       <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
        Signals can be used to build reactive applications that respond to changes in
         real-time, without requiring manual intervention or user input. For example, a signal
          representing the status of a network request can be used to automatically update the UI when the request completes, 
        or to trigger additional requests based on the result.
        </Text>
       </View>
       <View style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=>openWebsite('https://hashnode.com/')}
        >
            <Text style={styles.socialLinks}>Read me</Text>
        </TouchableOpacity>
       </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginTop:16
    },
    card:{
        width:350,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#ffffff',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333'
    },
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#000',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:100
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLinks:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#FFF',
        paddingHorizontal:10,
        paddingVertical:6
    }
})