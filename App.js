import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Setting from "./pages/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from "./pages/page-setting/Profile";
import Contact from "./pages/page-setting/Contact";
import PictureCategory from "./pages/page-home/Picture-Category";

const HomesStack = createNativeStackNavigator();

function HomesStackScreen() {
  return (
    <HomesStack.Navigator>
      <HomesStack.Screen name="Homes" component={Home} options={{headerShown: false,}}/>
      <HomesStack.Screen name="PictureCategory" component={PictureCategory}/>
    </HomesStack.Navigator>
  );
}
const ProductsStack = createNativeStackNavigator();

function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen name="Products" component={Product} options={{headerShown: false,}}/>
    </ProductsStack.Navigator>
  );
}
const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Setting} options={{headerShown: false,}}/>
      <SettingsStack.Screen name="Profile" component={Profile} />
      <SettingsStack.Screen name="Contact" component={Contact} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StatusBar
          backgroundColor="#fff"
          style="auto"
        />
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: { position: 'absolute' },
            tabBarActiveTintColor: "#5bb03c",            
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomesStackScreen}
            options={{
              tabBarLabel: "Home",
              headerShown: false,

              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Product"
            component={ProductsStackScreen}
            options={{
              tabBarLabel: "Product",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shopping" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingsStackScreen}
            options={{
              tabBarLabel: "Setting",
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
