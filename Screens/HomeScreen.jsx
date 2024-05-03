/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Button } from 'react-native';



function HomeScreen(props) {
    console.log(props);
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyles}>This is Home Screen</Text>
            <Button title="Profile"
            onPress={() => props.navigation.navigate("Profile",{
                name:'Manoj',
            })} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    headingStyles: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
    },
});

export default HomeScreen;
