import React from 'react';
import { StatusBar } from 'react-native';
import { PrivateContainer } from '~/components/shared';
import { BookingCard } from '~/components/container';
import { Box } from '@gluestack-ui/themed';
import { COLORS } from '~/styles';


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
    {
        name: 'Meenaketan',
        phoneNumber: '7752058263',
        availability: '9.00 AM - 9.45 AM',
        services: ['Hair Cutting'],
        stylist: 'Sonam Senapati',
        amount: 350,
        paymentStatus: true,
        status: 'completed'


    },
    {
        name: 'Chinamayee',
        phoneNumber: '7752058263',
        availability: '9.00 AM - 9.45 AM',
        services: ['Facial'],
        stylist: 'Sushanta Senapati',
        amount: 350,
        paymentStatus: false,
        status: 'rejected'


    },
    {
        name: 'Debabrata',
        phoneNumber: '7752058263',
        availability: '9.00 AM - 9.45 AM',
        services: ['Facial'],
        stylist: 'Sushanta Senapati',
        amount: 350,
        paymentStatus: true,
        status: 'completed'
    },
];

const AllBookings = () => {

    return (
        <PrivateContainer title="All Bookings">
            <StatusBar animated backgroundColor={COLORS.theme[700]} />
            <Box bg={'white'} h={'$full'}>
                {profileDataArray.map((profileData, index) => (
                    <BookingCard key={index} profileData={profileData} />
                ))}
            </Box>
        </PrivateContainer>
    );
};

export default AllBookings;
