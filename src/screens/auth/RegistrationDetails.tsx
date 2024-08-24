import React, { useState } from 'react';
import {
    Text,
    HStack,
    Heading,
    Box,
    VStack,
    ScrollView,
    Pressable,
    Avatar,
    AvatarFallbackText,
    AvatarImage
} from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { PrivateContainer } from '~/components/shared';
import { useNavigation } from '@react-navigation/native';
import { StackAndTabType } from '~/routes/private/types';

type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

type Service = {
    name: string;
    category: string;
    duration: string;
};

const BusinessInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const [services, setServices] = useState<Service[]>([{ category: '', name: '', duration: '' }]);
    const ref = React.useRef(null);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const { navigate, goBack } = useNavigation<StackAndTabType>();



    return (
        <PrivateContainer title={'Owner Details'}>

            <Box m={'$2'} backgroundColor='$white' flex={1}>

                <VStack alignItems="center" space={'xs'} m={'$2'} mt={'$5'}>
                    <Pressable
                        borderWidth={'$2'}
                        borderColor={COLORS.theme[600]}
                        borderRadius={'$full'}
                    >
                        <Avatar size="xl" p={'$0.5'} bg={'$white'}>
                            <AvatarFallbackText>Scissors Salon</AvatarFallbackText>
                            <AvatarImage
                                size="2xl"
                                alt="Scissors Salon"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                                }}
                            />
                        </Avatar>
                    </Pressable>
                </VStack>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack justifyContent='space-between' mb={'$4'}>

                        <Box backgroundColor='$white' borderRadius={'$xl'} mt={'$5'}>
                            <VStack m={'$2'} space={'lg'}>

                                <AppInput
                                    key={`name`}
                                    input={{
                                        key: `name`,
                                        label: 'Full Name',
                                        color: '$white',
                                        placeholder: 'Enter your email',
                                        icon: { FontAwesomeName: 'user-o' },
                                        rules: {
                                            required: 'Name is required',
                                            pattern: {
                                                minLength: 5,
                                            },
                                        },
                                        inputProps: {
                                            autoCapitalize: 'none',
                                            marginBottom: '2',

                                        },
                                    }}
                                    control={control}
                                    errorMessage={errors?.[`name`]?.message}
                                />
                                <AppInput
                                    key={`email`}
                                    input={{
                                        key: `email`,
                                        label: 'Email',
                                        color: '$white',
                                        placeholder: 'Enter your email',
                                        icon: { MaterialIconsName: 'alternate-email' },
                                        rules: {
                                            required: 'Email is required',
                                            pattern: {
                                                minLength: 5,
                                            },
                                        },
                                        inputProps: {
                                            autoCapitalize: 'none',
                                            marginBottom: '2',

                                        },
                                    }}
                                    control={control}
                                    errorMessage={errors?.[`email`]?.message}
                                />
                                <AppInput
                                    key={`phone`}
                                    input={{
                                        key: `name`,
                                        label: 'Mobile Number',
                                        color: '$white',
                                        placeholder: 'Enter your mobile number',
                                        icon: { FeatherName: 'phone' },
                                        rules: {
                                            required: 'Name is required',
                                            pattern: {
                                                minLength: 5,
                                            },
                                        },
                                        inputProps: {
                                            autoCapitalize: 'none',
                                            marginBottom: '2',

                                        },
                                    }}
                                    control={control}
                                    errorMessage={errors?.[`phone`]?.message}
                                />
                            </VStack>
                        </Box>

                    </VStack>

                </ScrollView>
                <Box >
                    <Btn onPress={() => navigate('Location')} bg={COLORS.theme[600]} _text={{ color: 'white', fontSize: '$sm' }}>
                        <Heading color={'white'}>
                            <HStack alignItems={'center'} space={'xs'}>
                                <Text color={'white'} bold> Submit </Text>
                                <AppIcon FeatherName="log-in" color={'white'} size={20} />
                            </HStack>
                        </Heading>
                    </Btn>
                </Box>
            </Box >

        </PrivateContainer>
    );
};

export default BusinessInfo;
