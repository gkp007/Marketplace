import React from 'react';
import { Text, HStack, VStack, Image, Pressable, Box, Divider } from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';

interface TransactionData {
    name: string;
    service: string;
    amount: number;
    date: string;
}

interface TransactionItemProps {
    transactionData: TransactionData;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transactionData }) => {

    const { navigate, goBack } = useNavigation<StackAndTabType>()

    return (
        <Pressable
            bgColor={'#FFFF'}
            mx={'$2'}
            borderBottomWidth={'$1'}
            borderColor='$coolGray400'
            overflow='hidden'
            mt={'$4'}
            onPress={() => navigate('BookingDetails')}
        >
            {/* Transaction Item */}
            <HStack
                alignItems='center'
                backgroundColor='$white'
                borderTopRightRadius={'$md'}
                borderTopLeftRadius={'$2xl'}>
                {/* Replace the image with any transaction-related icon or leave it empty */}
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
                            {transactionData.name || 'Not Available'}
                        </Text>
                        <Text fontSize="$xs" color={'blue.500'}>
                            {transactionData.service || 'Not Available'}
                        </Text>

                    </VStack>
                    <VStack justifyContent='space-between' alignItems='flex-end' space={'sm'} >
                        <HStack px={'$2'} mt={'$1'} bg={'$white'} space={'xs'} borderRadius={'$2xl'} >
                            <Text fontSize="$md" color={'$green600'} bold>
                                ₹ {transactionData.amount || 'Not Available'}
                            </Text>
                        </HStack>

                        <Text mx={'$2'} fontSize="$xs" color={'$blueGray400'} bold>
                            {transactionData.date || 'Not Available'}
                        </Text>

                    </VStack>
                </HStack>
            </HStack>
        </Pressable>
    );
};

export default TransactionItem;
