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
  } from 'react-native';

import Task from '../components/task.js'



const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [reload, setReload] = useState(false);
    const [pageJson, setPageJson] = useState({});
    let page = {};

    const getTasks = async url => {
        await fetch(url)
        .then(function(response) {
            if (!response.ok) {
                console.log("notok")
                throw Error(response.statusText);
            }
            return response;
        }).then(response => response.json())   
        .then(data => {
            console.log(data);
            setPageJson(data);
            setReload(false);
            setIsLoaded(true);
        }).catch(error => setReload(true))
    }
    
    useEffect(() => {
        if(!isLoaded){
            getTasks('http://192.168.99.26:8000/bckend/tasks/view');
        }
        
        console.log("asdasd");
      }, []);

    return(
        <SafeAreaView style={styles.sectionContainer}>
            <ScrollView>
                {isLoaded ? pageJson.items.map((item) => <Task name={item.name} objective={item.objective} completion={item.completion}/>)  : <Text>Loading...</Text>}
                {reload ? 
                    <Pressable style={styles.inputButton} android_ripple={{color:'grey'}} onPress={() => getTasks('http://192.168.99.246:8000/bckend/tasks/view')}>
                        <Text>
                            Reload
                        </Text>
                    </Pressable> : <Text></Text>}
            </ScrollView>
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
});

export default Home