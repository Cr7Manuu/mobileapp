/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Text } from 'react-native';
function CustomText(props){
    return(
        <>
        <Text style={{fontSize:20}}>{props.title}</Text>
        </>
    )
}

export default CustomText;
