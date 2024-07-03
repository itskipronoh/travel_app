import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const HomeLayout = () => {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
      }}
      initialRouteName="HomeScreen"
    >
      <Drawer.Screen
        name="HomeScreen"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8DE8C7",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="TourScreen"
        options={{
          title: "Tour",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8DE8C7",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
     <Drawer.Screen
        name="BuyTour"
        options={{
          title: "Buy Tour",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8DE8C7",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
       <Drawer.Screen
        name="PurchaseTour"
        options={{
          title: "Purchase Tour",
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#8DE8C7",
          },
          headerTintColor: "#000000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer>
  );
};

export default HomeLayout;