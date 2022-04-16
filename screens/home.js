import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Pressable,
    Text,
    View,
    KeyboardAvoidingView,
  } from 'react-native';

import Task from '../components/task.js'
import '../components/global.js'



const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [reload, setReload] = useState(false);
    const [taskItems, setTaskItems] = useState([]);
    let page = {};

    const getTasks = async url => {
        await fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).catch(error => {setReload(true); console.log(error)})
        .then(response => response.json())   
        .then(data => {
            console.log(data);
            setTaskItems([...taskItems, data]);
            setReload(false);
            setIsLoaded(true);
        })
    }
    
    const postTask = async url => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userid: 1,
                targetid: 2,
                name: "Odpadky",
                objective: "Chod vyhodit smeti!",
                completion: 0
            })
        };
        await fetch(url, requestOptions)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        }).catch(error => {setReload(true); console.log(error)})
        .then(response => response.json())   
        .then(data => {
            console.log(data);
            setTaskItems([...taskItems, data]);
            //setReload(false);
            setIsLoaded(true);
        })
    }

    useEffect(() => {
        if(!isLoaded){
            getTasks('http://' + global.ip + '/bckend/tasks/view');
        }
      }, []);

    return (
      <SafeAreaView style={styles.sectionContainer}>
        <ScrollView>
          {
            isLoaded 
              ? taskItems.map((item, index) => {
                  return (
                    <View key={index}>
                      <Task userID={item.userid} targetID={item.targetid} name={item.name} objective={item.objective} completion={item.completion}/>
                    </View>
                  )
                }) 
              : <Text>Loading...</Text>
          }
          { 
            reload 
              ? <Pressable 
                  style={styles.inputButton} 
                  android_ripple={{color:'grey'}} 
                  onPress={() => getTasks('http://' + global.ip + '/bckend/tasks/view')}
                >
                  <Text> Reload </Text>
                </Pressable> 
              : <Text></Text>
          }
        </ScrollView>
        <View style={styles.addTaskView}>
          <Pressable
            style={styles.addTaskButton} 
            android_ripple={{color:'grey', borderless: true}} 
            onPress={() => postTask('http://' + global.ip + '/bckend/tasks/create')}
          >
            <Text style={styles.plusText}>+</Text>
          </Pressable>
        </View>
        
        {/* 
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.addTask}
        ></KeyboardAvoidingView>*/}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    inputButton: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#1c1c1c'
      },
    sectionContainer: {
        flex: 1,
        paddingVertical: 24,   
        paddingHorizontal: 24,
        backgroundColor: 'darkgrey',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    addTaskView: {
        overflow: 'hidden',
        borderRadius: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
    },
    addTaskButton: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        padding: 10,
    },
    plusText: {
        fontSize: 25,
    },
});

export default Home