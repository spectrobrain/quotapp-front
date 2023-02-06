import React from "react";
import { View, StyleSheet  } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  
 
});
 const StyledItem = ({ children, style,...restOfProps }) => {
  const cardStyles = [
    styles.container,
    // card && styles.card,
    style
];
  return <View style={cardStyles}>
    {children}
  </View>;
};

export default StyledItem;