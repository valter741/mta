import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dialog from 'react-native-dialog';
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

  const [visibleEditTaskDialog, setVisibleEditTaskDialog] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState();

  const showEditTaskDialog = () => {setVisibleEditTaskDialog(true);};
  const cancelEditTaskDialog = () => {setVisibleEditTaskDialog(false);};

  return (

    <View style={styles.item}>
      <Dialog.Container visible={visibleEditTaskDialog}>
          <Dialog.Title>Úprava úlohy</Dialog.Title>
          <Dialog.Input placeholder={'Notification Message'} value={notificationMessage} onChangeText={text => setNotificationMessage(text)}></Dialog.Input>
          
          <Dialog.Button label="Zrušiť" onPress={cancelEditTaskDialog} />
          <Dialog.Button label="Uložiť" onPress={cancelEditTaskDialog} />
      </Dialog.Container>
      <View style={props.completion == 0 ? styles.completion0 : 
                    props.completion == 50 ? styles.completion50 : styles.completion100}></View>
      <View style={styles.taskInfo}>
        <View style={styles.taskHeader}>
          <Text style={styles.title}>{props.name}</Text>
          <View style={styles.fromTo}>
            <Text style={{fontSize: 10}}>Od: {props.userID}</Text>
            <Text style={{fontSize: 10}}>Pre: {props.targetID}</Text>
          </View>
        </View> 
        <View style={styles.objective}><Text>{props.objective}</Text></View>
        <View style={styles.editView}>
          <Pressable
            style={styles.editButton}
            onPress={showEditTaskDialog}
          >
            {/*<Text style={{fontSize: 25, fontWeight: '500'}}>{'>'}</Text>*/}
            <MaterialCommunityIcons name="square-edit-outline" color={'darkgrey'} size={20}/>
          </Pressable>
        </View>
        {/*<Text>{props.completion}</Text>*/}
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
      //alignItems: 'center',
      justifyContent: 'flex-start',
      marginBottom: 15,
      elevation: 3,
    },
    taskInfo: {
      padding: 5,
      flexDirection: 'column',
      alignItems: 'flex-start',
      //justifyContent: 'space-between',
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
    },
    taskHeader: {
      //width: 'auto',
      flexDirection: 'row',
      //flexWrap: 'wrap',
      alignItems: 'stretch',
      //justifyContent: 'space-between',
      //backgroundColor: 'red',
      //paddingRight: 20,
    },
    fromTo: {
      //width: '100%',
      position: 'absolute',
      left: 225,
      flexWrap: 'nowrap',
      //justifyContent: 'center',
      //paddingLeft: 30,
      alignItems: 'flex-start',
    },
    objective: {
      //backgroundColor: 'red',
      flexWrap: 'nowrap',
      width: 'auto',
      alignItems:'stretch',
    },
    editView: {
      //backgroundColor: 'red',
      position: 'relative',
      //top: 0,
      left: 275,
      //flexDirection: 'row',
      //justifyContent: 'flex-end',
      //width: 'auto',
    },
    editButton: {
      
    },
    completion0: {
      width: 25,
      height: '100%',
      backgroundColor: '#FF0000',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 10,
    },
    completion50: {
      width: 25,
      height: '100%',
      backgroundColor: '#FFAA00',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 10,
    },
    completion100: {
      width: 25,
      height: '100%',
      backgroundColor: '#00FF00',
      opacity: 0.5,
      borderRadius: 10,
      marginRight: 10,
    },
  });

export default Task