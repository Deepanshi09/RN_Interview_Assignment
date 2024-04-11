import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {icons} from "../../constants/icons"
import CustomCard from '../../constants/CustomCard';
import { hpx,wpx,nf } from "../../constants/ratio";

const ShoppingScreen = () => {
  const [input, setInput] = useState("");

  const data = [
    {id: '1', name: 'Sofa', imageUrl: icons.sofa},
    { id: '2', name: 'Bed', imageUrl: icons.bed },
    { id: '3', name: 'Table', imageUrl: icons.table },
    { id: '4', name: 'Cabinet', imageUrl: icons.cabinet },
    { id: '5', name: 'Chair', imageUrl: icons.chair },
  ];

  const  CardData = [
    {id: '1', heading: 'Sofa starting from', rate: "$ 33", expiry:"Ends in 02.10.00", imageUrl: icons.sofa},
    { id: '2', heading: 'Beds starting from', rate: "$ 23", expiry:"Ends in 01.10.00", imageUrl: icons.bed },
    { id: '3', heading: 'Tables starting from', rate: "$ 43",expiry:"Ends in 03.10.00", imageUrl: icons.table },
    { id: '4', heading: 'Cabinets starting from', rate: "$ 44", expiry:"Ends in 04.10.00", imageUrl: icons.cabinet },
    { id: '5', heading: 'Chairs starting from', rate: "$ 20", expiry:"Ends in 09.10.00",imageUrl: icons.chair },
  ];
 

  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.shopmenu}>
        <Image
          source={item.imageUrl}
          style={styles.imageStyle}
        />
      <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
  
  );
 
  
  const  renderItemsss = ({ item }) => (
    <View>
      <CustomCard
      itemStart={item.heading}
      rate={item.rate}
      expiry={item.expiry}
      productImage={item?.imageUrl}
      
      />
    </View>

  );
 
  return (
    <View>
      <View style={{marginVertical: 50}}>
        <View style={styles.squreStyle}>
        <TouchableOpacity onPress={()=>alert("Hamburger options are under development")}>
        <Image
          source={icons.humbergerMenu}
          style={[styles.profileImageStyle, { tintColor: 'white' }]}
        />
        </TouchableOpacity>
        <Text style={styles.title}>Furniture that fits your style</Text></View>
        <View style={styles.arcStyle} />
      </View>

      <View style={styles.searchbarContainer}>
     
      <Image
          source={icons.SearchIcon}
          style={styles.searchIconsty}
        />
        <TextInput
        placeholder="Search Furniture"
        value={input}
                            onChangeText={setInput}
                        style={styles.searchText}
                        placeholderTextColor={'#837263'}
        />
      </View>

      <View style={styles.Shopfor}>
      <Text style={{fontWeight:"500", fontSize:nf(18)}}>Shop for</Text>
      <TouchableOpacity onPress={()=>alert("Under Development")}>
      <Text style={{color:"blue"}}>See All</Text>
      </TouchableOpacity>
    
    </View>

   <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
     
    />


<View style={styles.Shopfor}>
      <Text style={{fontWeight:"500", fontSize:nf(18)}}>Today's Deals</Text>
      <TouchableOpacity onPress={()=>alert("Under Development")}>
      <Text style={{color:"blue"}}>See All</Text>
      </TouchableOpacity>
    </View>

     <FlatList
                              showsHorizontalScrollIndicator={false}
                              horizontal={true}
                              data={CardData}
                              renderItem={renderItemsss}
                              
                            />
    </View>
      );

};

const styles = StyleSheet.create({
  squreStyle: {
    width: "100%",
    height: hpx(250),
    borderRadius: 12,
    backgroundColor: "#ffbf00",
    zIndex: 1,
    justifyContent:"center"
  },
  Shopfor:{justifyContent:"space-between", flexDirection:"row",  marginHorizontal:30, marginTop:30},
title:{color:"white", fontSize:nf(30), width:280, marginTop:80, marginLeft:30},
  arcStyle: {
    width: "20%",
    height: hpx(70),
    position: "absolute",
    bottom: -25,
    left: "40%",
    borderRadius: 35,
    backgroundColor: "#ffbf00",
    transform: [{ scaleX: 5 }, { scaleY: 1 }],
  },
  profileImageStyle: { height: hpx(30), width: wpx(30), resizeMode:"contain",  marginLeft:30 },
  
   
    searchbarContainer: {
      borderRadius: Platform.OS == "ios" ? 8 : 10,
          shadowColor: Platform.OS == "ios" ? "#0000004D" : "4C4C4C",
          shadowOffset: Platform.OS == "ios" ? { width: wpx(4), height: hpx(2) } : { width: wpx(10), height: 10 },
          shadowOpacity: 0.6,
          shadowRadius: 10,
          elevation: 8,
          backgroundColor: "white",
      position:"absolute",
     top:290,
        flexDirection: 'row',
        paddingHorizontal: 24,
        height: 50,
        width: '80%',
       
        backgroundColor: 'white',
        alignSelf: 'center',
      
       
      },
      searchbarFilterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center',
        borderWidth: 0,
        marginBottom: 24,
      },
      shopmenu:{flexDirection:"column", marginHorizontal:8,justifyContent:"space-between", padding:14},
   imageStyle:{height: 50, width: wpx(50), resizeMode: 'contain'},
   name:{marginTop:20, color:"gray"},
   searchIconsty:{height:20, width:wpx(20), resizeMode:"contain", alignSelf:"center"},
   searchText:{ width: '90%', paddingLeft: 15, fontSize: nf(14), color: '#837263', marginBottom: -5, borderWidth: 0 }
  });

export default ShoppingScreen;