import React from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from 'react-native';

import styles from './FloatingButton.style';

const FloatingButton = ({onPress, icon}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} >
            {/* <Icon name={icon} color="white" size={30} /> */}
            <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
    );
}

export default FloatingButton;