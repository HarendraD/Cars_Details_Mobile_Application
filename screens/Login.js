import React from 'react'
import { NativeBaseProvider, Input, Divider,Text,Link, VStack, Button, Heading, Center, Image } from 'native-base'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    View,
    ScrollView,
} from 'react-native';

export default function Login() {

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
                                    <Input style={styles.textInput} variant="rounded" mx="3" placeholder="UserName or Email" w="80%" />
                                    <Input style={styles.textInput} variant="rounded" type={"password"} mx="3" placeholder="Password" w="80%" />
                                    <Button style={styles.btn} size="lg" variant="solid" _text={{
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
                                        <Link href="#" isExternal _text={{
                                            color: "#33caff", fontSize:'25',mr:5
                                        }}>
                                            Register
                                        </Link>
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