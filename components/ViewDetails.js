import React, {useState } from 'react'
import { NativeBaseProvider, Modal, Button,Center,} from 'native-base'
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView,
} from 'react-native';

export default function ViewDetails() {
    const [showModal, setShowModal] = useState(false);

    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View styles={styles.container}>
                    <Center>
                        <Button onPress={() => setShowModal(true)}>ViewDetails</Button>
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="500" maxHeight="700" style={{marginBottom: 15,marginTop: "auto"}}>
                                <Modal.CloseButton />
                                <Modal.Header>Return Policy</Modal.Header>
                                <Modal.Body>
                                    <ScrollView>
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                    Create a 'Return Request' under “My Orders” section of App/Website.
                                    Follow the screens that come up after tapping on the 'Return’
                                    button. Please make a note of the Return ID that we generate at the
                                    end of the process. Keep the item ready for pick up or ship it to us
                                    basis on the return mode.
                                    </ScrollView>
                                    
                                </Modal.Body>

                            </Modal.Content>
                        </Modal>
                    </Center>
                </View>
            </SafeAreaView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnView: {
        fontSize: 20,
        justifyContent: 'center',
        fontSize: 18
    }
})