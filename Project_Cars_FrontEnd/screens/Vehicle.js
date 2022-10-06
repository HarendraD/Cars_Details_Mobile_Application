import React, { useEffect, useState } from 'react'
import { NativeBaseProvider, HStack, Box, Select, CheckIcon, VStack, Heading, Flex, Center, Button, Image } from 'native-base'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList,
    PixelRatio


} from 'react-native';



export default function Vehicle({ navigation }) {
    const [dataList, setDataList] = useState([]);
    const [checkBox, setCheckBox] = React.useState("");
    const loadData = async () => {
        dataList.splice(0, dataList.length);
        let res = await fetch('http://192.168.8.138:4000/car', { method: 'GET' })
            .then(async res => {
                let arr = await res.json();
                console.log(arr);
                setDataList(arr);
            })
            .catch(async res => { });
    };

    useEffect(() => {
        loadData();
    }, [dataList]);

    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <View style={StyleSheet.Container}>
                    <ImageBackground source={require('../assets/BackGround.png')}
                        style={styles.bgImage}>

                        <VStack space={6} alignItems="center" mr="5">
                            <Heading size="2xl" pt="2" alignItems="center">Vehicles</Heading>
                            <Button style={styles.btn}
                                onPress={() => { navigation.navigate("AddVehicle") }}
                                size="lg" variant="solid" _text={{
                                    color: "#1F2937", fontSize: 30, pr: 20, pl: 20
                                }}>
                                AddVehicle
                            </Button>
                            <HStack space={3} justifyContent="center">
                                <Heading size="xl" pt="2" alignItems="center">Sort By</Heading>
                                <Box maxW="300">
                                    <Select selectedValue={checkBox} minWidth="200" accessibilityLabel="Choose Service" placeholder="Sort By" _selectedItem={{
                                        bg: "teal.600",
                                        endIcon: <CheckIcon size="5" />
                                    }} mt={1} onValueChange={itemValue => setCheckBox(itemValue)}>
                                        <Select.Item label="DATE" value="DATE" />
                                        <Select.Item label="LOCATION" value="LOCATION" />
                                    </Select>
                                </Box>
                            </HStack>
                            <View>
                                <View>
                                    <FlatList
                                        data={dataList}
                                        renderItem={({ item }) =>
                                            <TouchableOpacity
                                                style={{
                                                    flex: 1,
                                                    padding: 5,
                                                    marginTop:20,
                                                    width: 450,
                                                    height: 200,
                                                    flexDirection: 'column',
                                                    backgroundColor: '#fffe',
                                                    borderColor: '#0000',
                                                    borderWidth: 4,
                                                    borderRadius: 30
                                                }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    position: 'relative',
                                                    width: '100%',
                                                    height: '100%',
                                                }}>
                                                    <Image
                                                        alt='dddddd'
                                                        width='50%'
                                                        source={{ uri: item.image }}
                                                    ></Image>
                                                    <View>
                                                        <VStack space={4} style={{marginTop:40,marginLeft:20}}>
                                                            <Text style={{ color: 'black', fontSize: 15 }}>Brand :{item.brand}</Text>
                                                            <Text style={{ color: 'black', fontSize: 15 }}>Reg_Number :{item.regNumber}</Text>
                                                            <Text style={{ color: 'black', fontSize: 15 }}>Price :{item.price}</Text>
                                                        </VStack>
                                                    </View>

                                                </View>
                                            </TouchableOpacity>
                                        }
                                    />
                                </View>
                            </View>
                        </VStack>
                    </ImageBackground>
                </View>
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
    image: {
        width: 100,
        height: 100
    }
})