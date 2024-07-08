import {Button} from "native-base";
import React from "react";
import {useFormContext} from "react-hook-form";

type Inputs = {
    example: string
    exampleRequired: string
}

export function Photos() {
    const {handleSubmit} = useFormContext();

    const onSubmit = (data: any): void => {
        console.log(data);
    }

    return (
        <Button onPress={handleSubmit(onSubmit)} mt={6}>
            Submit
        </Button>
    )
}
