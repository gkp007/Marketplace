import React, { useState } from 'react';
import { Box, ButtonText, FlatList, Heading, HStack, ModalBackdrop, ModalContent, ModalFooter, Pressable, ScrollView, Text } from "@gluestack-ui/themed";
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

      <HStack bg="white" justifyContent="space-between" px={'$4'} mt={'$1'} borderBottomWidth={'$2'} borderTopWidth={'$2'} borderTopColor='$blueGray300' borderBottomColor='$blueGray300'>
        <Pressable onPress={() => handleTabChange('weekly')}>
          <Box borderBottomWidth={selectedTab === 'weekly' ? 2 : 0} borderColor='$blue700'>
            <Text textAlign="center" mx={'$2'} py={'$1'} color={selectedTab === 'weekly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Weekly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('today')}>
          <Box borderBottomWidth={selectedTab === 'today' ? 2 : 0} borderColor='$blue700'>
            <Text textAlign="center" mx={'$2'} py={'$1'} color={selectedTab === 'today' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Today</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('monthly')}>
          <Box borderBottomWidth={selectedTab === 'monthly' ? 2 : 0} borderColor='$blue700'>
            <Text mx={'$2'} py={'$1'} color={selectedTab === 'monthly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Monthly</Text>
          </Box>
        </Pressable>
        <Pressable onPress={() => handleTabChange('yearly')}>
          <Box borderBottomWidth={selectedTab === 'yearly' ? 2 : 0} borderColor='$blue700'>
            <Text mx={'$2'} py={'$1'} color={selectedTab === 'yearly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Yearly</Text>
          </Box>
        </Pressable>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false} mb={'$16'}>

        <Box bg={'$white'} softShadow="1" borderRadius={'$md'} >

          <HStack space={'md'} alignItems='center' justifyContent={'space-between'} m={'$3'} mb={'$3'}>


            <Pressable $pressed-bg='$black' $pressed={{ opacity: 1 }} onPress={() => navigate('RevenueStats')} softShadow='1' w={'36%'} p={'$2'} px={'$4'} bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <VStack>

                <HStack justifyContent='space-between' alignItems='center'>
                  <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                    5034
                  </Heading>
                  <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

                </HStack>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  Up by 5%
                </Text>
                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$coolGray600'}>
                  Revenue
                </Text>
              </VStack>
            </Pressable>
            <Pressable onPress={() => navigate('BookingStats')} w={'28%'} softShadow='1' p={'$2'} px={'$4'} bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <VStack>

                <HStack justifyContent='space-between' alignItems='center'>
                  <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                    68
                  </Heading>
                  <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

                </HStack>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  Up by 10%
                </Text>
                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$coolGray600'}>
                  Booking
                </Text>
              </VStack>
            </Pressable>

            <Pressable w={'28%'} p={'$2'} px={'$4'} onPress={() => navigate('SlotStats')} softShadow='1' bg={'$white'} borderRadius={'$md'} borderColor='$blue700'>
              <VStack>

                <HStack justifyContent='space-between' alignItems='center'>
                  <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                    68
                  </Heading>
                  <AppIcon MaterialCommunityIconsName='chevron-right' size={25} color={'blue'} />

                </HStack>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  Up by 2%
                </Text>
                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$coolGray600'}>
                  Slot
                </Text>
              </VStack>
            </Pressable>

          </HStack>


          <HStack mx={'$4'} justifyContent='space-between' alignItems='center' >
            <Heading fontSize={'$lg'} bold>Booked Slots</Heading>
            <Pressable onPress={() => navigate('Slot')}>
              <HStack px={'$2'} alignItems='center' space={'xs'} bg={'$blue50'} borderRadius={'$sm'} >
                <Text fontSize={'$xs'} color={'$coolGray600'}>
                  See all
                </Text>
                <AppIcon MaterialCommunityIconsName='chevron-right' size={20} color={'blue'} />
              </HStack>
            </Pressable>
          </HStack>



          <Box borderWidth={'$1'} borderColor='$coolGray300' bg={'$white'} backgroundColor='$white' borderRadius={'$md'} m={'$3'}>
            <Box mb={'$2'} bg={'$blue50'} borderTopRightRadius={'$xl'} borderTopLeftRadius={'$xl'}>
              <HStack mx={'$2'} justifyContent='space-between'>
                <Text fontSize={'$sm'} bold color={'$black'}>
                  1st Half
                </Text>
              </HStack>
            </Box>
            <HStack
              justifyContent='space-between'
              m={'$2'}
            >

              <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  9:00 - 9:15
                </Text>
              </Box>
              <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  9:15 - 9:30
                </Text>
              </Box>
              <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  9:30 - 9:45
                </Text>
              </Box>
              <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  9:45 - 10:00
                </Text>
              </Box>
            </HStack>
            <HStack
              justifyContent='space-between'
              m={'$2'}
            >

              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  10:00 - 10:15
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  10:15 - 10:30
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  10:30 - 10:45
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  10:45 - 11:00
                </Text>
              </Box>
            </HStack>
            <HStack
              justifyContent='space-between'
              m={'$2'}
            >

              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  11:00 - 11:15
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  11:15 - 11:30
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  11:30 - 11:45
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'} bold color={'$black'}>
                  11:45 - 12:00
                </Text>
              </Box>

            </HStack>
            <HStack
              justifyContent='space-between'
              m={'$2'}
            >
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  12:00 - 12:15
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  12:15 - 12:30
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  12:30 - 12:45
                </Text>
              </Box>
              <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                <Text fontSize={'$xs'}>
                  12:45 - 1:00
                </Text>
              </Box>
            </HStack>
          </Box>

          <VStack space={'xs'}>

            <Box borderRadius={'$md'} bg={'$white'} borderColor='$coolGray300' mx={'$1.5'} >
              <Box mb={'$3'} mt={'$1'}>

                <HStack mx={'$4'} justifyContent='space-between' alignItems='center' >
                  <Heading fontSize={'$lg'} bold>Latest Bookings</Heading>
                  <Pressable onPress={() => navigate('AllBookings')}>
                    <HStack px={'$2'} alignItems='center' space={'xs'} bg={'$blue50'} borderRadius={'$sm'} >
                      <Text fontSize={'$xs'} color={'$coolGray600'}>
                        See all
                      </Text>
                      <AppIcon MaterialCommunityIconsName='chevron-right' size={20} color={'blue'} />
                    </HStack>
                  </Pressable>
                </HStack>

                <Pressable onPress={() => setModalVisible(true)} ref={ref} $pressed={{ opacity: 0.5 }} mt={'$2'} mx={'$2'} borderWidth={'$1'} borderRadius={'$md'} borderColor='$blue600'>
                  <Heading textAlign='center' fontSize={'$lg'} color='$blue600' >On Spot Booking</Heading>
                </Pressable>

                <FlatList
                  data={latestBookings}
                  renderItem={({ item }) => (
                    <BookingCard profileData={item}
                    />
                  )}

                  keyExtractor={(item, index) => index.toString()}
                />
              </Box>

            </Box>


            <TopServices topServicesData={topServicesData} />

            <TopProfessionals topProfessionalsData={topProfessionalsData} />

          </VStack>

        </Box>

      </ScrollView>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <AppIcon MaterialCommunityIconsName='chevron-right' size={20} color={'blue'} />

            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


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
