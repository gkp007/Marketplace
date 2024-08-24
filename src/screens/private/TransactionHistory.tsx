import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import { PrivateContainer } from '~/components/shared';
import { Transaction } from '~/components/container';
import { Box } from '@gluestack-ui/themed';
import { COLORS } from '~/styles';

const transactionDataArray = [
    {
        name: 'Motilal Nayak',
        service: 'Hair Cutting',
        amount: 450,
        date: '01-05-2024',
    },
    {
        name: 'Sumanta Behera',
        service: 'Hair Spa',
        amount: 750,
        date: '02-05-2024',
    },
    {
        name: 'Amulya Behera',
        service: 'Facial',
        amount: 900,
        date: '03-05-2024',
    },
    {
        name: 'Sumanta Behera',
        service: 'Hair Spa',
        amount: 750,
        date: '02-05-2024',
    },
    {
        name: 'Sumanta Behera',
        service: 'Hair Spa',
        amount: 750,
        date: '02-05-2024',
    },
    {
        name: 'Amulya Behera',
        service: 'Facial',
        amount: 900,
        date: '03-05-2024',
    },
    {
        name: 'Sumanta Behera',
        service: 'Hair Spa',
        amount: 750,
        date: '02-05-2024',
    },
    {
        name: 'Amulya Behera',
        service: 'Facial',
        amount: 900,
        date: '03-05-2024',
    },

    // Add more transaction data as needed
];

const EmployeeManagementScreen = () => {
    return (
        <PrivateContainer title="All Transactions">
            <StatusBar animated backgroundColor={COLORS.theme[700]} />
            <Box bg={'white'} h={'$full'}>
                <FlatList
                    data={transactionDataArray}
                    renderItem={({ item }) => (
                        <Transaction transactionData={item} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Box>
        </PrivateContainer>
    );
};

export default EmployeeManagementScreen;
