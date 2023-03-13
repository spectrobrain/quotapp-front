import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



const WellcomeMessage = ({message}) => {
 
    const {
        containerMessageGlobal,
        containerMessage,
        textMessage
      } = styles
  return (
    
        <View style={containerMessageGlobal}>
          <View style={containerMessage}>
            <Text style={textMessage}>
              {message}
            </Text>
          </View>
         
        </View>
  
  )
}

const styles = StyleSheet.create({
   
    containerMessageGlobal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexDirection: "row",
      height: "auto",
    },
    containerMessage: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      borderRadius: 10,
      backgroundColor: "#fff",
      width: "63%",
      height: "auto",
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    containerGift: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "34%",
      width: "50%",
      height: "21.5%",
    },
    
    textMessage: {
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
      marginBottom: "30%",
      textAlign: "justify",
      fontSize: 12,
    },
  })
export default WellcomeMessage