import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import Task from '../components/task.js'



const Home = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [pageJson, setPageJson] = useState({});
    let page = {};

    const getTasks = async url => {
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPageJson(data);
            setIsLoaded(true);
        })
    }


    useEffect(() => {
        if(!isLoaded){
            getTasks('http://192.168.0.171:8000/bckend/tasks/view');
        }
        console.log("asdasd");
      }, []);

    return(
        <SafeAreaView style={styles.sectionContainer}>
            <ScrollView>
                {isLoaded ? pageJson.items.map(item => <Task name={item.name} objective={item.objective} completion={item.completion}/>)  : <Text>Loading...</Text>}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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