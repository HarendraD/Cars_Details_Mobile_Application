import React, { useState } from 'react';
import { NativeBaseProvider, Input, Divider, Text, VStack, Button, Heading, Center, Image } from 'native-base'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    View,
    ScrollView,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const saveData = () => {
        fetch('http://192.168.8.138:4000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => {
                Alert.alert('User Saved Successfully !');
            })
            .catch(err => {
                Alert.alert('User Save Unsuccessfull, Please Try again !');
            });
    };
    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={StyleSheet.Container}>
                        <ImageBackground source={require('../assets/BackGround.png')}
                            style={styles.bgImage}>
                            <View>
                                <Center>
                                    <Image style={{ marginTop: 50, }} size={90} borderRadius={100} source={require('../assets/Logo.png')} alt="Alternate" />
                                </Center>
                                <Heading style={{ textAlign: 'center', paddingTop: 50, fontSize: 40, }}>
                                    Welcome !
                                </Heading>
                                <VStack space={9} alignItems="center" mt="20%">
                                    <Input style={styles.textInput} variant="rounded" type={"email"} mx="3" placeholder="Email"
                                    onChangeText={e => {
                                        setEmail(e);
                                      }}
                                    w="80%" />
                                    <Input style={styles.textInput} variant="rounded" mx="3" placeholder="UserName"
                                    onChangeText={e => {
                                        setName(e);
                                      }}
                                    w="80%" />
                                    <Input style={styles.textInput} variant="rounded" mx="3" placeholder="Contact_NO" 
                                    onChangeText={e => {
                                        setPhoneNumber(e);
                                      }}
                                    w="80%" />
                                    <Input style={styles.textInput} variant="rounded" type={"password"} mx="3" placeholder="Password" 
                                    onChangeText={e => {
                                        setPassword(e);
                                      }}
                                    w="80%" />
                                    <Button style={styles.btn}
                                        onPress={saveData}
                                        size="lg" variant="solid" _text={{
                                            color: "#1F2937", fontSize: 30, pr: 20, pl: 20
                                        }}>
                                        Register
                                    </Button>

                                    <Divider m="2" height={1} width={400} _light={{
                                        bg: "muted.800"
                                    }} _dark={{
                                        bg: "muted.50"
                                    }} />

                                    <Text fontSize={25} color={'#ffff'}>
                                        Already have account ?.{" "}
                                        <Button marginTop={1} size="xs" colorScheme="blue" onPress={() => { navigation.navigate("Login") }}>
                                            Login
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
        textAlign: 'left',
        paddingBottom: 10,
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