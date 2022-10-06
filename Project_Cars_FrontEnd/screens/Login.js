import React, { useState } from 'react'
import { NativeBaseProvider, Input, Divider, Text, VStack, Button, Heading, Center, Image } from 'native-base'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    View,
    ScrollView,
    Alert
} from 'react-native';


export default function Login({ navigation }) {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });


    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={StyleSheet.Container}>
                        <ImageBackground source={require('../assets/BackGround.png')}
                            style={styles.bgImage}>
                            <View>
                                <Center>
                                    <Image style={{ marginTop: 50, }} size={150} borderRadius={100} source={require('../assets/Logo.png')} alt="Alternate" />
                                </Center>
                                <Heading style={{ textAlign: 'center', paddingTop: 100, fontSize: 40, }}>
                                    Welcome !
                                </Heading>
                                <VStack space={9} alignItems="center" mt="20%">
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                        onChangeText={e => {
                                            setLoginData(prevState => {
                                                return {
                                                    ...loginData,
                                                    email: e,
                                                };
                                            });
                                        }}
                                        value={loginData.email}
                                        placeholder="UserName or Email" w="80%" />
                                    <Input style={styles.textInput} variant="rounded" type={"password"} mx="3"
                                        onChangeText={e => {
                                            setLoginData(prevState => {
                                                return {
                                                    ...loginData,
                                                    password: e,
                                                };
                                            });
                                        }}
                                        value={loginData.password}
                                        placeholder="Password" w="80%" />
                                    <Button style={styles.btn} size="lg" variant="solid"
                                        onPress={async () => {
                                            navigation.navigate('Vehicle');
                                            if ((loginData.email === '') | (loginData.password === '')) {
                                                Alert.alert('User Login is Unsuccessful');

                                            } else {

                                                let res = await fetch(
                                                    'http://192.168.8.138:4000/user/login?email=' +
                                                    loginData.email +
                                                    '&password=' +
                                                    loginData.password,
                                                    {
                                                        method: 'GET',
                                                    },
                                                )
                                                    .then(async res => {
                                                        let bool = await res.json();
                                                        console.log(bool);
                                                        if (bool === true) {
                                                            console.log(bool);
                                                            setLoginObj(prevState => {
                                                                return {
                                                                    email: '',
                                                                    password: '',
                                                                };
                                                            });
                                                            navigation.navigate('Vehicle');
                                                        }
                                                    })
                                                    .catch(async res => {
                                                        Alert.alert('User Login is Unsuccessful');
                                                    });
                                            }
                                        }}
                                        _text={{
                                            color: "#1F2937", fontSize: 30, pr: 20, pl: 20
                                        }}>
                                        Login
                                    </Button>

                                    <Divider m="2" height={1} width={400} _light={{
                                        bg: "muted.800"
                                    }} _dark={{
                                        bg: "muted.50"
                                    }} />

                                    <Text fontSize={25} color={'#ffff'}>
                                        Create New Acount.{" "}
                                        <Button marginTop={1} size="xs" colorScheme="blue" onPress={() => { navigation.navigate("Register") }}>
                                            Register Now
                                        </Button>
                                    </Text>
                                </VStack>

                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>

            </SafeAreaView>

        </NativeBaseProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    bgImage: {
        position: 'relative',
        width: 560,
        height: 1020,
    },
    textInput: {
        textAlign: 'center',
        paddingBottom: 20,
        fontSize: 20,
        backgroundColor: '#e3fefc'
    },
    btn: {
        textAlign: 'center',
        paddingBottom: 20,
        borderRadius: 90,
        backgroundColor: '#ffff',

    },
})