import React, { useMemo, useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack,
    CheckboxGroup,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
    CheckIcon,
    ScrollView,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Icon,
    CloseIcon,
    ButtonText,
    Modal,
    ModalBackdrop

} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';
import AppIcon from '~/components/core/AppIcon';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Btn from '~/components/core/Btn';

type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

const BusinessInfo = () => {


    const ref = React.useRef(null)


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const formInputs: FormInput[] = useMemo(
        () => [
            {
                key: 'Name',
                label: undefined,
                color: '$white',
                placeholder: 'Full Name',
                icon: { FontAwesomeName: 'user-o' },
                rules: {
                    required: 'Owner name is required',
                    pattern: {
                        minLength: 2,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },

            },
            {
                key: 'mobile',
                label: undefined,
                placeholder: 'Enter your mobile number',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },
            {
                key: 'username',
                label: undefined,
                placeholder: 'Enter registration email address',
                icon: { FeatherName: 'mail' },
                rules: {
                    required: 'Email address is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                },
                inputProps: { keyboardType: 'email-address', autoCapitalize: 'none' },
            },
            {
                key: 'mobile',
                label: undefined,
                placeholder: 'Enter your mobile number',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },
        ],
        [],
    );
    const formInputs1: FormInput[] = useMemo(
        () => [
            {
                key: 'StoreName',
                label: undefined,
                color: '$white',
                placeholder: 'Store Name',
                icon: { FontAwesomeName: 'user-o' },
                rules: {
                    required: 'Owner name is required',
                    pattern: {
                        minLength: 2,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },

            },
            {
                key: 'StoreType',
                label: undefined,
                placeholder: 'Store Type',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },
            {
                key: 'Location',
                label: undefined,
                placeholder: 'Choose Location',
                icon: { FeatherName: 'mail' },
                rules: {
                    required: 'Email address is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                },
                inputProps: { keyboardType: 'email-address', autoCapitalize: 'none' },
            },
            {
                key: 'gst',
                label: undefined,
                placeholder: 'Enter your gst number',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },
        ],
        [],
    );
    const formInputs2: FormInput[] = useMemo(
        () => [
            {
                key: 'BankName',
                label: undefined,
                color: '$white',
                placeholder: 'bank Name',
                icon: { FontAwesomeName: 'user-o' },
                rules: {
                    required: 'Owner name is required',
                    pattern: {
                        minLength: 2,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },

            },
            {
                key: 'IFSC',
                label: undefined,
                placeholder: 'Enter IFSC code',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },
            {
                key: 'AccNo',
                label: undefined,
                placeholder: 'Enter account number',
                icon: { IoniconsName: 'call-outline', color: 'gray' },
                rules: {
                    required: 'Mobile number is required',
                    pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Invalid mobile number',
                    },
                },
                inputProps: {
                    keyboardType: 'numeric',
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },
            },


        ],
        [],
    );


    return (
        <>

            <ScrollView>
                <Box m={'$2'} backgroundColor='$coolGray100'>
                    <VStack justifyContent='space-between'>

                        <HStack justifyContent={'space-between'} alignItems={'center'} m={'$1'}>
                            <Heading fontSize={'$xl'}  >
                                Update Profile
                            </Heading>

                        </HStack>


                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space='xs' justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading fontSize={'$lg'} bold>Personal Details</Heading>
                                    <AppIcon OcticonsName='note' size={22} />

                                </HStack>
                                <Text
                                    fontSize={'$xs'}
                                    w={'100%'}
                                    color={'$coolGray600'}
                                >
                                    To locate your store we need following details.
                                </Text>
                                <VStack>
                                    {formInputs.map(input => (
                                        <AppInput
                                            input={input}
                                            key={input.key}
                                            control={control}
                                            errorMessage={errors?.[input?.key]?.message}
                                        />
                                    ))}
                                    <Pressable
                                        bgColor='$white'
                                        rounded={'$full'}
                                        h={'$12'}
                                        w={'$full'}
                                        mt={'$6'}
                                        borderWidth={'$1'}
                                        borderColor='$coolGray300'
                                    >
                                        <HStack ml={'$5'} alignItems='center' justifyContent='space-between' height="100%">
                                            <Text color={'$coolGray500'} bold>Gender</Text>
                                            <Box mr={'$5'}>
                                                <AppIcon MaterialCommunityIconsName='chevron-triple-right' color={'gray'} />
                                            </Box>

                                        </HStack>
                                    </Pressable>


                                </VStack>
                            </Box>
                        </Box>
                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space='xs' justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading fontSize={'$lg'} bold>Store Details</Heading>
                                    <AppIcon OcticonsName='note' size={22} />

                                </HStack>
                                <Text
                                    fontSize={'$xs'}
                                    w={'100%'}
                                    color={'$coolGray600'}
                                >
                                    To locate your store we need following details.
                                </Text>
                                <VStack>
                                    {formInputs1.map(input => (
                                        <AppInput
                                            input={input}
                                            key={input.key}
                                            control={control}
                                            errorMessage={errors?.[input?.key]?.message}
                                        />
                                    ))}

                                </VStack>
                            </Box>
                        </Box>
                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space='xs' justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading fontSize={'$lg'} bold>Bank Details</Heading>
                                    <AppIcon OcticonsName='note' size={22} />

                                </HStack>
                                <Text
                                    fontSize={'$xs'}
                                    w={'100%'}
                                    color={'$coolGray600'}
                                >
                                    To locate your store we need following details.
                                </Text>
                                <VStack>
                                    {formInputs2.map(input => (
                                        <AppInput
                                            input={input}
                                            key={input.key}
                                            control={control}
                                            errorMessage={errors?.[input?.key]?.message}
                                        />
                                    ))}

                                </VStack>
                            </Box>
                        </Box>


                        <Box my={'$5'}>
                            <Btn
                                bg={COLORS.theme[600]}
                                _text={{ color: 'white', fontSize: '$sm' }}
                                onPress={() => setShowModal(true)} ref={ref}
                            // onPress={handleSubmit(handleLoginWithGmail)}
                            >
                                <Heading fontSize={15} color={'white'}>
                                    <HStack alignItems={'center'} space={'xs'}>
                                        <Text color={'white'} bold> Submit </Text>
                                        <AppIcon
                                            FeatherName="log-in"
                                            color={'white'}
                                            size={20}
                                        />
                                    </HStack>
                                </Heading>
                            </Btn>

                        </Box>

                    </VStack>

                </Box>
            </ScrollView>
        </>
    );
};


export default BusinessInfo;
