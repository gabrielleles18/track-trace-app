import {ThemedView} from '@/components/ThemedView';
import {styles} from './styles';
import React from "react";
import {MaterialIcons} from "@expo/vector-icons";
import {Flex, Text} from "native-base";
import {TouchableOpacity} from "react-native";
import {FormProvider, useForm} from "react-hook-form";
import {IdentificationScreen} from "@/app/(app)/(tabs)/record/(components)/identification";
import {Photos} from "@/app/(app)/(tabs)/record/(components)/photos";
import {Expectations} from "@/app/(app)/(tabs)/record/(components)/expectations";
import {Characteristics} from "@/app/(app)/(tabs)/record/(components)/characteristics";

export default function RecordScreen() {
    const [openDropdown, setOpenDropdown] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(1);

    const useFormMethods = useForm();

    return (
        <ThemedView style={styles.container}>
            <Flex bg={'blue.50'} p={15}>
                <Flex flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text>Cadastro de Laudo</Text>

                    <TouchableOpacity onPress={() => setOpenDropdown(!openDropdown)}>
                        <Flex flexDirection={'row'}>
                            <Text>
                                {activeStep}/5
                            </Text>
                            <MaterialIcons
                                name={openDropdown ? `keyboard-arrow-up` : `keyboard-arrow-down`}
                                size={24}
                                color="black"
                            />
                        </Flex>
                    </TouchableOpacity>
                </Flex>
                {openDropdown && (
                    <Flex paddingTop={5}>
                        <TouchableOpacity onPress={() => setActiveStep(1)}>
                            <Text py={1}>Item um</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveStep(2)}>
                            <Text py={1}>Item dois</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveStep(3)}>
                            <Text py={1}>Item tres</Text>
                        </TouchableOpacity>
                    </Flex>
                )}
            </Flex>
            <Flex p={4}>
                <FormProvider{...useFormMethods}>
                    {activeStep === 1 && (
                        <IdentificationScreen/>
                    )}

                    {activeStep === 2 && (
                        <Characteristics/>
                    )}

                    {activeStep === 3 && (
                        <Expectations/>
                    )}

                    {activeStep === 4 && (
                        <Photos/>
                    )}
                </FormProvider>
            </Flex>
        </ThemedView>
    );
}


