import React from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ShoppingScreen from '../Shopping-screens/Screen';
import {icons} from "../../constants/icons"
import tabNavigationStyles from "./Tab-navigation-styles";
import ProfileScreen from "../profile-screen/Profile";
import StarScreen from '../Star-screen/Star';


const BottomTabScreen = () => {

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="shopping"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: tabNavigationStyles.tabBarStyle,
        tabBarIcon: ({ focused }) => {

            if (route.name === "star") {
                if (focused == true) {
                  return (
                    <View style={tabNavigationStyles.eachTabMainView}>
                      <Image
                    resizeMode={'contain'}
                        style={tabNavigationStyles.tabIconStyle}
                        source={icons.star}
                      />
                      <Image
                    resizeMode={'contain'}
                        style={tabNavigationStyles.blueDotImageStyle}
                        source={icons.star}
                      />
                    </View>
                  );
                } else {
                  return (
                    <View style={tabNavigationStyles.eachTabMainView}>
                      <Image
                        resizeMode={"contain"}
                        style={tabNavigationStyles.tabIconStyle}
                        source={icons.star}
                      />
                      <View style={tabNavigationStyles.blueDotImageStyle} />
                    </View>
                  );
                }
              }

         

          if (route.name === "shopping") {
            if (focused == true) {
              return (
                <View style={tabNavigationStyles.eachTabMainView}>
                  <Image
                    resizeMode={"contain"}
                    style={tabNavigationStyles.tabIconStyle}
                    source={icons.shopping}
                  />
                  <Image
                    resizeMode={"contain"}
                    style={tabNavigationStyles.blueDotImageStyle}
                    source={icons.shopping}
                  />
                </View>
              );
            } else {
              return (
                <View style={tabNavigationStyles.eachTabMainView}>
                  <Image
                    resizeMode={"contain"}
                    style={tabNavigationStyles.tabIconStyle}
                    source={icons.shopping}
                  />
                  <View style={tabNavigationStyles.blueDotImageStyle} />
                </View>
              );
            }
          }

          if (route.name === "Profile") {
            if (focused == true) {
              return (
                <View style={tabNavigationStyles.eachTabMainView}>
                  <Image
                    style={[
                      tabNavigationStyles.tabIconStyle,
                      { minHeight: 20, width: 30 },
                    ]}
                    source={icons.profile}
                    resizeMode={"contain"}
                  />
                  <Image
                    resizeMode={"contain"}
                    style={tabNavigationStyles.blueDotImageStyle}
                    source={icons.profile}
                  />
                </View>
              );
            } else {
              return (
                <View style={tabNavigationStyles.eachTabMainView}>
                  <Image
                    style={[
                      tabNavigationStyles.tabIconStyle,
                      { minHeight: 20, width: 30 },
                    ]}
                    source={icons.profile}
                    resizeMode={"contain"}
                  />
                  <View style={tabNavigationStyles.blueDotImageStyle} />
                </View>
              );
            }
          }
        },
      })}
    >
     

     

      <Tab.Screen
        name="star"
        component={StarScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

<Tab.Screen
        name="shopping"
        component={ShoppingScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

<Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          // unmountOnBlur: true,
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabScreen;