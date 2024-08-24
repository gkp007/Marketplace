import React, { useState } from 'react';
import {
    Text,
    HStack,
    Heading,
    Box,
    VStack,
    ScrollView,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Icon,
    CloseIcon,
    ButtonText,
    Modal,
    ModalBackdrop,
    Pressable
} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { Switch } from '@gluestack-ui/themed';
import moment from 'moment';
import DateTimePickerModal from "react-native-modal-datetime-picker";


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
    price: string;
};

const BusinessInfo = () => {
    const [showModal, setShowModal] = useState(false);
    const ref = React.useRef(null);


    const [openingTime, setOpeningTime] = useState(null);
    const [closingTime, setClosingTime] = useState(null);
    const [isOpeningTimePickerVisible, setIsOpeningTimePickerVisible] = useState(false);
    const [isClosingTimePickerVisible, setIsClosingTimePickerVisible] = useState(false);

    const showOpeningTimePicker = () => {
        setIsOpeningTimePickerVisible(true);
    };

    const hideOpeningTimePicker = () => {
        setIsOpeningTimePickerVisible(false);
    };

    const handleOpeningTimeConfirm = (time: React.SetStateAction<null>) => {
        setOpeningTime(time);
        hideOpeningTimePicker();
    };

    const showClosingTimePicker = () => {
        setIsClosingTimePickerVisible(true);
    };

    const hideClosingTimePicker = () => {
        setIsClosingTimePickerVisible(false);
    };

    const handleClosingTimeConfirm = (time: React.SetStateAction<null>) => {
        setClosingTime(time);
        hideClosingTimePicker();
    };

    return (
        <>

            <Box m={'$2'} backgroundColor='$white' flex={1}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack justifyContent='space-between' mb={'$4'}>

                        <Box m={'$1'} mb={'$4'}>
                            <Heading fontSize={'$xl'} color={'$black'}>
                                Slot Management
                            </Heading>
                        </Box>

                        <HStack justifyContent={'space-between'} alignItems={'center'} m={'$1'} mb={'$4'}>
                            <Heading fontSize={'$lg'} color={'$black'}>
                                Working and break Time
                            </Heading>

                            <HStack space={'xs'} alignItems={'center'} bg={'$blue50'} borderRadius={'$full'} px={'$2'}>

                                <Pressable $pressed={{ opacity: 0.5 }} onPress={() => setShowModal(true)}>
                                    <Text fontSize={'$sm'} color={'$blue500'} bold >
                                        Update
                                    </Text>
                                </Pressable>
                                <AppIcon EvilIconsName='chevron-right' size={20} color={'blue'} />
                            </HStack>

                        </HStack>

                        <HStack space={'md'} alignItems='center' mb={'$3'}>
                            <VStack p={'$2'} px={'$4'} borderWidth={'$1'} bg={'$green100'} borderRadius={'$md'} borderColor='$green700'>
                                <HStack justifyContent='space-between' alignItems='center'>
                                    <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                                        05
                                    </Heading>
                                    <AppIcon IoniconsName='checkmark' size={25} color={'green'} />

                                </HStack>
                                <Text fontSize={'$xs'} bold color={'$black'}>
                                    March
                                </Text>
                                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$green700'}>
                                    Sunday
                                </Text>
                            </VStack>
                            <VStack p={'$2'} px={'$4'} borderWidth={'$1'} borderRadius={'$md'} borderColor='$green700'>
                                <HStack justifyContent='space-between' alignItems='center'>
                                    <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                                        06
                                    </Heading>
                                    <AppIcon IoniconsName='checkmark' size={25} color={'green'} />

                                </HStack>
                                <Text fontSize={'$xs'} bold color={'$black'}>
                                    March
                                </Text>
                                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$green700'}>
                                    Monday
                                </Text>
                            </VStack>
                            <VStack p={'$2'} px={'$4'} borderWidth={'$1'} borderRadius={'$md'} borderColor='$red600'>
                                <HStack justifyContent='space-between' alignItems='center'>
                                    <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                                        07
                                    </Heading>
                                    <AppIcon IoniconsName='close-outline' size={30} color={'red'} />

                                </HStack>
                                <Text fontSize={'$xs'} bold color={'$black'}>
                                    March
                                </Text>
                                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$red500'}>
                                    Tuesday
                                </Text>
                            </VStack>
                            <VStack p={'$2'} px={'$4'} borderWidth={'$1'} borderRadius={'$md'} borderColor='$green700'>
                                <HStack justifyContent='space-between' alignItems='center'>
                                    <Heading textAlign='left' fontSize={'$2xl'} bold color={'$black'}>
                                        08
                                    </Heading>
                                    <AppIcon IoniconsName='checkmark' size={25} color={'green'} />

                                </HStack>
                                <Text fontSize={'$xs'} bold color={'$black'}>
                                    March
                                </Text>
                                <Text mt={'$1'} textAlign='left' fontSize={'$lg'} bold color={'$green700'}>
                                    Wednesday
                                </Text>
                            </VStack>
                        </HStack>

                        <HStack m={'$1'} mb={'$5'} justifyContent='space-between' alignItems='center'>
                            <Text fontSize={'$md'} bold color={'$black'}>
                                Block this Day
                            </Text>
                            <Switch size="md" isDisabled={false} />
                        </HStack>

                        <HStack space={'lg'} mb={'$3'} m={'$1'}>
                            <HStack space={'sm'} alignItems='center' >

                                <Box h={'$4'} w={'$8'} borderWidth={'$1'} borderColor='$black' borderRadius={'$sm'} bg={'$coolGray300'}>

                                </Box>
                                <Text bold fontSize={'$md'} color={'$black'}>
                                    Booked
                                </Text>
                            </HStack>
                            <HStack space={'sm'} alignItems='center'>

                                <Box h={'$4'} w={'$8'} borderRadius={'$sm'} borderWidth={'$1'} borderColor='$black' bg={'$white'}>

                                </Box>
                                <Text bold fontSize={'$md'} color={'$black'}>
                                    Available
                                </Text>
                            </HStack>

                        </HStack>
                        <Box borderWidth={'$1'} borderColor={'$blue300'} backgroundColor='$white' borderRadius={'$md'}>
                            <Box mb={'$2'} bg={'$blue50'} borderTopRightRadius={'$xl'} borderTopLeftRadius={'$xl'}>
                                <HStack mx={'$2'} justifyContent='space-between'>
                                    <Text fontSize={'$sm'} bold color={'$black'}>
                                        1st Half
                                    </Text>
                                    <Switch size="sm" isDisabled={false} />
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
                        <Box mt={'$4'} borderWidth={'$1'} borderColor={'$blue300'} backgroundColor='$white' borderRadius={'$md'}>
                            <Box mb={'$2'} bg={'$blue50'} borderTopRightRadius={'$xl'} borderTopLeftRadius={'$xl'}>
                                <HStack mx={'$2'} justifyContent='space-between'>
                                    <Text fontSize={'$sm'} bold color={'$black'}>
                                        2nd Half
                                    </Text>
                                    <Switch size="sm" isDisabled={false} />
                                </HStack>
                            </Box>

                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        2:00 - 2:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        2:15 - 2:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        2:30 - 2:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        2:45 - 3:00
                                    </Text>
                                </Box>



                            </HStack>
                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        3:00 - 3:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        3:15 - 3:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        3:30 - 3:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        3:45 - 4:00
                                    </Text>
                                </Box>



                            </HStack>
                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        4:00 - 4:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        4:15 - 4:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        4:30 - 4:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        4:45 - 5:00
                                    </Text>
                                </Box>



                            </HStack>
                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        5:00 - 5:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        5:15 - 5:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        5:30 - 5:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        5:45 - 6:00
                                    </Text>
                                </Box>



                            </HStack>



                        </Box>
                        <Box mt={'$4'} borderWidth={'$1'} borderColor={'$blue300'} backgroundColor='$white' borderRadius={'$md'}>
                            <Box mb={'$2'} bg={'$blue50'} borderTopRightRadius={'$xl'} borderTopLeftRadius={'$xl'}>
                                <HStack mx={'$2'} justifyContent='space-between'>
                                    <Text fontSize={'$sm'} bold color={'$black'}>
                                        Night Time
                                    </Text>
                                    <Switch size="sm" isDisabled={false} />
                                </HStack>
                            </Box>

                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        6:00 - 6:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        6:15 - 6:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} bg={'$coolGray300'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        6:30 - 6:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$3'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        6:45 - 7:00
                                    </Text>
                                </Box>



                            </HStack>
                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        7:00 - 7:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        7:15 - 7:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        7:30 - 7:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'}>
                                        7:45 - 8:00
                                    </Text>
                                </Box>



                            </HStack>
                            <HStack
                                justifyContent='space-between'
                                m={'$2'}
                            >

                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        9:00 - 9:15
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        9:15 - 9:30
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        9:30 - 9:45
                                    </Text>
                                </Box>
                                <Box p={'$1'} px={'$2'} bg={'$coolGray300'} borderWidth={'$1'} borderRadius={'$xs'} borderColor='$blueGray300'>
                                    <Text fontSize={'$xs'} bold color={'$black'}>
                                        9:45 - 10:00
                                    </Text>
                                </Box>
                            </HStack>
                        </Box>

                    </VStack>

                </ScrollView>

            </Box >

            <DateTimePickerModal
                isVisible={isOpeningTimePickerVisible}
                mode="time"
                onConfirm={handleOpeningTimeConfirm}
                onCancel={hideOpeningTimePicker}
            />
            <DateTimePickerModal
                isVisible={isClosingTimePickerVisible}
                mode="time"
                onConfirm={handleClosingTimeConfirm}
                onCancel={hideClosingTimePicker}
            />

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} finalFocusRef={ref}>
                <ModalBackdrop />
                <ModalContent bg={'$white'}>
                    <ModalHeader>
                        <Heading size="lg">Working Timing</Heading>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>

                    <Text fontSize={'$md'} m={'$2'} mb={'$3'} mx={'$4'} bold>
                        Open/Close time
                    </Text>
                    <Box backgroundColor='$white' mx={'$4'} borderColor={'$blue300'} borderRadius={'$xl'}>
                        <Box>

                            <HStack justifyContent='space-between'>
                                <Pressable
                                    w={WIDTH * 0.33}
                                    py={'$1'}
                                    borderWidth={'$1'}
                                    borderColor={openingTime ? COLORS.theme[600] : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={showOpeningTimePicker}
                                >
                                    <VStack space={'xs'} alignItems={'center'}>
                                        <Text fontSize={'$sm'} bold color={openingTime ? '$coolGray500' : '$coolGray500'}>Opening Time</Text>
                                        {openingTime && (
                                            <Text fontSize={'$sm'} bold>{moment(openingTime).format('LT')}</Text>
                                        )}
                                    </VStack>
                                </Pressable>
                                <Pressable
                                    w={WIDTH * 0.33}
                                    py={'$1'}
                                    borderWidth={'$1'}
                                    borderColor={closingTime ? COLORS.theme[600] : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={showClosingTimePicker}
                                >
                                    <VStack space={'xs'} alignItems={'center'}>
                                        <Text fontSize={'$sm'} bold color={closingTime ? '$coolGray500' : '$coolGray500'}>Closing Time</Text>
                                        {closingTime && (
                                            <Text fontSize={'$sm'} bold>{moment(closingTime).format('LT')}</Text>
                                        )}
                                    </VStack>
                                </Pressable>
                            </HStack>

                        </Box>
                    </Box>
                    <Text fontSize={'$md'} m={'$2'} mt={'$5'} mb={'$3'} mx={'$4'} bold>
                        Break time (If any)
                    </Text>
                    <Box backgroundColor='$white' mx={'$4'} borderColor={'$blue300'} borderRadius={'$xl'}>
                        <Box>

                            <HStack justifyContent='space-between'>
                                <Pressable
                                    w={WIDTH * 0.33}
                                    py={'$1'}
                                    borderWidth={'$1'}
                                    borderColor={openingTime ? COLORS.theme[600] : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={showOpeningTimePicker}
                                >
                                    <VStack space={'xs'} alignItems={'center'}>
                                        <Text fontSize={'$sm'} bold color={openingTime ? '$coolGray500' : '$coolGray500'}>From</Text>
                                        {openingTime && (
                                            <Text fontSize={'$sm'} bold>{moment(openingTime).format('LT')}</Text>
                                        )}
                                    </VStack>
                                </Pressable>
                                <Pressable
                                    w={WIDTH * 0.33}
                                    py={'$1'}
                                    borderWidth={'$1'}
                                    borderColor={closingTime ? COLORS.theme[600] : '$coolGray300'}
                                    borderRadius={'$md'}
                                    onPress={showClosingTimePicker}
                                >
                                    <VStack space={'xs'} alignItems={'center'}>
                                        <Text fontSize={'$sm'} bold color={closingTime ? '$coolGray500' : '$coolGray500'}>To</Text>
                                        {closingTime && (
                                            <Text fontSize={'$sm'} bold>{moment(closingTime).format('LT')}</Text>
                                        )}
                                    </VStack>
                                </Pressable>
                            </HStack>

                        </Box>
                    </Box>
                    <ModalFooter mt={'$5'}>
                        <Button variant="outline" size="sm" action="secondary" mr="$3" onPress={() => setShowModal(false)}>
                            <ButtonText>Cancel</ButtonText>
                        </Button>
                        <Button size="sm" action="positive" borderWidth="$0" onPress={() => setShowModal(false)}>
                            <ButtonText>Confirm</ButtonText>
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
};

export default BusinessInfo;
