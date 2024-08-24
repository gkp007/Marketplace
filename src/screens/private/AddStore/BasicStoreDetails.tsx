import React, { useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack
} from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';

const BusinessInfo = () => {

    const [selectedAmenity, setSelectedAmenity] = useState<string>('');

    const { navigate, goBack } = useNavigation<StackAndTabType>();


    const toggleAmenity = (amenity: string) => {
        setSelectedAmenity(prev => prev === amenity ? '' : amenity);
    };

    const isAmenitySelected = (amenity: string) => {
        return selectedAmenity === amenity;
    };


    return (
        <PrivateContainer title={'Basic business details'}>

            <Box m={'$2'} backgroundColor='$white' flex={1}>
                <VStack justifyContent='space-between'>

                    <Box backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} >
                        <Box m={'$2'} my={'$3'} mb={'$5'}>

                            <HStack justifyContent={'space-between'} space={'xs'} alignItems={'center'} mb={'$3'}>
                                <Heading fontSize={'$xl'} bold>Your team size</Heading>
                                {/* <AppIcon IoniconsName='images-outline' size={22} /> */}
                            </HStack>

                            <VStack space={'md'} justifyContent='space-between'>

                                <Pressable
                                    py={'$2'}
                                    borderWidth={'$1'}
                                    borderColor={isAmenitySelected('power-backup') ? '$green600' : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={() => toggleAmenity('power-backup')}
                                >
                                    <HStack space={'md'} alignItems={'center'} px={'$3'} p={'$2'}>
                                        <AppIcon IoniconsName='person-outline' size={20} color={isAmenitySelected('power-backup') ? 'green' : 'black'} />
                                        <Text fontSize={'$md'} color={isAmenitySelected('power-backup') ? '$green600' : '$black'}>It's Just me</Text>
                                    </HStack>
                                </Pressable>

                                <Pressable
                                    py={'$2'}
                                    borderWidth={'$1'}
                                    borderColor={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={() => toggleAmenity('air-conditioner')}
                                >
                                    <HStack space={'md'} alignItems={'center'} px={'$3'} p={'$2'}>
                                        <AppIcon IoniconsName='people-outline' size={20} color={isAmenitySelected('air-conditioner') ? 'green' : 'black'} />
                                        <Text fontSize={'$md'} color={isAmenitySelected('air-conditioner') ? '$green600' : '$black'}>2 or more (Including me)</Text>
                                    </HStack>
                                </Pressable>

                                <Pressable
                                    py={'$2'}
                                    borderWidth={'$1'}
                                    borderColor={isAmenitySelected('others') ? '$green600' : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={() => toggleAmenity('others')}
                                >
                                    <HStack space={'md'} alignItems={'center'} px={'$3'} p={'$2'}>
                                        <AppIcon IoniconsName='people-outline' size={20} color={isAmenitySelected('others') ? 'green' : 'black'} />
                                        <Text fontSize={'$md'} color={isAmenitySelected('others') ? '$green600' : '$black'}>Others (I am not work here)</Text>
                                    </HStack>
                                </Pressable>
                            </VStack>
                        </Box>
                    </Box>

                </VStack>
                <Box my={'$5'} position='absolute' bottom={'$12'} w={'$full'}>
                    <Btn
                        bg={COLORS.theme[600]}
                        _text={{ color: 'white', fontSize: '$sm' }}
                        onPress={() => navigate('Facilities')}
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
            </Box>
        </PrivateContainer>
    );
};

export default BusinessInfo;
