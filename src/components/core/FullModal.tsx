import {
    Box,
    Center,
    Heading,
    Text,
    Link,
    HStack,
    LinkText,
    VStack,
    ScrollView,
    Spinner,
    Icon,
    FlatList,
    Pressable,
    Input
} from '@gluestack-ui/themed';
import React, { useEffect, useMemo, useState } from 'react';
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Country } from '../../constant';
import AppIcon from '~/components/core/AppIcon';
import { COLORS } from '~/styles';
import { useForm } from 'react-hook-form';
import AppInput from '~/components/core/AppInput';

type Props = {
    visible: boolean;
    onSelect: (country: any) => void;
    onClose: () => void;
    selectedCountry?: any;
};


type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

const FullModal = ({ onClose, visible }: Props) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const formInputs: FormInput[] = useMemo(
        () => [
            {
                key: 'OwnerName',
                label: undefined,
                color: '$white',
                placeholder: 'Business Owner Full Name',
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
                key: 'BusinessName',
                label: undefined,
                color: '$white',
                placeholder: 'Salon/Parlour Name',
                icon: { MaterialIconsName: 'storefront' },
                rules: {
                    required: 'Business Name is required',
                    pattern: {
                        minLength: 5,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    marginBottom: '2',
                },
            },
        ],
        [],
    );

    return (
        <>
            <Modal
                animationType="slide"
                visible={visible}
                onRequestClose={() => onClose()}>
                <TouchableWithoutFeedback onPress={() => onClose()}>
                    <SafeAreaView style={styles.container}>
                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space='xs' justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading fontSize={'$lg'} bold>Basic Details</Heading>
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
                                        borderColor='$blue300'
                                    >
                                        <HStack ml={'$5'} alignItems='center' justifyContent='space-between' height="100%">
                                            <Text color={COLORS.theme[600]} bold>Add Store Location</Text>
                                            <Box mr={'$5'}>
                                                <AppIcon MaterialCommunityIconsName='chevron-triple-right' color={COLORS.theme[600]} />
                                            </Box>

                                        </HStack>
                                    </Pressable>

                                </VStack>
                            </Box>
                        </Box>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </Modal>
        </>
    );
};
export default FullModal;

const styles = StyleSheet.create({
    flag: {
        width: 20,
        height: 20,
        marginRight: 10,
        resizeMode: 'contain',
    },
    flagWrapper: { padding: 10, flexDirection: 'row' },
    container: {
        flex: 1,
        padding: 10,
    },
});
