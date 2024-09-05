import { InputField } from '@gluestack-ui/themed';
import { HStack, Input } from '@gluestack-ui/themed';
import React, { useRef, useState } from 'react';

import { TextInput } from 'react-native';

type OTPInputProps = {
    length: number;
    disabled?: boolean;
    onChange(value: any): void;
};



export default function OtpInput({
    length,
    disabled,
    onChange,
}: OTPInputProps): JSX.Element {
    const inputRefs = useRef<Array<TextInput | null>>([]);
    const [inputValues, setInputValues] = useState<string[]>(
        Array(length).fill(''),
    );

    const handleChange = (text: string, index: number) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = text;
        setInputValues(newInputValues);
        onChange(newInputValues.join(''));
        if (text.length !== 0 && index < length - 1) {
            // Focus the next input if there is text and it's not the last input
            inputRefs.current[index + 1]?.focus();
        } else if (text.length === 0 && index > 0) {
            // Focus the previous input on backspace if it's not the first input
            inputRefs.current[index - 1]?.focus();
        }
    };
    return (
        <>
            <HStack w={'100%'} justifyContent={'space-between'} my={20}>
                {[...new Array(length)].map((item, index) => (
                    <Input key={index}>
                        <InputField
                            bg={'$blue100'}
                            ref={ref => {
                                if (ref && !inputRefs.current.includes(ref)) {
                                    inputRefs.current.push(ref);
                                }
                            }}

                            testID={`OTPInput-${index}`}
                            keyboardType="decimal-pad"
                            maxLength={1}
                            value={inputValues[index]}
                            editable={!disabled}
                            textAlign={'center'}
                            onChangeText={text => handleChange(text, index)}
                            contextMenuHidden
                            selectTextOnFocus
                        />
                    </Input>
                ))}
            </HStack>
        </>
    );
}
