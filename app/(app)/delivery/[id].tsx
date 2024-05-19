import {styles} from './styles';
import {ThemedView} from "@/components/ThemedView";
import React from "react";
import {Actionsheet, Box, Button, Center, useDisclose, Text} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import {useLocalSearchParams} from "expo-router";

export default function DeliveryScreen() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose(true);

    const {id} = useLocalSearchParams();


    return (
        <SafeAreaView>
            <ThemedView style={styles.container}>
                <Center>
                    <Actionsheet
                        isOpen={isOpen}
                        onClose={onClose}
                        disableOverlay
                    >
                        <Actionsheet.Content>
                            <Actionsheet.Item>Delete</Actionsheet.Item>
                            <Actionsheet.Item>Share</Actionsheet.Item>
                            <Actionsheet.Item>Play</Actionsheet.Item>
                            <Actionsheet.Item>Favourite</Actionsheet.Item>
                            <Actionsheet.Item>Cancel</Actionsheet.Item>
                        </Actionsheet.Content>
                    </Actionsheet>
                </Center>
            </ThemedView>
        </SafeAreaView>
    );
}


