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


const Task = (props) => {
  /*
  handleCompletionColor() {
    if (props.completion == 0) {
      return (
        <View style={styles.completion0}>
          <Text>{props.completion}</Text>
        </View>
      );  
    } 
    if (props.completion == 50) {
      return (
        <View style={styles.completion50}>
          <Text>{props.completion}</Text>
        </View>
      );  
    }
    if (props.completion == 100) {
      return (
        <View style={styles.completion100}>
          <Text>{props.completion}</Text>
        </View>
      );  
    }
  }*/
  return (
    <View style={styles.item}>
      <View style={props.completion == 0 ? styles.completion0 : 
                    props.completion == 50 ? styles.completion50 : styles.completion100}></View>
      <View styles={styles.info}> 
        <View>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <View>
          <Text>Od: {props.userID}</Text>
        </View>
        <View>
          <Text>Pre: {props.targetID}</Text>
        </View>
        <View>
          <Text>{props.objective}</Text>
        </View>
        <View>
          <Text>{props.completion}</Text>
        </View>
      </View>
    </View>
    /*<Pressable style={styles.section1}>

    </Pressable>*/
    )
}

const styles = StyleSheet.create({
    section1: {
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
    item: {
      backgroundColor: '#FFFFFF',
      //padding: 2,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      //justifyContent: 'space-between',
      marginBottom: 20,
    },
    info: {
      padding: 15,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
    },
    target: {

    },
    objective: {

    },
    completion0: {
      width: 25,
      height: '100%',
      backgroundColor: '#FF0000',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 15,
    },
    completion50: {
      width: 25,
      height: '100%',
      backgroundColor: '#FFAA00',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 15,
    },
    completion100: {
      width: 25,
      height: '100%',
      backgroundColor: '#00FF00',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 15,
    },
  });

export default Task