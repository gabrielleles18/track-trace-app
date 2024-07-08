import {FormControl, Input, WarningOutlineIcon} from "native-base";
import {Controller, useFormContext} from "react-hook-form";
import React from "react";

export function Characteristics() {
    const {control, formState: {errors}} = useFormContext();

    return (
        <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => {

                return (
                    <>
                        <FormControl isInvalid={!!errors.lastName} w="100%">
                            <FormControl.Label>Last Name</FormControl.Label>
                            <Input
                                onBlur={onBlur}
                                onChangeText={value => onChange(value)}
                                value={value}
                                placeholder="Last Name"
                            />
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs"/>}>
                                {errors?.lastName?.message}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    </>
                )
            }}
            name="lastName"
            defaultValue=""
        />
    )
}
