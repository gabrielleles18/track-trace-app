import {styles} from './styles';
import {ThemedView} from "@/components/ThemedView";
import React from "react";
import {Actionsheet, Box, Button, Center, useDisclose, Text} from "native-base";


export default function DeliveryScreen() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <ThemedView style={styles.container}>
            <Center>
                <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores at autem debitis delectus
                        dicta eius est eum, exercitationem facere facilis ipsam maxime molestias quae similique sint,
                        soluta unde ut, vero!
                    </Actionsheet.Content>
                </Actionsheet>
            </Center>
        </ThemedView>
    );
}


