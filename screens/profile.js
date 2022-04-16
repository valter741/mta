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
    Image,
  } from 'react-native';

import AppContext from '../components/AppContext';
import '../components/global.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {

    const myContext = useContext(AppContext);
    const [login1, setLogin1] = useState("janci");
    const [password1, setPassword1] = useState("asd123");
    const [login2, setLogin2] = useState("Login");
    const [password2, setPassword2] = useState("Password");
    const [fullname, setFullname] = useState("Cele Meno");
    const [pageJson, setPageJson] = useState({});

    const doLogin = async () => {
        if(login1 == "Login" || password1 == "Password"){
            Alert.alert(global.ip);
        }else{
            await fetch("http://" + global.ip + "/bckend/login/?login=" + login1 + "&password=" + password1)
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
            .then(data => {
                console.log(data);
                setPageJson(data)
                myContext.setLogin(data.user.id)
                myContext.setToken(data.token)
            })
            
        }
        



    }

    return(
        <SafeAreaView style={styles.sectionContainer}>
            {myContext.thisLogin == 0 ? 
                <ScrollView>
                    <View style={{height: 75}}></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={newText => setLogin1(newText)}
                        defaultValue={login1}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={newText => setPassword1(newText)}
                        defaultValue={password1}
                    />
                    <Pressable style={styles.inputButton} android_ripple={{color:'grey'}} onPress={() => doLogin()}>
                        <Text>
                            Login
                        </Text>
                    </Pressable>
                    <View style={{height: 75}}></View>
                    <TextInput
                        style={styles.input}
                        onChangeText={newText => setLogin2(newText)}
                        defaultValue={login2}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={newText => setPassword2(newText)}
                        defaultValue={password2}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={newText => setFullname(newText)}
                        defaultValue={fullname}
                    />
                    <Pressable style={styles.inputButton} android_ripple={{color:'grey'}} onPress={() => doLogin()}>
                        <Text>
                            Register
                        </Text>
                    </Pressable>
                </ScrollView>
                : 
                <ScrollView >
                    <View style={{flex:1, alignItems: 'center', flexDirection: 'column'}}>
                        <Image
                            style={{height:150, width: 150}}
                            source={{
                            uri: 'http://192.168.137.159:8000/bckend/pictures/Captureeeeeeeeeeeeeeeeeeeeeeeeeee_eHpezhV.png',
                            }}
                        />
                        <Text style={styles.sectionDescription}>ID: {pageJson.user.id}</Text>
                        <Text style={styles.sectionDescription}>Login: {pageJson.user.login}</Text>
                        <Text style={styles.sectionDescription}>Meno: {pageJson.user.full_name}</Text>                 
                    </View>
                    <View style={{marginTop: 50}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => setLogin2(newText)}
                            defaultValue={login2}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={newText => setPassword2(newText)}
                            defaultValue={password2}
                        />
                    </View>
                </ScrollView>
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
        backgroundColor: '#1c1c1c',
      },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 24,   
        paddingHorizontal: 24,
        flexDirection: 'row',
        backgroundColor: 'darkgrey',
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        paddingVertical: 12,   
        marginTop: 8,
        fontSize: 24,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default Profile