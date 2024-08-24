import {
    AvatarImage,
    Divider,
    FlatList,
    ScrollView,
} from '@gluestack-ui/themed';
import { AvatarFallbackText } from '@gluestack-ui/themed';
import { Avatar } from '@gluestack-ui/themed';
import {
    Box,
    Heading,
    Text,
    HStack,
    VStack,
    Pressable,
} from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import AppIcon, { IconProps } from '~/components/core/AppIcon';
import useAuth from '~/hooks/useAuth';
import { StackAndTabType } from '~/routes/private/types';
import { COLORS } from '~/styles';
export default function Profile() {
    const { navigate, goBack } = useNavigation<StackAndTabType>();

    function renderItem({
        item,
        index,
    }: {
        item: (typeof listData)[0];
        index: number;
    }) {
        const isLastItem = index === listData.length - 1;

        return (

            <Pressable
                onPress={item.onPress}
                py={'$2'}
                px={'$2'}
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                borderBottomColor="gray.200">
                <HStack space={'xs'} alignItems="center">
                    {item.leftIcon && (
                        <HStack alignItems="center">
                            <Box rounded={'$full'} bg={'$blue50'} py={'$2'} px={'$2'}>
                                <AppIcon
                                    FeatherName={item.leftIcon?.FeatherName}
                                    size={item.leftIcon?.size}
                                    color={item.leftIcon?.color}
                                />
                            </Box>

                            {/* <Divider
                  mx={'$1'}
                  py={'$3'}
                  orientation="vertical"
                  bgColor="gray"
                /> */}
                        </HStack>
                    )}
                    <VStack ml={'$3'}>
                        <Text fontSize="$md" bold >
                            {item.title}
                        </Text>
                        {/* {item.subtitle && <Text fontSize="$xs">{item.subtitle}</Text>} */}
                    </VStack>
                </HStack>
                <Box mr={'$4'}>
                    <AppIcon FeatherName="chevron-right" color={'blue'} size={18} />
                </Box>
            </Pressable>


        );
    }

    const { logout } = useAuth();

    const listData: {
        title: string;
        subtitle?: string;
        avatar?: string;
        leftIcon?: IconProps & { backgroundColor?: string };
        isHeading?: boolean;
        onPress?: () => void;
    }[] = [
            {
                title: 'Profile',
                leftIcon: {
                    FeatherName: 'user',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber400',
                },
                subtitle: 'Manage Profile',
                // onPress: () => navigate('AllOrders')
            },
            {
                title: 'Bookings',
                leftIcon: {
                    FeatherName: 'align-center',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                // onPress: () => navigate('AllOrders')
            },
            {
                title: 'Employee Management',
                leftIcon: {
                    FeatherName: 'users',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Notification',
                onPress: () => navigate('EmployeeManagement')
            },
            {
                title: 'Manage Store',
                leftIcon: {
                    FeatherName: 'home',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Add or remove employees',
                onPress: () => navigate('ManageStore')
            },
            {
                title: 'Gallery',
                leftIcon: {
                    FeatherName: 'image',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('Gallery')
            },
            {
                title: 'All Transaction',
                leftIcon: {
                    FeatherName: 'arrow-down-right',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('TransactionHistory')
            },
            {
                title: 'Block List',
                leftIcon: {
                    FeatherName: 'x-square',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('BlockList')
            },
            {
                title: 'Help',
                leftIcon: {
                    FeatherName: 'alert-circle',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('Help')
            },
            {
                title: 'Ratings',
                leftIcon: {
                    FeatherName: 'star',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('Ratings')
            },
            {
                title: 'Services',
                leftIcon: {
                    FeatherName: 'box',
                    color: COLORS.theme[600],
                    size: 25,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Chats',
                onPress: () => navigate('Services')
            },
        ];

    const listData2: {
        title: string;
        subtitle?: string;
        avatar?: string;
        leftIcon?: IconProps & { backgroundColor?: string };
        isHeading?: boolean;
        onPress?: () => void;
    }[] = [
            {
                title: 'Help & FAQ',
                leftIcon: {
                    FeatherName: 'help-circle',
                    color: COLORS.theme[600],
                    size: 22,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Get help',
                // onPress: () => navigate('Address')
            },
            {
                title: 'Delete account',
                leftIcon: {
                    FeatherName: 'help-circle',
                    color: COLORS.theme[600],
                    size: 22,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Get help',
                // onPress: () => navigate('Address')
            },
            {
                title: 'Business Details',
                leftIcon: {
                    FeatherName: 'bell',
                    color: COLORS.theme[600],
                    size: 22,
                    backgroundColor: '$amber200',
                },
                subtitle: 'Manage Language',
                // onPress: () => navigate('Wallet')
            },
        ];

    return (

        <Box bg={'$white'} flex={1} mb={'$16'}>
            <StatusBar animated backgroundColor={COLORS.theme[600]} />
            <Box
                bg={COLORS.theme[600]}
                h={'10%'}
            // zIndex={-1}
            >
                <VStack alignItems="center" space={'xs'}>
                    <Pressable
                        // justifyContent={'center'}
                        // alignItems={'center'}
                        borderWidth={'$2'}
                        borderColor={COLORS.theme[600]}
                        borderRadius={'$full'}

                        top={'$5'}
                    // zIndex={1}
                    >
                        <Avatar size="xl" p={'$0.5'} bg={'$white'}>
                            <AvatarFallbackText>Scissors Salon</AvatarFallbackText>
                            <AvatarImage
                                size="2xl"
                                alt="Scissors Salon"
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                                }}
                            />
                        </Avatar>
                    </Pressable>
                </VStack>
            </Box>

            <VStack alignItems={'center'} mt={'$12'} >
                <Heading fontSize={'$xl'} color={COLORS.primary[600]}>
                    Sissors Bro
                </Heading>
                <Text color={'$blueGray400'} fontSize="$xs">
                    Nayapalli, Bhubaneswar
                </Text>
            </VStack>


            <ScrollView >

                <Box
                    bg="white"
                    mt={'$3'}
                    py={'$2'}
                    mx={'$2'}
                    borderRadius={'$xs'}
                    borderWidth={'$1'}
                    borderColor='$coolGray300'
                    rounded={'$lg'}
                    flexDirection="row"
                    justifyContent="space-around"
                    h={'7%'}>
                    {/* Followes */}
                    <Box alignItems="center">
                        <Heading fontSize={'$xl'} color={COLORS.theme[600]}>
                            230K
                        </Heading>
                        <Text color={'$black'} bold fontSize={'$sm'}>
                            Total Revenue
                        </Text>
                    </Box>

                    <Divider ml={'$4'} orientation='vertical' />
                    {/* Clint */}
                    <Box alignItems="center">
                        <Heading fontSize={'$xl'} color={COLORS.theme[600]}>
                            1568
                        </Heading>
                        <Text color={'$black'} bold fontSize={'$sm'}>
                            Customer Served
                        </Text>
                    </Box>
                    {/* Project */}

                </Box>



                <Box
                    bgColor="#FFF"
                    mt={'$6'}
                    p={'$2'}
                    borderWidth={'$1'}
                    borderRadius={'$md'}
                    borderColor='$coolGray300'
                    // h={'60%'}
                    mx={'$2'}
                >
                    <FlatList
                        data={listData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Box>

                <Box
                    bgColor="#FFF"
                    mt={'$3'}
                    p={'$2'}
                    borderWidth={'$1'}
                    borderRadius={'$md'}
                    mb={'$4'}
                    borderColor='$coolGray300'
                    // h={'60%'}
                    mx={'$2'}
                >
                    <FlatList
                        data={listData2}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Box>

                <Pressable py={'$1'} borderWidth={'$1'} borderColor='$coolGray300' $pressed={{ opacity: 0.7 }} m={'$3'} bg={'white'} mx={'$3'} borderRadius={'$md'} >
                    <HStack mx={'$4'} alignItems={'center'} justifyContent={'space-between'}>
                        <HStack space={'xl'} alignItems={'center'}>
                            <Box rounded={'$full'} bg={'$blue50'} py={'$2'} px={'$2'}>

                                <AppIcon FeatherName="log-out" size={22} color={'blue'} />
                            </Box>

                            <Pressable onPress={() => logout()} >
                                <Text fontSize="$md" bold  >
                                    Logout
                                </Text>
                            </Pressable>
                        </HStack>
                        <Box mr={'$3'} >

                            <AppIcon
                                OcticonsName="chevron-right"
                                size={18}
                                color={'blue'}
                            />
                        </Box>
                    </HStack>
                </Pressable>
                <Text
                    mb={'$6'}
                    color={'$coolGray400'}
                    textAlign={'center'}
                >
                    App version 1.02.11
                </Text>

            </ScrollView>


        </Box>
    );
}
