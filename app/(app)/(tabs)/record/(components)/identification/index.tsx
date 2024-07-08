import {Button, Flex, FormControl, Input, WarningOutlineIcon} from "native-base";
import {Controller, useFormContext} from "react-hook-form";
import React from "react";
import * as yup from "yup";
import {MaterialCommunityIcons} from "@expo/vector-icons";

const schema = yup.object().shape({
    firstName: yup.string().required('Campo obrigatório').min(5, 'O campo deve ter pelo menos 5 caracteres'),
});

export function IdentificationScreen() {
    const {control, getValues} = useFormContext();
    const [error, setError] = React.useState<string>('');
    const [fieldsIsValidate, setFieldsIsValidate] = React.useState<boolean>(false);

    function handleValidateFields() {
        setFieldsIsValidate(schema.isValidSync(getValues()));

        try {
            schema.validateSync(getValues(), {abortEarly: true});
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                setError(error?.errors[0] ?? '');

                console.log(error?.errors[0]);
            }
        }
    }

    return (
        <Flex justifyContent={'space-between'} background={'red.200'} height={'100%'}>
            <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => {
                    return (
                        <>
                            <FormControl isInvalid={!fieldsIsValidate} w="100%">
                                <FormControl.Label>First Name</FormControl.Label>
                                <Input
                                    onBlur={onBlur}
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                    placeholder="First Name"
                                />
                                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                    {error}
                                </FormControl.ErrorMessage>
                            </FormControl>
                        </>
                    )
                }}
                name="firstName"
                defaultValue=""
            />
            <Button
                onPress={handleValidateFields}
                width={12}
                h={12}
                borderRadius={100}
                alignSelf={'flex-end'}
            >
                <MaterialCommunityIcons name="arrow-right" size={24} color="white"/>
            </Button>
        </Flex>
    )
}
