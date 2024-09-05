import React, { useState } from 'react';
import { Box, ButtonText, Center, FlatList, Heading, HStack, ModalBackdrop, ModalContent, ModalFooter, Pressable, ScrollView, Text } from "@gluestack-ui/themed";
import { VStack } from '@gluestack-ui/themed';
import AppIcon from '~/components/core/AppIcon';
import { BookingCard } from '~/components/container';
import TopServices from '~/components/TopServices';
import TopProfessionals from '~/components/TopProfessional';
import { useNavigation } from '@react-navigation/native';
import { StackAndTabType } from '~/routes/private/types';
import { Modal } from '@gluestack-ui/themed';
import { ModalHeader } from '@gluestack-ui/themed';
import { ModalCloseButton } from '@gluestack-ui/themed';
import { Button } from '@gluestack-ui/themed';
import { ModalBody } from '@gluestack-ui/themed';
import { Icon } from '@gluestack-ui/themed';
import { FullModal } from '~/components/core';


const profileDataArray = [
  {
    name: 'Gopalkrishna',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Hair Cutting', 'Facial & more'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: false,
    status: 'pending',
    bookingDateTime: new Date('2024-05-01T11:05:00')
  },
  {
    name: 'Meenaketan',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Hair Cutting'],
    stylist: 'Sonam Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:48:00')

  },
  {
    name: 'Chinamayee',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: false,
    status: 'rejected',
    bookingDateTime: new Date('2024-05-01T09:52:00')



  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:15:00')

  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T09:15:00')

  },
  {
    name: 'Debabrata',
    phoneNumber: '7752058263',
    availability: '9.00 AM - 9.45 AM',
    services: ['Facial'],
    stylist: 'Sushanta Senapati',
    amount: 350,
    paymentStatus: true,
    status: 'completed',
    bookingDateTime: new Date('2024-05-01T010:15:00')

  },
];

const topServicesData = [
  {
    name: 'Hair Cutting',
    countThisMonth: 360,
    countLastMonth: 310,
    up: true,
    upPercentage: 16
  },
  {
    name: 'Manicure',
    countThisMonth: 279,
    countLastMonth: 310,
    up: false,
    downPercentage: 10
  },
  {
    name: 'Manicure',
    countThisMonth: 279,
    countLastMonth: 310,
    up: false,
    downPercentage: 10
  },
];

const topProfessionalsData = [
  {
    name: 'John Doe',
    rating: 4.5,
    experience: '5 years',
    countThisMonth: 279,
    countLastMonth: 310,
    up: false,
    downPercentage: 10
  },
  {
    name: 'Jane Smith',
    rating: 4.8,
    experience: '8 years',
    countThisMonth: 279,
    countLastMonth: 310,
    up: false,
    downPercentage: 10
  },
];



const sortByBookingDateTime = (a, b) => {
  return new Date(b.bookingDateTime) - new Date(a.bookingDateTime);
};


export default function Home() {

  const [selectedTab, setSelectedTab] = useState('weekly');

  const handleTabChange = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };


  const sortedBookings = profileDataArray.sort(sortByBookingDateTime);
  const latestBookings = sortedBookings.slice(0, 3);


  const { navigate, goBack } = useNavigation<StackAndTabType>();

  const [showModal, setShowModal] = useState(false)
  console.log(showModal)
  const ref = React.useRef(null)

  const [modalVisible, setModalVisible] = useState(false);


  return (

    <Box bg={'white'} flex={1}>

      <Center mt={"$20"} alignContent='center'>
        <Text bold>Home Screen</Text>
      </Center>


      <FullModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={() => {
          setModalVisible(false);
        }}
      />

    </Box >
  );
};
