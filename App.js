import React from "react";
import Chats from "./screen/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screen/Settings";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "./config/constans";
import SignUp from "./screen/SignUp";
import Cha from "./screen/Cha";
import Dialogist from "./components/Dialog";
const ChatsStack = createStackNavigator();
const MainStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats} />
      <ChatsStack.Screen name="Cha" component={Cha} />
    </ChatsStack.Navigator>
  );
};
const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};
const Tabs = createBottomTabNavigator();
const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Chats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}
    >
      <Tabs.Screen name="Chats" component={ChatsScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{ headerMode: "none", mode: "modal" }}
      >
        <MainStack.Screen name="Tabs" component={TabsScreen} />
        <MainStack.Screen name="SignUp" component={SignUp} />
        {/* <MainStack.Screen name="Dialog" component={Dialogist} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;
