import React, { useState } from 'react';
import {
    Text,
    HStack,
    Heading,
    Box,
    VStack,
    ScrollView,
    Pressable,
    Button,
} from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import AppInput from '~/components/core/AppInput';
import AppIcon from '~/components/core/AppIcon';
import { useForm } from 'react-hook-form';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';

type Professional = {
    fullName: string;
    mobile: string;
    photo?: File;
};

const BusinessInfo = () => {
    const [professionals, setProfessionals] = useState<Professional[]>([{ fullName: '', mobile: '', photo: undefined }]);
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleAddProfessional = () => {
        setProfessionals([...professionals, { fullName: '', mobile: '', photo: undefined }]);
    };

    const handleDeleteProfessional = (index: number) => {
        const updatedProfessionals = [...professionals];
        updatedProfessionals.splice(index, 1);
        setProfessionals(updatedProfessionals);
    };

    const handleProfessionalChange = (index: number, key: keyof Professional, value: string | File) => {
        const updatedProfessionals = [...professionals];
        updatedProfessionals[index][key] = value;
        setProfessionals(updatedProfessionals);
    };

    const { navigate, goBack } = useNavigation<StackAndTabType>();


    const renderProfessionalInputs = () => {
        return professionals.map((professional, index) => (
            <VStack key={index} space="xs">
                <HStack justifyContent="space-between" alignItems="center" mt={'$6'}>
                    <Text >
                        Professional {index + 1}
                    </Text>
                    {index > 0 && (
                        <Pressable onPress={() => handleDeleteProfessional(index)}>
                            <AppIcon MaterialCommunityIconsName="delete-outline" color="red" size={22} />
                        </Pressable>
                    )}
                </HStack>

                <AppInput
                    key={`fullName-${index}`}
                    input={{
                        key: `FullName-${index}`,
                        placeholder: 'Full Name',
                        icon: { FontAwesomeName: 'user' },
                        rules: {
                            required: 'Full Name is required',
                        },
                        inputProps: {
                            value: professional.fullName,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleProfessionalChange(index, 'fullName', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`FullName-${index}`]?.message}
                />
                <AppInput
                    key={`mobile-${index}`}
                    input={{
                        key: `Mobile-${index}`,
                        placeholder: 'Mobile Number',
                        icon: { MaterialIconsName: 'phone' },
                        rules: {
                            required: 'Mobile Number is required',
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Please enter a valid 10-digit mobile number',
                            },
                        },
                        inputProps: {
                            value: professional.mobile,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleProfessionalChange(index, 'mobile', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Mobile-${index}`]?.message}
                />
                <AppInput
                    key={`photo-${index}`}
                    input={{
                        key: `Photo-${index}`,
                        placeholder: 'Select Photo',
                        icon: { MaterialIconsName: 'phone' },
                        rules: {
                            pattern: {
                                message: 'Please enter a valid 10-digit mobile number',
                            },
                        },
                        inputProps: {
                            value: professional.mobile,
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
                                handleProfessionalChange(index, 'photo', e.target.value),
                        },
                    }}
                    control={control}
                    errorMessage={errors?.[`Photo-${index}`]?.message}
                />
                <Box>
                </Box>

            </VStack>
        ));
    };

    return (
        <PrivateContainer title={'Professionals'}>
            <Box mx={"$2"} backgroundColor={'white'} flex={1}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack justifyContent="space-between" >
                        <Box m={"$1"} >
                            <Heading color={'$black'}>
                                Add Professionals
                            </Heading>
                        </Box>
                        <Box borderColor={'$blue100'} backgroundColor={'$white'} borderRadius="$xl">
                            <Box mx={"$2"} >
                                {renderProfessionalInputs()}
                                <Box mt={"$8"}>
                                    <Pressable p={'$1'} borderWidth={"$1"} onPress={handleAddProfessional} borderColor={'$blueGray300'} alignItems="center" borderRadius={"$md"}>
                                        <Heading color={'$white'}>
                                            <HStack alignItems="center" space="xs">
                                                <Text color={'$black'} bold>
                                                    Add another professional
                                                </Text>
                                                <AppIcon FeatherName="plus" color="black" size={20} />
                                            </HStack>
                                        </Heading>
                                    </Pressable>
                                </Box>
                            </Box>
                        </Box>
                    </VStack>
                </ScrollView>
                <Box m={'$2'}>
                    <Button
                        onPress={() => navigate('ServiceCreate')}
                        bg={COLORS.theme[600]}
                    >
                        <Heading color="white">
                            <HStack alignItems="center" space="xs">
                                <Text color="white" bold>
                                    Submit
                                </Text>
                                <AppIcon FeatherName="log-in" color="white" size={20} />
                            </HStack>
                        </Heading>
                    </Button>
                </Box>
            </Box>
        </PrivateContainer>
    );
};

export default BusinessInfo;
