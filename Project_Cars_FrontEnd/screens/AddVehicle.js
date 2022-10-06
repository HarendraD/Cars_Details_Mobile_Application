import { View, StyleSheet, Image, ScrollView, Alert, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import {  NativeBaseProvider, Button, VStack, Center, Heading, HStack, Input } from "native-base";
import { launchImageLibrary } from 'react-native-image-picker';
import { storeCar } from './StoreCar';

export default function AddVehicle() {


    const [carDetail, setCarDetail] = useState({
        regNumber: '',
        brand: '',
        date: '',
        location: '',
        image: '',
        price: '',
    });

    useEffect(() => {
        setCarDetail(() => {
            return {
                ...carDetail,
                regNumber: storeCar.regNumber,
            };
        });
    }, []);

    const [imageUri, setImageUri] = useState('')
    const openCamera = () => {
        let options = {
            storageOption: {

                path: 'images',
                mediaType: 'photo'
            },
            includeBase64: true,
        }

        launchCamera(options, response => {
            if (response.didCancel) {
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                alert(response.customButton);
            } else {
                const source = { uri: 'data:image/jpeg;base64' + response.base64 };
                setImageUri(source)
            }
        });
    }

    return (
        <NativeBaseProvider>
            <ScrollView>

                <View style={styles.container}>
                    <ImageBackground source={require('../assets/BackGround.png')}
                        style={styles.bgImage}>
                        <VStack space={6} alignItems="center" my="5" mr="5">
                            <Center w="500" h="120">
                                <HStack space={4} alignItems="center" mt="1">
                                    <Heading size="lg" pt="1" alignItems="center">Select Image</Heading>
                                    <Button style={styles.btn} variant="solid" colorScheme="primary"
                                    _text={{
                                        color: "#1F2937", fontSize: 20, pr: 2, pl: 2, alignItems: "center"
                                    }}
                                     onPress={async e => {
                                        const image = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 2 })
                                        let images = image.assets
                                        images.forEach(e => {
                                            let uri = e.uri
                                            console.log(uri)
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    image: uri,
                                                };
                                            });
                                        })

                                    }}>Upload</Button>
                                </HStack>

                            </Center>

                            <Center w="500" h="700">
                                <VStack space={8} alignItems="center" my="2">
                                    <Image source={imageUri} />
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                        value={carDetail.image}
                                        editable={false}
                                        placeholder='Image'
                                    />
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                        onChangeText={e => {
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    regNumber: e,
                                                };
                                            });
                                        }}
                                        value={carDetail.regNumber}
                                        placeholder='Reg Number'
                                    />
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                        onChangeText={e => {
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    brand: e,
                                                };
                                            });
                                        }}
                                        value={carDetail.brand}
                                        placeholder='Brand'
                                    />
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                        onChangeText={e => {
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    location: e,
                                                };
                                            });
                                        }}
                                        value={carDetail.location}
                                        placeholder='location'
                                    />
                                    <Input style={styles.textInput} variant="rounded" mx="3"

                                        onChangeText={e => {
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    price: e,
                                                };
                                            });
                                        }}
                                        value={carDetail.price}
                                        placeholder='Price'
                                    />
                                    <Input style={styles.textInput} variant="rounded" mx="3"
                                    
                                        onChangeText={e => {
                                            setCarDetail(prevState => {
                                                return {
                                                    ...carDetail,
                                                    date: e,
                                                };
                                            });
                                        }}
                                        value={carDetail.date}
                                        placeholder='Date'
                                    />
                                    <HStack space={4} alignItems="center">
                                        <Button style={styles.btn} variant="outline" colorScheme="primary"

                                            _text={{
                                                color: "#1F2937", fontSize: 20, pr: 2, pl: 2, alignItems: "center"
                                            }}
                                            onPress={async e => {

                                                carDetail.regNumber != ''

                                                    ? fetch(
                                                        'http://192.168.8.138:4000/car/save',
                                                        {
                                                            method: 'POST',
                                                            body: JSON.stringify(carDetail),
                                                            headers: {
                                                                'Content-Type': 'application/json;charset=UTF-8',
                                                            },
                                                        },
                                                    )
                                                        .then(res => {
                                                            console.log(res);
                                                            Alert.alert('Car Save Successfully');
                                                        })
                                                        .catch(res => {
                                                            console.log(res);
                                                            Alert.alert('Car Save is Unsuccessful');
                                                        })
                                                    : Alert.alert('Please Fill Relevant Fields');
                                            }}>
                                            Save
                                        </Button>
                                        <Button style={styles.btn} size="lg" variant="solid" colorScheme="secondary"
                                            _text={{
                                                color: "#1F2937", fontSize: 20, pr: 2, pl: 2, alignItems: "center"
                                            }}
                                            onPress={async e => {
                                                carDetail.regNumber != ''
                                                    ? fetch(
                                                        'http://192.168.8.138:4000/car' + carDetail.regNumber,
                                                        {
                                                            method: 'DELETE',
                                                        },
                                                    )
                                                        .then(res => {
                                                            console.log(res);
                                                            Alert.alert('Car Deleted Successfully');
                                                        })
                                                        .catch(res => {
                                                            console.log(res);

                                                            Alert.alert('Car Deleting is Unsuccessful');
                                                        })
                                                    : Alert.alert('Please Fill Relevant Fields');
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </HStack>

                                </VStack>
                            </Center>
                        </VStack>

                    </ImageBackground>



                </View>
            </ScrollView>
        </NativeBaseProvider >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        position: 'relative',
        width: 560,
        height: 1020,
    },
    textInput: {
        textAlign: 'left',
        paddingBottom: 20,
        fontSize: 20,
        backgroundColor: '#e3fefc',
        color:'black'
    },
    btn: {
        textAlign: 'center',
        borderRadius: 40,
        width:200
    },
});