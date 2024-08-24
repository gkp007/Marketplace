import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import { PrivateContainer } from '~/components/shared';
import { EmployeeCard } from '~/components/container';
import { Box } from '@gluestack-ui/themed';
import { COLORS } from '~/styles';
import { Pressable } from '@gluestack-ui/themed';
import { Text } from '@gluestack-ui/themed';
import AppIcon from '~/components/core/AppIcon';
import { HStack } from '@gluestack-ui/themed';

const employeeDataArray = [
    {
        name: 'Motilal Nayak',
        experience: '1 year 3 months',
        rating: 4.8,
        status: 'Active',
        totalRevenue: 24605,
        totalBookings: 1606,
    },
    {
        name: 'Sumanta Behera',
        experience: '2 year 9 months',
        rating: 4.2,
        status: 'Deactive',
        totalRevenue: 145605,
        totalBookings: 916,
    },
    {
        name: 'Amulya Behera',
        experience: '0 year 9 months',
        rating: 4.2,
        status: 'Active',
        totalRevenue: 14000,
        totalBookings: 59,
    },

];

const EmployeeManagementScreen = () => {


    return (
        <PrivateContainer title="Employee Management">
            <StatusBar animated backgroundColor={COLORS.theme[700]} />
            <Box bg={'white'} h={'$full'}>

                <Pressable borderWidth={'$1'} borderRadius={'$xs'} borderColor='$coolGray500' p={'$2'} mx={'$2'} >
                    <HStack space={'xs'} justifyContent='center' alignItems={'center'}>
                        <Text textAlign='center' bold color={COLORS.primary[600]}>Click Here To Add Professionals</Text>
                        <AppIcon AntDesignName="plus" size={20} />
                    </HStack>

                </Pressable>
                <FlatList
                    data={employeeDataArray}
                    renderItem={({ item }) => (
                        <EmployeeCard employeeData={item}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Box>
        </PrivateContainer>
    );
};

export default EmployeeManagementScreen;
