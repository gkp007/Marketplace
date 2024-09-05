import React, { useState } from 'react';
import {
    Text,
    HStack,
    Heading,
    Box,
    VStack,
    ScrollView,
    Pressable
} from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import Btn from '~/components/core/Btn';
import { PrivateContainer } from '~/components/shared';
import { useNavigation } from '@react-navigation/native';
import { StackAndTabType } from '~/routes/private/types';


const BusinessInfo = () => {

    const [showModal, setShowModal] = useState(false)
    const ref = React.useRef(null)

    const { navigate, goBack } = useNavigation<StackAndTabType>();


    return (
        <PrivateContainer title={'Profile'}  >
            <ScrollView backgroundColor='$white' h={'$full'} flex={1}>
                <Box m={'$2'} >
                    <Pressable alignSelf='flex-end' mx={'$2'} onPress={() => navigate('BasicProfileEdit')}>
                        <AppIcon FontAwesomeName='edit' color={'blue'} />
                    </Pressable>
                    <Box m={'$1'} my={'$2'} borderWidth={'$1'} borderColor='$coolGray300' borderRadius={'$xl'}>

                        <Box bg={'$blue50'} borderTopLeftRadius={'$xl'} borderTopRightRadius={'$xl'}>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <Heading mx={'$2'} fontSize={'$lg'} color={'$black'} >
                                    Personal Details
                                </Heading>
                            </HStack>
                        </Box>
                        <VStack space='3xl' borderRadius={'$sm'} p={'$3'} >
                            <VStack space={'lg'}>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Name
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        Robert Jr.
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Mobile
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        7758465215
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Email
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        demo@gmail.com
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Gender
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        Male
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Aadhar
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        9668844526547
                                    </Text>
                                </HStack>


                            </VStack>

                        </VStack>

                    </Box>
                    <Box m={'$1'} my={'$2'} borderWidth={'$1'} borderColor='$coolGray300' borderRadius={'$xl'}>
                        <Box bg={'$blue50'} borderTopLeftRadius={'$xl'} borderTopRightRadius={'$xl'}>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <Heading mx={'$2'} fontSize={'$lg'} color={'$black'} >
                                    Store Details
                                </Heading>
                            </HStack>
                        </Box>
                        <VStack space='3xl' borderRadius={'$sm'} p={'$3'} >
                            <VStack space={'lg'}>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Store Name
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        Scissor
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Store Type
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        Parlour & Spa
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        Location
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        Nayapalli, bhubaneswar
                                    </Text>
                                </HStack>
                                <HStack justifyContent='space-between'>
                                    <Text fontSize={'$md'} bold w={'25%'}  >
                                        GST Number
                                    </Text>
                                    <Text w={'5%'}>
                                        :
                                    </Text >
                                    <Text w={'70%'}>
                                        87357BGF756BVG69
                                    </Text>
                                </HStack>

                            </VStack>

                        </VStack>
                    </Box>

                    {/* <Box my={'$5'}>
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
                        </Box> */}

                </Box>
            </ScrollView>
        </PrivateContainer>
    );
};


export default BusinessInfo;
