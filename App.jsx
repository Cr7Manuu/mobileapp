/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import HomeScreen from './Screens/HomeScreen';
import { Text } from 'react-native-paper';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './Screens/ProfileScreen';
import UserScreen from './Screens/UserScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerContent from './DrawerContent';

const StackNav = ()=>{
    const Stack = createNativeStackNavigator();
    const navigation=useNavigation();
    return (
        <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    statusBarColor:'#0163d2',
                    headerStyle:{
                        backgroundColor:'#0163d2',
                    },
                    headerTintColor:'#fff',
                    headerTitleAlign:'center',
                    headerLeft:  () => {
                        return (
                            <Icon
                            name="menu"
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                            size={30}
                            color="#fff"
                            />
                        );
                    },
                }}>
                <Stack.Screen  name="Home" component={HomeScreen} options={{}} />
                <Stack.Screen  name="Profile" component={ProfileScreen}/>
                <Stack.Screen  name="User" component={UserScreen} options={{
                    headerShown:true,
                    headerBackVisible:false,
                }}/>
        </Stack.Navigator>
    );
};

const DrawerNav = ()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props}/>}
        screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={StackNav}/>
        </Drawer.Navigator>
    );
};



function App(){
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default App;
