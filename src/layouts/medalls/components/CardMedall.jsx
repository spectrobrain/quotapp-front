import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CardMedall = () => {
    const {cardView,imageMedall} = styles;
  return (
    <View style={cardView}>
      <Image
          style={imageMedall}
          source={require("../../../../assets/images/medal1.png")}
        />
    </View>
  )
}

export default CardMedall

const styles = StyleSheet.create({
    cardView: {
        flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "28%",
    height: "21%",
    marginTop:'2.5%',
    marginLeft:'1.7%',
    marginRight:'1.7%',
    marginBottom:'2.5%',
    borderRadius: 10,
    borderColor : "#51e7fb",
    borderWidth: 1

   
    
    },
    imageMedall: {
      width: "99%",
      height: "99%",
    },
})