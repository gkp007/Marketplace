import React from 'react';
import { Text, HStack, VStack, Image, Pressable, Box, Divider } from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';

interface ProfileData {
    name: string;
    phoneNumber: string;
    availability: string;
    services: string[];
    stylist: string;
    amount: number;
    paymentStatus: boolean;
    status: string;
    bookingDateTime?: string;
}

interface ProfileDataProps {
    profileData: ProfileData;
}

const ProfileCard: React.FC<ProfileDataProps> = ({ profileData }) => {
    return (
        <Pressable
            bgColor={'#FFFF'}
            borderRadius={'$xl'}
            mx={'$2'}
            borderWidth={'$1'}
            borderColor='$coolGray300'
            overflow='hidden'
            mt={'$4'}
        >
            {/* Profile Header */}
            <HStack
                alignItems='center'
                backgroundColor='$coolGray50'
                borderTopRightRadius={'$md'}
                borderTopLeftRadius={'$2xl'}>
                <Image
                    alignSelf='flex-start'
                    source={{
                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                    }}
                    alt=""
                    borderRadius={10}
                    size={'sm'}
                    p={'$2'}
                    m={'$2'}
                />
                <VStack p={'$2'} width={'55%'} alignSelf='flex-start'>
                    <Text color={'blue.500'} fontSize="$lg" bold>
                        {profileData.name || 'Not Available'}
                    </Text>
                    <Text fontSize="$xs" color={'blue.500'}>
                        {profileData.phoneNumber || 'Not Available'}
                    </Text>
                    <Text fontSize="$xs" color={'blue.500'}>
                        {profileData.availability || 'Not Available'}
                    </Text>
                </VStack>
                <HStack
                    p={'$2'}
                    width={'25%'}
                    space={'xs'}
                    alignItems='center'
                    alignSelf='flex-end'>
                    <Text fontSize="$xs" color={'$red500'}>
                        View Details
                    </Text>
                    <AppIcon AntDesignName="caretright" color={'red'} size={10} />
                </HStack>
            </HStack>

            <Divider bg="$coolGray300" />

            {/* Profile Services */}
            <HStack justifyContent='space-between' my={'$2'} alignItems={'center'}>
                <Box px={'$2'} w={WIDTH * 0.4}>
                    <VStack space={'xs'}>
                        {profileData.services.map((service, serviceIndex) => (
                            <Text key={serviceIndex} fontSize="$md" color={COLORS.theme[700]} bold>
                                {service}
                            </Text>
                        ))}
                    </VStack>
                </Box>

                <Divider bg="$coolGray300" orientation='vertical' />

                <HStack justifyContent={'flex-end'} w={WIDTH * 0.4} mr={'$2'}>
                    <Text>{profileData.stylist}</Text>
                </HStack>
            </HStack>

            <Divider bg="$coolGray300" />

            {/* Payment Section */}
            <HStack justifyContent='space-between' my={'$2'} alignItems='center'>
                <Box px={'$2'}>
                    <HStack space={'xs'}>

                        <Text fontSize="$md" color={
                            profileData.status === 'rejected' ? '$red700' :
                                profileData.status === 'completed' ? '$green700' : '$orange700'
                        } bold>
                            {profileData.status === 'rejected' ? 'Missed' :
                                profileData.paymentStatus ? 'Paid' : 'Pending'}
                        </Text>



                        <Text fontSize="$md" color={profileData.paymentStatus ? '$green700' : '$orange700'} bold>
                            ₹ {profileData.amount}
                        </Text>
                    </HStack>
                </Box>


                <HStack justifyContent={'flex-end'}>

                    {profileData.status === 'pending' ?
                        <>
                            <Pressable bg={'$red600'} mx={'$2'} borderRadius={'$md'}>
                                <HStack alignItems={'center'} p={'$1'} px={'$2'} space={'xs'}>
                                    <AppIcon EntypoName="cross" color={'#fff'} size={16} />
                                    <Text fontSize={'$xs'} color={'$white'} px={2}>
                                        Reject
                                    </Text>
                                </HStack>
                            </Pressable>

                            <Pressable bg={COLORS.theme[700]} mx={'$2'} borderRadius={'$md'}>
                                <HStack alignItems={'center'} p={'$1'} px={'$2'} space={'xs'}>
                                    <AppIcon IoniconsName="checkmark-sharp" color={'#fff'} size={16} />
                                    <Text fontSize={'$xs'} color={'$white'} px={2}>
                                        Complete
                                    </Text>
                                </HStack>
                            </Pressable>
                        </>

                        : profileData.status === 'completed' ?
                            <Box backgroundColor='$coolGray300' mr={'$2'} borderRadius={'$sm'}>
                                <Text fontSize={'$xs'} color={'$coolGray700'} bold px={'$2'}>
                                    Completed
                                </Text>
                            </Box>
                            : profileData.status === 'rejected' ?
                                <Box backgroundColor={'$coolGray300'} mr={'$2'} borderRadius={'$sm'}>
                                    <Text fontSize={'$xs'} color={'$coolGray700'} bold px={'$2'}>
                                        Rejected
                                    </Text>
                                </Box>
                                : null

                    }

                </HStack>
            </HStack>
        </Pressable>
    );
};

export default ProfileCard;
