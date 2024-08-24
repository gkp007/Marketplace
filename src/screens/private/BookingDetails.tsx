import { Divider, ScrollView } from '@gluestack-ui/themed';
import {
    Box,
    Text,
    HStack,
    VStack,
    Pressable,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import AppIcon from '~/components/core/AppIcon';
import useAuth from '~/hooks/useAuth';
import { StackAndTabType } from '~/routes/private/types';
import { COLORS, WIDTH } from '~/styles';
import AnimatedLottieView from 'lottie-react-native';
import animations from '~/assets/animations';

const profileDataArray = [
    {
        name: 'Gopalkrishna',
        phoneNumber: '7752058263',
        availability: '9.00 AM - 9.45 AM',
        services: ['Hair Cutting', 'Facial & more'],
        stylist: 'Sushanta Senapati',
        amount: 350,
        paymentStatus: false,
        status: 'pending'
    },

];

const SERVICE_ITEMS = [
    { name: 'Hair Cutting', duration: 'Medium - 25 min' },
    { name: 'Facial', duration: 'Scrub - 30 min' },
    { name: 'SPA', duration: 'Shampoo - 30 min' }
];

const BOOKING_DETAILS = [
    { label: 'Booked On', value: '15th April 2024' },
    { label: 'Slot Date', value: '20th April 2024' },
    { label: 'Slot Time', value: '6.45 PM - 7.20 PM' },
    { label: 'Booking Note', value: 'A creative modern type of hair style needed. Like a chhapri.' },
    { label: 'Attachments', value: 'Download' },
];

const PRICE_BREAKDOWN = [
    { label: 'Amount', value: '₹ 350' },
    { label: 'Coupon Discount', value: '- ₹ 50' },
    { label: 'Tip Amount', value: '+ ₹ 20' },
    { label: 'Total Amount', value: '₹ 330' },
];

const CUSTOMER_DETAILS = [
    { label: 'Name', value: 'Gopalkrishna Pattanaik' },
    { label: 'Mobile', value: '775058263' },
    { label: 'No. of Visit', value: '3rd' }
];

export default function Profile() {
    const { navigate, goBack } = useNavigation<StackAndTabType>();
    const { logout } = useAuth();

    return (
        <ScrollView >
            <Box bg="white" h="$full">
                <StatusBar animated backgroundColor={COLORS.theme[700]} />

                {profileDataArray.map((profileData, index) => (
                    <Pressable
                        key={index}
                        bgColor="#FFFF"
                        borderRadius="$xl"
                        mx="$2"
                        borderColor="$coolGray400"
                        overflow="hidden"
                        mt="$4"
                    >
                        {/* Booking Header */}
                        <VStack
                            alignItems="center"
                            borderTopRightRadius="$md"
                            borderTopLeftRadius="$2xl"
                        >
                            <AnimatedLottieView
                                source={animations.SUCCESS}
                                autoPlay
                                style={{ height: 80, width: 200 }}
                                loop={false}
                            />

                            <Text color="$green600" fontSize="$lg" bold>
                                {profileData.status === 'pending' ? 'Booking Confirmed' : 'Not Available'}
                            </Text>
                            <Text mt="$2" fontSize="$xs" color="blue.500">
                                {profileData.status === 'pending' ? 'Congratulations! GopalKrishna booked a slot successfully.' : 'Not Available'}
                            </Text>
                            <Text mt="$3" fontSize="$xs" color="blue.500" bold>
                                {profileData.status === 'pending' ? 'Booking ID: #A84354SD' : 'Not Available'}
                            </Text>
                            <Text fontSize="$xs" color="blue.500" bold>
                                {profileData.status === 'pending' ? 'Booked On: 15th April 2024' : 'Not Available'}
                            </Text>
                        </VStack>

                        {/* Booking Details */}
                        <Box>
                            <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                                Service Details
                            </Text>
                            <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                                <Box my="$2" alignItems="center" justifyContent="center">
                                    <Text fontSize="$md" mb="$1" bold textAlign="center">
                                        Serviced By Sonam Senapti
                                    </Text>
                                </Box>
                                {SERVICE_ITEMS.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Divider bg="$coolGray300" />
                                        <HStack justifyContent="space-between" my="$2" alignItems="center">
                                            <Box px="$2" w={WIDTH * 0.3}>
                                                <VStack space="xs">
                                                    <Text fontSize="$md" color="$black">{`${index + 1}. ${item.name}`}</Text>
                                                </VStack>
                                            </Box>
                                            <HStack justifyContent="flex-end" w={WIDTH * 0.6} mr="$2">
                                                <Text fontSize="$md">{item.duration}</Text>
                                            </HStack>
                                        </HStack>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>


                        <Box>
                            <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                                Price Breakup
                            </Text>
                            <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                                {PRICE_BREAKDOWN.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <HStack justifyContent="space-between" my="$2" alignItems="center">
                                            <Box px="$2" w={WIDTH * 0.3}>
                                                <VStack space="xs">
                                                    <Text fontSize="$md" color="$black">{item.label}</Text>
                                                </VStack>
                                            </Box>
                                            <HStack justifyContent="flex-end" w={WIDTH * 0.6} mr="$4">
                                                <Text fontSize="$md">{item.value}</Text>
                                            </HStack>
                                        </HStack>
                                        {index !== PRICE_BREAKDOWN.length - 1 && <Divider bg="$coolGray300" />}
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>

                        <Box>
                            <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                                Booking Details
                            </Text>
                            <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                                {BOOKING_DETAILS.map((detail, index) => (
                                    <React.Fragment key={index}>
                                        <HStack justifyContent="space-between" my="$2" alignItems="center">
                                            <Box px="$2" w={WIDTH * 0.3}>
                                                <VStack space="xs">
                                                    <Text fontSize="$md" color="$black">{detail.label}</Text>
                                                </VStack>
                                            </Box>
                                            <HStack justifyContent="flex-end" w={WIDTH * 0.6} mr="$2">
                                                <Text fontSize="$md">{detail.value}</Text>
                                            </HStack>
                                        </HStack>
                                        <Divider bg="$coolGray300" />
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>


                        <Box>
                            <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                                Customer Details
                            </Text>
                            <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                                {CUSTOMER_DETAILS.map((detail, index) => (
                                    <React.Fragment key={index}>
                                        <HStack justifyContent="space-between" my="$2" alignItems="center">
                                            <Box px="$2" w={WIDTH * 0.3}>
                                                <VStack space="xs">
                                                    <Text fontSize="$md" color="$black">{detail.label}</Text>
                                                </VStack>
                                            </Box>
                                            <HStack justifyContent="flex-end" w={WIDTH * 0.6} mr="$2">
                                                <Text fontSize="$md">{detail.value}</Text>
                                            </HStack>
                                        </HStack>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>

                        <HStack justifyContent='space-between' my={'$2'} alignItems='center'>

                            <HStack justifyContent={'flex-end'}>

                                {profileData.status === 'pending' ?
                                    <>
                                        <Pressable w={WIDTH * 0.45} py={'$1'} bg={'$red600'} mx={'$2'} borderRadius={'$md'}>
                                            <HStack justifyContent='center' alignItems={'center'} p={'$1'} px={'$2'} space={'xs'}>
                                                <AppIcon EntypoName="cross" color={'#fff'} size={16} />
                                                <Text fontSize={'$xs'} color={'$white'} px={2}>
                                                    Reject
                                                </Text>
                                            </HStack>
                                        </Pressable>

                                        <Pressable w={WIDTH * 0.45} py={'$1'} bg={COLORS.theme[700]} mx={'$2'} borderRadius={'$md'}>
                                            <HStack justifyContent='center' alignItems={'center'} p={'$1'} px={'$2'} space={'xs'}>
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
                ))}
            </Box>
        </ScrollView>
    );
}
