/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';


function UserScreen(){
    return(
        <View style={styles.viewStyle}>
            <Text  style={styles.headingStyles}>This is User Screen</Text>
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

export default UserScreen;
