import React from 'react'
import { NativeBaseProvider, HStack, Box, Select, CheckIcon, VStack, Heading, Center,} from 'native-base'
import {
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    View,
    ScrollView,
} from 'react-native';
import ViewDetails from '../components/ViewDetails';
import {useNavigation} from '@react-navigation/native';

export default function Vehicle() {
    const [service, setService] = React.useState("");
    const navigation = useNavigation();

    return (
        <NativeBaseProvider>
            <SafeAreaView>
                <ScrollView>
                    <View style={StyleSheet.Container}>
                        <ImageBackground source={require('../assets/BackGround.png')}
                            style={styles.bgImage}>

                            <VStack space={6} alignItems="center" mr="5">
                                <Heading size="2xl" pt="2" alignItems="center">Vehicles</Heading>
                                <Button style={styles.btn} 
                                    onPress={e => {
                                        storeCar.regNo = item.regNo;
                                        navigation.navigate('AddVehicle');
                                      }}
                                    size="lg" variant="solid" _text={{
                                        color: "#1F2937", fontSize: 30, pr: 20, pl: 20
                                    }}>
                                        AddVehicle
                                    </Button>
                                <HStack space={3} justifyContent="center">
                                    <Heading size="xl" pt="2" alignItems="center">Sort By</Heading>
                                    <Box maxW="300">
                                        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Sort By" _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />
                                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                            <Select.Item label="DATE" value="DATE" />
                                            <Select.Item label="LOCATION" value="LOCATION" />
                                        </Select>
                                    </Box>
                                </HStack>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>
                                <Center w="500" h="200" bg="indigo.300" rounded="md" shadow={3}>
                                    <VStack space={4} alignItems="center" mt="1">
                                        <Heading size="xl" pt="2" alignItems="center">Vehicle 1</Heading>
                                        <ViewDetails/>
                                    </VStack>

                                </Center>

                                
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
        height: 200,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    bgImage: {
        position: 'relative',
        width: 560,
        height: '100%',
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