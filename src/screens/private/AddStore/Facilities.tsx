import React, { useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack,
    ScrollView
} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';

type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

const BusinessInfo = () => {

    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const toggleAmenity = (amenity: string) => {
        setSelectedAmenities(prev => {
            if (prev.includes(amenity)) {
                return prev.filter(item => item !== amenity);
            } else {
                return [...prev, amenity];
            }
        });
    };

    const isAmenitySelected = (amenity: string) => {
        return selectedAmenities.includes(amenity);
    };

    const { navigate, goBack } = useNavigation<StackAndTabType>();


    return (
        <PrivateContainer title={'Basic business details'}>
            <ScrollView flex={1} bg={'$white'}>
                <Box m={'$2'} backgroundColor='$white'>
                    <VStack justifyContent='space-between'>
                        <Box backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} >
                            <Box m={'$2'} my={'$3'} mb={'$5'}>

                                <HStack justifyContent={'space-between'} space={'xs'} alignItems={'center'} mb={'$3'}>
                                    <Heading fontSize={'$md'} bold>Tap to choose facilities you have</Heading>
                                </HStack>

                                <HStack justifyContent='space-between'>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('air-conditioner')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon MaterialCommunityIconsName='air-filter' size={25} color={isAmenitySelected('air-conditioner') ? 'green' : 'gray'} />
                                            <Text fontSize={'$sm'} color={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray400'}>A/C</Text>
                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('power-backup') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('power-backup')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='power-sharp' size={25} color={isAmenitySelected('power-backup') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('power-backup') ? '$green600' : '$coolGray400'}>Power Backup</Text>

                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('cctv') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('cctv')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='wifi' size={25} color={isAmenitySelected('cctv') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('cctv') ? '$green600' : '$coolGray400'}>Wifi</Text>

                                        </VStack>
                                    </Pressable>

                                </HStack>
                                <HStack justifyContent='space-between' mt={'$5'}>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('air-conditioner')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon MaterialCommunityIconsName='air-filter' size={25} color={isAmenitySelected('air-conditioner') ? 'green' : 'gray'} />
                                            <Text fontSize={'$sm'} color={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray400'}>Washroom</Text>
                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('power-backup') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('power-backup')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='power-sharp' size={25} color={isAmenitySelected('power-backup') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('power-backup') ? '$green600' : '$coolGray400'}>Parking</Text>

                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('cctv') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('cctv')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='wifi' size={25} color={isAmenitySelected('cctv') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('cctv') ? '$green600' : '$coolGray400'}>CCTV</Text>

                                        </VStack>
                                    </Pressable>

                                </HStack>
                                <HStack justifyContent='space-between' mt={'$5'}>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('air-conditioner')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon MaterialCommunityIconsName='air-filter' size={25} color={isAmenitySelected('air-conditioner') ? 'green' : 'gray'} />
                                            <Text fontSize={'$sm'} color={isAmenitySelected('air-conditioner') ? '$green600' : '$coolGray400'}>Washroom</Text>
                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('power-backup') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('power-backup')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='power-sharp' size={25} color={isAmenitySelected('power-backup') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('power-backup') ? '$green600' : '$coolGray400'}>Tea/Coffee</Text>

                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.28}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={isAmenitySelected('cctv') ? '$green600' : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={() => toggleAmenity('cctv')}
                                    >
                                        <VStack space={'md'} alignItems={'center'} p={'$2'}>
                                            <AppIcon IoniconsName='wifi' size={25} color={isAmenitySelected('cctv') ? 'green' : 'gray'} />

                                            <Text fontSize={'$sm'} color={isAmenitySelected('cctv') ? '$green600' : '$coolGray400'}>CCTV</Text>

                                        </VStack>
                                    </Pressable>

                                </HStack>

                            </Box>
                        </Box>
                    </VStack>
                </Box>
            </ScrollView>
            <Box m={'$2'}>
                <Btn
                    bg={COLORS.theme[600]}
                    _text={{ color: 'white', fontSize: '$sm' }}
                    onPress={() => navigate('AddProfessional')}

                >
                    <Heading fontSize={15} color={'white'}>
                        <HStack alignItems={'center'} space={'xs'}>
                            <Text color={'white'} bold> Next </Text>
                            <AppIcon
                                FeatherName="log-in"
                                color={'white'}
                                size={20}
                            />
                        </HStack>
                    </Heading>
                </Btn>

            </Box>
        </PrivateContainer>
    );
};


export default BusinessInfo;
