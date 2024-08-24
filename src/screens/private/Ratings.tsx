import React from 'react';
import { Text, HStack, VStack, Image, Pressable, FlatList, Box, Switch } from '@gluestack-ui/themed';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';
import AppIcon from '~/components/core/AppIcon';
import { Heading } from '@gluestack-ui/themed';
import { COLORS, HEIGHT } from '~/styles';


const Ratings: React.FC = () => {
    return (
        <PrivateContainer title={'Rating Management'}>
            <Box bg={'white'} flex={1}>

                {/* <Text textAlign='center' fontSize="$5xl" p={'$8'} mt={'$8'} color={'$orange500'} bold>
                    4.5
                </Text>
                <Text textAlign='center' fontSize="$xs" bold >
                    Overall Store Ratings
                </Text> */}

                <Box h={HEIGHT * 0.3} mb={'$8'} mt={'$5'} >
                    <Box m={'$5'}>

                        <HStack justifyContent='center' space={'xs'}>
                            <Heading textAlign='center' fontSize={'$3xl'} color={'$orange500'}>
                                4.5
                            </Heading>
                            <AppIcon AntDesignName='star' size={25} color={'orange'} />

                        </HStack>
                        <Text mt={'$2'} color="black" textAlign='center' fontSize={'$lg'} bold>
                            Overall Ratings
                        </Text>

                        <HStack space='xs' justifyContent='center'>
                            <Text color="$coolGray400" alignItems={'center'} mx={'$2'} py={'$1'} fontSize={'$sm'} bold>
                                Hide Overall Store Ratings
                            </Text>

                            <Switch mx={'$2'} size="sm" isDisabled={false} />

                        </HStack>
                    </Box>
                </Box>




                <HStack mx={'$2'} justifyContent='space-between'>
                    <Text color="$blue500" alignItems={'center'} mx={'$2'} py={'$1'} fontSize={'$lg'} bold>
                        Hide Store Ratings
                    </Text>
                    <Switch mx={'$2'} size="md" isDisabled={false} />
                </HStack>


                <Box m={'$3'} borderWidth={'$1'} borderColor='$orange400' borderRadius={'$md'}>
                    <Box borderTopRightRadius="$md" borderTopLeftRadius="$md" bg={'$orange100'}>

                        <HStack justifyContent="space-between" mx={'$4'} >

                            <Text fontSize="$xs" mb="$1" bold >
                                Store Ratings
                            </Text>
                            <HStack space={'xs'} alignItems='center'>
                                <Text px={'$1'} py={'$0.5'} fontSize="$xs" bold color={'$orange500'} >
                                    4.3
                                </Text>
                                <AppIcon AntDesignName='star' size={16} color={'orange'} />
                            </HStack>

                        </HStack>
                    </Box>
                    <Pressable
                        bgColor={'#FFFF'}
                        mx={'$2'}
                        overflow='hidden'
                    >
                        <HStack
                            alignItems='center'
                            backgroundColor='$white'
                            borderTopRightRadius={'$md'}
                            borderTopLeftRadius={'$2xl'}
                        >
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'sm'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <HStack alignItems='center' justifyContent='space-between' flex={1}>
                                <VStack p={'$2'} alignSelf='flex-end' space={'sm'}>
                                    <Text fontSize="$lg" bold>
                                        {'Amulya Behera' || 'Not Available'}
                                    </Text>
                                    <Text fontSize="$md" >
                                        {'Nayaplli,bhubaneswar' || 'Not Available'}
                                    </Text>
                                </VStack>
                                <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                                    <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                                        4.3
                                    </Text>
                                </Pressable>
                            </HStack>
                        </HStack>
                    </Pressable>

                </Box>


                <HStack justifyContent='space-between'>
                    <Text color="$blue500" alignItems={'center'} mx={'$4'} py={'$1'} fontSize={'$lg'} bold>
                        Hide Professional Ratings
                    </Text>

                    <Switch mx={'$2'} size="md" isDisabled={false} />

                </HStack>


                <Box m={'$3'} borderWidth={'$1'}
                    borderColor='$orange400'

                    borderRadius={'$md'}>
                    <Box borderTopRightRadius="$md" borderTopLeftRadius="$md" bg={'$orange100'}>

                        <HStack justifyContent="space-between" mx={'$4'} >

                            <Text fontSize="$xs" mb="$1" bold >
                                Average Professional Ratings
                            </Text>
                            <HStack space={'xs'} alignItems='center'>
                                <Text px={'$1'} py={'$0.5'} fontSize="$xs" bold color={'$orange500'} >
                                    4.7
                                </Text>
                                <AppIcon AntDesignName='star' size={16} color={'orange'} />
                            </HStack>

                        </HStack>
                    </Box>
                    <Pressable
                        bgColor={'#FFFF'}
                        mx={'$2'}
                        borderBottomWidth={'$1'}
                        borderColor='$orange200'
                        overflow='hidden'
                        mt={'$4'}
                    >
                        <HStack
                            alignItems='center'
                            backgroundColor='$white'
                            borderTopRightRadius={'$md'}
                            borderTopLeftRadius={'$2xl'}
                        >
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'xs'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <HStack alignItems='center' justifyContent='space-between' flex={1}>
                                <VStack p={'$2'} alignSelf='flex-end'>
                                    <Text fontSize="$md" bold>
                                        {'Amulya Behera' || 'Not Available'}
                                    </Text>
                                    <Text fontSize="$xs" >
                                        {'454513655' || 'Not Available'}
                                    </Text>
                                </VStack>
                                <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                                    <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                                        4.5
                                    </Text>
                                </Pressable>
                            </HStack>
                        </HStack>
                    </Pressable>
                    <Pressable
                        bgColor={'#FFFF'}
                        mx={'$2'}
                        borderBottomWidth={'$1'}
                        borderColor='$orange200'
                        overflow='hidden'
                        mt={'$4'}
                    >
                        <HStack
                            alignItems='center'
                            backgroundColor='$white'
                            borderTopRightRadius={'$md'}
                            borderTopLeftRadius={'$2xl'}
                        >
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'xs'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <HStack alignItems='center' justifyContent='space-between' flex={1}>
                                <VStack p={'$2'} alignSelf='flex-end'>
                                    <Text fontSize="$md" bold>
                                        {'Sumnta Behera' || 'Not Available'}
                                    </Text>
                                    <Text fontSize="$xs" >
                                        {'123456789' || 'Not Available'}
                                    </Text>
                                </VStack>
                                <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                                    <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                                        4.9
                                    </Text>
                                </Pressable>
                            </HStack>
                        </HStack>
                    </Pressable>
                    <Pressable
                        bgColor={'#FFFF'}
                        mx={'$2'}
                        borderColor='$coolGray400'
                        overflow='hidden'
                        mt={'$4'}
                    >
                        <HStack
                            alignItems='center'
                            backgroundColor='$white'
                            borderTopRightRadius={'$md'}
                            borderTopLeftRadius={'$2xl'}
                        >
                            <Image
                                alignSelf='flex-start'
                                source={{
                                    uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                                }}
                                alt=""
                                borderRadius={10}
                                size={'xs'}
                                p={'$2'}
                                m={'$2'}
                            />
                            <HStack alignItems='center' justifyContent='space-between' flex={1}>
                                <VStack p={'$2'} alignSelf='flex-end'>
                                    <Text fontSize="$md" bold>
                                        {'Sumnta Behera' || 'Not Available'}
                                    </Text>
                                    <Text fontSize="$xs">
                                        {'123456789' || 'Not Available'}
                                    </Text>
                                </VStack>
                                <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                                    <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                                        4.9
                                    </Text>
                                </Pressable>
                            </HStack>
                        </HStack>
                    </Pressable>
                </Box>
            </Box>

        </PrivateContainer>
    );
};

export default Ratings;
