import React, { } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Heading,
    Box,
    VStack,
    ScrollView,
    Image
} from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
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

    const ref = React.useRef(null)

    return (



        <VStack m={'$2'} backgroundColor='$white' flex={1} justifyContent={'space-between'}>

            <VStack justifyContent='space-between'>

                <HStack justifyContent={'space-between'} alignItems={'center'} m={'$1'}>
                    <Heading fontSize={'$xl'} color={'black'} >
                        Manage gallery
                    </Heading>

                </HStack>


                <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                    <Box m={'$2'} my={'$3'} mb={'$5'}>

                        <HStack justifyContent={'space-between'} space={'xs'} alignItems={'center'} mb={'$3'}>
                            <Heading fontSize={'$lg'} bold>Add photo</Heading>
                            <AppIcon IoniconsName='images-outline' size={22} />
                        </HStack>

                        <HStack>
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://d2zdpiztbgorvt.cloudfront.net/region1/ca/15367/biz_photo/86d1e51f95f24cfeb0d003ff2c9029-james-barbershop-biz-photo-491df318b64f4690979c1cbfb31484-booksy.jpeg?size=640x427",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'sm'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://assets-global.website-files.com/650b8bfd71161b4232908190/651106b37935fa9659a4ed41_20200703-RDR00002%20(2).webp",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'sm'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://www.lvsbarbershop.com/wp-content/uploads/2021/03/northeast_minneapolis_barbershop-scaled.jpg",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'sm'}
                                p={'$2'}
                                m={'$2'}
                            />
                        </HStack>

                        <HStack justifyContent='center'>
                            <Pressable
                                w={WIDTH * 0.92}
                                py={'$2'}
                                borderWidth={'$1'}
                                borderColor={'$coolGray300'}
                                borderRadius={'$md'}
                            >
                                <VStack space={'xs'} alignItems={'center'}>
                                    <Text fontSize={'$md'} bold color={'$coolGray500'}>Click here to add photo</Text>

                                </VStack>
                            </Pressable>

                        </HStack>

                    </Box>
                    <Box softShadow='1' backgroundColor='$white' borderColor={'$blue300'} borderRadius={'$xl'} mt={'$4'}>
                        <Box m={'$2'} my={'$3'} mb={'$5'}>

                            <HStack justifyContent={'space-between'} space={'xs'} alignItems={'center'} mb={'$3'}>
                                <Heading fontSize={'$lg'} bold>Add Video</Heading>
                                <AppIcon IoniconsName='images-outline' size={22} />
                            </HStack>

                            <HStack justifyContent='center'>
                                <Pressable
                                    w={WIDTH * 0.92}
                                    py={'$2'}
                                    borderWidth={'$1'}
                                    borderColor={'$coolGray300'}
                                    borderRadius={'$md'}
                                >
                                    <VStack space={'xs'} alignItems={'center'}>
                                        <Text fontSize={'$md'} bold color={'$coolGray500'}>Click here to add video</Text>

                                    </VStack>
                                </Pressable>

                            </HStack>

                        </Box>
                    </Box>



                </Box>



            </VStack>

            <Btn
                bg={COLORS.theme[600]}
                _text={{ color: 'white', fontSize: '$sm' }}
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

        </VStack>


    );
};


export default BusinessInfo;
