import React, {useContext, useState} from 'react';

import {
    Alert,
    SafeAreaView,
    ScrollView,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
  } from 'react-native';

import AppContext from '../components/AppContext';
import '../components/global.js'

const Profile = () => {

    const myContext = useContext(AppContext);
    const [login1, setLogin1] = useState("Login");
    const [password1, setPassword1] = useState("Password");

    const doLogin = async () => {
        if(login1 == "Login" || password1 == "Password"){
            Alert.alert(global.ip);
        }else{
            await fetch("http://" + global.ip + "/bckend/login?login=" + login1 + "&password=" + password1)
            .then(function(response) {
                console.log(response.status)
                if (response.status == 404) {
                    Alert.alert("zle meno alebo heslo")
                }else if(response.status == 200){
                    Alert.alert("Prihlaseny")
                }else{
                    throw Error(response.status);
                }
                return response;
            }).catch(error => {Alert.alert("chyba serverom skuste znovu"); console.log(error)})
            .then(response => response.json())
            
        }
        



    }

    return(
        <SafeAreaView style={styles.sectionContainer}>
            {myContext.thisLogin == 0 ? 
                <ScrollView>
                    <Text>Profile</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Type here to translate!"
                        onChangeText={newText => setLogin1(newText)}
                        defaultValue={login1}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Type here to translate!"
                        onChangeText={newText => setPassword1(newText)}
                        defaultValue={password1}
                    />
                    <Pressable style={styles.inputButton} android_ripple={{color:'grey'}} onPress={() => doLogin()}>
                        <Text>
                            Login
                        </Text>
                    </Pressable>
                </ScrollView>
                : 
                <Text>notProfile</Text>
                }
            
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

export default Profile