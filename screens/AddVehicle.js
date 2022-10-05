import { View, SafeAreaView, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, VStack, Image, Button, Input, Heading, Divider, Center } from 'native-base'
import {useNavigation} from '@react-navigation/native';



export default function AddVehicle() {
    const [selectedImage, setSelectedImage] = useState();
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={StyleSheet.Container}>
                        <ImageBackground source={require('../assets/BackGround.png')}
                            style={styles.bgImage}>

                            <VStack space={6} alignItems="center" mr="5">

                                <Heading size="2xl" mt="4">Add Vehicle</Heading>
                                <Divider my="1" h="1" w="90%" />
                                <Center w="90%" h="200" rounded="md">
                                    <Input style={styles.textInput} variant="underlined" my="4" placeholder="Vehicle Name" w="80%" />
                                    <Input style={styles.textInput} variant="underlined" my="4" placeholder="Price" w="80%" />
                                </Center>
                                <Center w="90%" h="64%" bg="indigo.300" rounded="md" shadow={3}>
                                    <Image style={{ width: 200, height: 200, borderRadius: 25 }} source={selectedImage} />

                                    <Button size="md" w="80%" variant="subtle" colorScheme="green">
                                        upload
                                    </Button>
                                </Center>
                                <Button style={styles.btn} 
                                    onPress={e => {
                                        storeCar.regNo = item.regNo;
                                        navigation.navigate('Vehicle');
                                      }}
                                    size="lg" variant="solid" _text={{
                                        color: "#1F2937", fontSize: 30, pr: 20, pl: 20
                                    }}>
                                        Back
                                    </Button>
                            </VStack>
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
        alignItems: 'center',
    },
    bgImage: {
        position: 'relative',
        width: 560,
        height: 1020,
    },
    addData: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: '#fffe'
    },
    textInput: {
        textAlign: 'left',
        fontSize: 20,
        alignItems: 'center',
        color: 'white',
        borderRadius: 20
    },
})