import React from 'react';
import { Text, HStack, VStack, Image, Pressable, FlatList } from '@gluestack-ui/themed';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';

const transactionData = [
    { name: 'Amulya Behera', mobile: 775462132 },
    { name: 'John Doe', mobile: 123456789 },
    { name: 'Jane Smith', mobile: 987654321 },
];

interface TransactionData {
    name?: string;
    mobile: number;
}

interface TransactionItemProps {
    transactionData: TransactionData;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transactionData }) => {
    const { navigate, goBack } = useNavigation<StackAndTabType>();

    return (
        <Pressable
            bgColor={'#FFFF'}
            mx={'$2'}
            borderBottomWidth={'$1'}
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
                            {transactionData?.name || 'Not Available'}
                        </Text>
                        <Text fontSize="$xs" color={'blue.500'}>
                            {transactionData.mobile || 'Not Available'}
                        </Text>
                    </VStack>
                    <Pressable mx={'$2'} borderRadius={'$md'} bg={'$blueGray100'}>
                        <Text px={'$3'} py={'$0.5'} fontSize="$xs" bold >
                            Unblock
                        </Text>
                    </Pressable>
                </HStack>
            </HStack>
        </Pressable>
    );
};

const TransactionList: React.FC = () => {
    return (
        <PrivateContainer title={'Block list'}>
            <FlatList
                data={transactionData}
                renderItem={({ item }) => <TransactionItem transactionData={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </PrivateContainer>
    );
};

export default TransactionList;
