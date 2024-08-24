import React from 'react';
import { Text, HStack, VStack, Image, Pressable, FlatList, Box } from '@gluestack-ui/themed';
import { PrivateContainer } from '~/components/shared';
import AppIcon from '~/components/core/AppIcon';
import { COLORS, WIDTH } from '~/styles';
interface Item {
    id: string;
    name: string;
    imageUrl: string;
    duration: string;
    price: number;
}

const Ratings: React.FC = () => {
    const data: Item[] = [

        {
            id: '1',
            name: 'Hair Spa',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s',
            duration: '15 min',
            price: 100,
        },
        {
            id: '2',
            name: 'Facial',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s',
            duration: '30 min',
            price: 300,
        },
        {
            id: '3',
            name: 'Waxing',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s',
            duration: '30 min',
            price: 200,
        },
        {
            id: '4',
            name: 'Eyelash',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s',
            duration: '15 min',
            price: 100,
        },
        {
            id: '5',
            name: 'Manicure',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYSmggkf5jDHGvSazF0fmeP138VqfqY-ZyH9CCqoTMA&s',
            duration: '15 min',
            price: 150,
        },
    ];

    const renderItem = ({ item }) => {
        return (
            <Box bg={'$white'} borderWidth={'$1'} m={'$3'} w={WIDTH * 0.44} borderColor='$blueGray400' borderRadius={'$md'}>

                <Pressable
                    bgColor={'#FFFF'}
                    mx={'$2'}
                    overflow='hidden'
                >
                    <VStack
                        alignItems='center'
                        justifyContent='center'
                        backgroundColor='$white'
                        borderTopRightRadius={'$md'}
                        borderTopLeftRadius={'$2xl'}
                        space={'xs'}
                    >
                        <Image
                            source={{ uri: item.imageUrl }}
                            alt=""
                            borderRadius={10}
                            size={'sm'}
                            p={'$2'}
                            m={'$2'}
                        />
                        <Text fontSize="$lg" bold color={'$black'}>
                            {item.name || 'Not Available'}
                        </Text>
                        <HStack justifyContent='space-between' space={'md'}>
                            <HStack space={'xs'} alignItems='center'>
                                <AppIcon IoniconsName='timer-outline' size={18} />
                                <Text fontSize="$md">
                                    {item.duration || 'Not Available'}
                                </Text>
                            </HStack>
                            <Text fontSize="$md">
                                ₹ {item.price || 'Not Available'}
                            </Text>
                        </HStack>
                    </VStack>
                </Pressable>

                <HStack justifyContent='space-between' m={'$2'} mt={'$5'}>
                    <Pressable py={'$1'} bg={'$red50'} borderColor={'$red600'} borderWidth={1} borderRadius={'$md'}>
                        <HStack justifyContent='center' alignItems={'center'} px={'$2'} space={'xs'}>
                            <AppIcon EntypoName="cross" color={'red'} size={16} />
                            <Text fontSize={'$xs'} color={'$red600'} px={2}>
                                Delete
                            </Text>
                        </HStack>
                    </Pressable>

                    <Pressable py={'$1'} bg={'$blue50'} borderWidth={'$1'} borderColor={COLORS.theme[700]} borderRadius={'$md'}>
                        <HStack justifyContent='center' alignItems={'center'} px={'$2'} space={'xs'}>
                            <AppIcon IoniconsName="checkmark-sharp" color={COLORS.theme[700]} size={16} />
                            <Text fontSize={'$xs'} color={COLORS.theme[700]} px={2}>
                                Update
                            </Text>
                        </HStack>
                    </Pressable>
                </HStack>

            </Box>
        );
    };

    return (
        <PrivateContainer title={'My Services'} bg={'$white'}>
            <Box bg={'$white'} flex={1}>

                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                />

                <Pressable m={'$3'} py={'$2'} bg={COLORS.theme[700]} borderRadius={'$md'}>
                    <HStack justifyContent='center' alignItems={'center'} px={'$2'} space={'xs'}>
                        <AppIcon IoniconsName="add" color={'white'} size={16} />
                        <Text fontSize={'$md'} color={'$white'} px={2}>
                            Add New Service
                        </Text>
                    </HStack>
                </Pressable>
            </Box>

        </PrivateContainer>
    );
};

export default Ratings;
