import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  Text,
  StyleSheet,
} from 'react-native';

const CustomCard = props => {
  return (
    <View style={{padding: 10}}>
      <TouchableOpacity
        onPress={() => alert("Under Development")}
        style={styles.container}>
        <View style={styles.textcontainer}>
            <View style={styles.textItem}>
                <Text style={styles.itemStart}>{props?.itemStart} </Text>
                <Text style={styles.rateText}>{props?.rate} </Text>
                <Text style={styles.expiryText}>{props?.expiry} </Text>
            </View>
            <View style={styles.imageContainer}>
            <Image
                style={styles.productImgStyle}
              source={ props?.productImage}
              />
                </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomCard;
 const styles=StyleSheet.create({
  container: {
    borderRadius: Platform.OS == 'ios' ? 8 : 10,
shadowColor: Platform.OS == "ios" ? "#0000004D" : "4C4C4C",
shadowOffset: Platform.OS == "ios" ? { width: 4, height: 2 } : { width: 10, height: 10 },
shadowOpacity: 0.6,
shadowRadius: 10,
elevation: 8,
backgroundColor: "white",
padding: 15,
height:150,
width:330,
marginHorizontal:15,
marginTop:10},

textcontainer:{flexDirection:"row", flexWrap:"wrap"},
textItem:{flex:1, flexDirection:"column"},
imageContainer:{flex:1, alignSelf:"flex-end",alignItems:"flex-end" },
expiryText:{marginTop:50, fontSize:15, color:"gray"},
rateText:{marginTop:10, fontSize:19},
itemStart:{fontSize:18, width:180},
productImgStyle:{
  height: 90, width: 90, borderRadius: 15,
}
 })

