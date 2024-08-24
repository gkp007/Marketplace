import React, { useMemo, useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack,
    CheckboxGroup,
    Checkbox,
    CheckboxIndicator,
    CheckboxIcon,
    CheckboxLabel,
    CheckIcon,
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
    ModalBackdrop

} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppInput from '~/components/core/AppInput';
import { useForm } from 'react-hook-form';
import AppIcon from '~/components/core/AppIcon';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import Btn from '~/components/core/Btn';

type FormInput = {
    key: string;
    label?: string;
    placeholder: string;
    icon: any;
    rules: Object;
    inputProps?: any;
};

const BusinessInfo = () => {


    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const formInputs: FormInput[] = useMemo(
        () => [
            {
                key: 'OwnerName',
                label: undefined,
                color: '$white',
                placeholder: 'Business Owner Full Name',
                icon: { FontAwesomeName: 'user-o' },
                rules: {
                    required: 'Owner name is required',
                    pattern: {
                        minLength: 2,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    variant: 'underlined',
                },

            },
            {
                key: 'BusinessName',
                label: undefined,
                color: '$white',
                placeholder: 'Salon/Parlour Name',
                icon: { MaterialIconsName: 'storefront' },
                rules: {
                    required: 'Business Name is required',
                    pattern: {
                        minLength: 5,
                    },
                },
                inputProps: {
                    autoCapitalize: 'none',
                    marginBottom: '2',
                },
            },
        ],
        [],
    );


    const [values, setValues] = useState(["sunday", "monday", "tuesday", "wednesday", "friday", "saturday"]);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(null);

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

            <ScrollView>
                <Box m={'$2'} backgroundColor='$coolGray100'>
                    <VStack justifyContent='space-between'>

                        <HStack justifyContent={'space-between'} alignItems={'center'} m={'$1'}>
                            <Heading fontSize={'$xl'} color={COLORS.theme[600]} >
                                Business Information
                            </Heading>

                            <AppIcon IoniconsName='storefront-outline' color={COLORS.theme[600]} size={30} />
                        </HStack>


                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space='xs' justifyContent={'space-between'} alignItems={'center'}>
                                    <Heading fontSize={'$lg'} bold>Basic Details</Heading>
                                    <AppIcon OcticonsName='note' size={22} />

                                </HStack>
                                <Text
                                    fontSize={'$xs'}
                                    w={'100%'}
                                    color={'$coolGray600'}
                                >
                                    To locate your store we need following details.
                                </Text>
                                <VStack>
                                    {formInputs.map(input => (
                                        <AppInput
                                            input={input}
                                            key={input.key}
                                            control={control}
                                            errorMessage={errors?.[input?.key]?.message}
                                        />
                                    ))}
                                    <Pressable
                                        bgColor='$white'
                                        rounded={'$full'}
                                        h={'$12'}
                                        w={'$full'}
                                        mt={'$6'}
                                        borderWidth={'$1'}
                                        borderColor='$blue300'
                                    >
                                        <HStack ml={'$5'} alignItems='center' justifyContent='space-between' height="100%">
                                            <Text color={COLORS.theme[600]} bold>Add Store Location</Text>
                                            <Box mr={'$5'}>
                                                <AppIcon MaterialCommunityIconsName='chevron-triple-right' color={COLORS.theme[600]} />
                                            </Box>

                                        </HStack>
                                    </Pressable>

                                </VStack>
                            </Box>
                        </Box>


                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>
                                <HStack space={'xs'} justifyContent={'space-between'} alignItems={'center'} mb={'$3'}>
                                    <Heading fontSize={'$lg'} bold>Select working days</Heading>
                                    <AppIcon IoniconsName='calendar-number-outline' size={22} />

                                </HStack>

                                <CheckboxGroup
                                    value={values}
                                    onChange={(keys) => {
                                        setValues(keys)
                                    }}
                                >

                                    <HStack justifyContent='space-between' mx={'$2'}>
                                        <VStack space="3xl">
                                            <Checkbox value="sunday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Sunday</CheckboxLabel>
                                            </Checkbox>
                                            <Checkbox value="monday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Monday</CheckboxLabel>
                                            </Checkbox>
                                            <Checkbox value="tuesday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Tuesday</CheckboxLabel>
                                            </Checkbox>
                                            <Checkbox value="wednesday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Wednesday</CheckboxLabel>
                                            </Checkbox>


                                        </VStack>
                                        <VStack space="3xl">
                                            <Checkbox value="thursday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Thursday</CheckboxLabel>
                                            </Checkbox>
                                            <Checkbox value="friday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Friday</CheckboxLabel>
                                            </Checkbox>
                                            <Checkbox value="saturday">
                                                <CheckboxIndicator mr="$2">
                                                    <CheckboxIcon as={CheckIcon} />
                                                </CheckboxIndicator>
                                                <CheckboxLabel>Saturday</CheckboxLabel>
                                            </Checkbox>
                                        </VStack>


                                    </HStack>
                                </CheckboxGroup>
                            </Box>
                        </Box>


                        <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                            <Box m={'$2'} my={'$3'} mb={'$5'}>

                                <HStack justifyContent={'space-between'} space={'xs'} alignItems={'center'} mb={'$3'}>
                                    <Heading fontSize={'$lg'} bold>Opening closing time</Heading>
                                    <AppIcon IoniconsName='time-outline' size={22} />
                                </HStack>

                                <HStack justifyContent='space-between'>
                                    <Pressable
                                        w={WIDTH * 0.4}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={openingTime ? COLORS.theme[600] : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={showOpeningTimePicker}
                                    >
                                        <VStack space={'xs'} alignItems={'center'}>
                                            <Text fontSize={'$md'} bold color={openingTime ? '$coolGray500' : '$coolGray500'}>Opening Time</Text>
                                            {openingTime && (
                                                <Text bold>{moment(openingTime).format('LT')}</Text>
                                            )}
                                        </VStack>
                                    </Pressable>
                                    <Pressable
                                        w={WIDTH * 0.4}
                                        py={'$2'}
                                        borderWidth={'$1'}
                                        borderColor={closingTime ? COLORS.theme[600] : '$coolGray300'}
                                        borderRadius={'$md'}
                                        onPress={showClosingTimePicker}
                                    >
                                        <VStack space={'xs'} alignItems={'center'}>
                                            <Text fontSize={'$md'} bold color={closingTime ? '$coolGray500' : '$coolGray500'}>Closing Time</Text>
                                            {closingTime && (
                                                <Text bold>{moment(closingTime).format('LT')}</Text>
                                            )}
                                        </VStack>
                                    </Pressable>
                                </HStack>

                            </Box>
                        </Box>

                        <Box my={'$5'}>
                            <Btn
                                bg={COLORS.theme[600]}
                                _text={{ color: 'white', fontSize: '$sm' }}
                                onPress={() => setShowModal(true)} ref={ref}
                            // onPress={handleSubmit(handleLoginWithGmail)}
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

                    </VStack>

                </Box>



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
                                <Icon as={CloseIcon} />
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
            </ScrollView>
        </>
    );
};


export default BusinessInfo;
