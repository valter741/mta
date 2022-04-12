import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Pressable,
  } from 'react-native';


const Task = props => {

    return(
        <Pressable style={styles.section1}>
            <Text>
                {props.name}
            </Text>
            <Text>
                {props.objective}
            </Text>
            <Text>
                {props.completion}
            </Text>
        </Pressable>
    )
}

let styles = StyleSheet.create({
    section1:{
      backgroundColor: '#262626',
      flex: 1,
      flexDirection: 'column',
      paddingVertical: 6,
      paddingHorizontal: 6,
      borderRadius: 4,
      marginTop: 2,
      marginBottom: 2,
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    titles: {
      fontSize: 24,
      fontWeight: '600',
    },
  });

export default Task