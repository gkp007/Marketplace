import React, { } from 'react';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';
import { Box, Divider, Heading, Pressable, Text, VStack } from '@gluestack-ui/themed';
import { HStack } from '@gluestack-ui/themed';
import AppIcon from '~/components/core/AppIcon';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';
import { PrivateContainer } from '~/components/shared';

type Props = {
    visible: boolean;
    onSelect: () => void;
    onClose: () => void;
};
type Item = {
    name: string;
};


export default () => {


    const { navigate } = useNavigation<StackAndTabType>();


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    return (
        <PrivateContainer title={'Add your location'}>

            {/* <PrivateContainer title={'Enter your business location'}> */}
            <VStack mx={'$2'} space={'2xl'} bg={'$white'}>
                <Box>
                    <AppInput
                        key={`name`}
                        input={{
                            key: `name`,
                            color: '$white',
                            placeholder: 'Enter your area. Try Nayapalli, Khandagiri etc.',
                            icon: { IoniconsName: 'search-outline' },
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
                </Box>

                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <VStack space={'xs'}>
                        <HStack space={'md'} alignItems={'center'} px={'$3'}>
                            <AppIcon MaterialCommunityIconsName='navigation-variant' size={25} color={'#DC4D01'} />
                            <Heading size={'md'} color={'$orange600'}>
                                Use my current location
                            </Heading>
                        </HStack>
                    </VStack>

                </HStack>

                <VStack p={'$3'} space={'sm'}>
                    <HStack justifyContent='space-between' alignItems='center' >
                        <Heading color={'$blue700'} fontSize={'$lg'} bold> Is the pin is in right location ?</Heading>
                        <AppIcon EvilIconsName='location' size={25} color={'black'} />
                    </HStack>

                    <Divider bg={'$coolGray200'} w={'98%'} alignSelf='center' />

                    <Box >
                        <Box m={'$2'} >
                            <VStack space={'xs'} >
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Scissor, Plot 654/23, 2nd lane
                                </Text>
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Nayapalli, 751005
                                </Text>
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Bhubaneswar, Odisha
                                </Text>

                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    India
                                </Text>
                            </VStack>
                        </Box>
                    </Box>
                </VStack>


                <VStack p={'$3'} space={'sm'} borderWidth={'$1'} borderColor={'$blue100'} backgroundColor='$white' borderRadius={'$xl'}>

                    <HStack justifyContent='space-between' alignItems='center' >
                        <Heading fontSize={'$lg'} color={'$blue700'} bold> Selected location</Heading>
                        <Pressable onPress={() => navigate('AllBookings')}>
                            <HStack alignItems='center' space={'xs'} bg={'$blue50'} borderRadius={'$sm'} p={'$1'} >
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Edit
                                </Text>
                                <AppIcon EvilIconsName='chevron-right' size={25} color={'black'} />
                            </HStack>
                        </Pressable>
                    </HStack>

                    <Divider bg={'$coolGray200'} w={'98%'} alignSelf='center' />

                    <Box >
                        <Box m={'$2'} >
                            <VStack space={'xs'} >
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Scissor, Plot 654/23, 2nd lane
                                </Text>
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Nayapalli, 751005
                                </Text>
                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    Bhubaneswar, Odisha
                                </Text>

                                <Text fontSize={'$sm'} color={'$black'} bold>
                                    India
                                </Text>
                            </VStack>
                        </Box>
                    </Box>
                </VStack>

            </VStack>
            {/* </PrivateContainer> */}
        </PrivateContainer>
    );
};
