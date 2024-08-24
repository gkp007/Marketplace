import React from 'react';
import { Text, HStack, VStack, Image, Pressable, Box, Divider } from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import AppIcon from '~/components/core/AppIcon';
import { PrivateContainer } from '~/components/shared';

interface EmployeeData {
    name: string;
    experience: string;
    rating: number;
    status: string;
    totalRevenue: number;
    totalBookings: number;
}

interface EmployeeManagementProps {
    employeeData: EmployeeData;
}

const EmployeeManagement: React.FC<EmployeeManagementProps> = ({ employeeData }) => {
    // Define the color based on the employee's status
    const statusColor = employeeData.status === 'Active' ? '$green500' : '$red500';

    return (
        <Pressable
            bgColor={'#FFFF'}
            borderRadius={'$xl'}
            mx={'$2'}
            borderWidth={'$1'}
            borderColor='$coolGray400'
            overflow='hidden'
            mt={'$4'}
        >
            {/* Employee Header */}
            <HStack
                alignItems='center'
                backgroundColor='$coolGray100'
                borderTopRightRadius={'$md'}
                borderTopLeftRadius={'$2xl'}>
                <Image
                    alignSelf='flex-start'
                    source={{
                        uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
                    }}
                    alt=""
                    borderRadius={10}
                    size={'sm'}
                    p={'$2'}
                    m={'$2'}
                />
                <VStack p={'$2'} width={'55%'} alignSelf='flex-start'>
                    <Text fontSize="$lg" bold>
                        {employeeData.name || 'Not Available'}
                    </Text>
                    <Text fontSize="$xs" color={'blue.500'}>
                        {employeeData.experience || 'Not Available'}
                    </Text>
                    <HStack alignItems='center' space={'xs'}>
                        <AppIcon AntDesignName="star" color={'orange'} size={12} />
                        <Text fontSize="$xs" color={'blue.500'}>
                            {employeeData.rating || 'Not Available'}
                        </Text>
                    </HStack>
                </VStack>
                <VStack alignItems='flex-end' space={'xl'}>
                    <HStack alignItems='center' px={'$2'} mt={'$1'} bg={'$white'} mx={'$2'} space={'xs'} borderRadius={'$2xl'} >
                        <AppIcon MaterialCommunityIconsName="circle-slice-8" color={employeeData.status === 'Active' ? 'green' : 'red'} size={10} />
                        <Text fontSize="$xs" color={statusColor} bold>
                            {employeeData.status || 'Not Available'}
                        </Text>
                    </HStack>
                    <HStack
                        p={'$2'}
                        space={'xs'}
                        alignItems='center'
                        alignSelf='flex-end'>
                        <Text fontSize="$xs" color={'$red500'}>
                            View Details
                        </Text>
                        <AppIcon AntDesignName="caretright" color={'red'} size={10} />
                    </HStack>
                </VStack>
            </HStack>

            <Divider bg="$coolGray300" />

            {/* Employee Stats */}
            <HStack justifyContent='space-between' my={'$2'} alignItems={'center'}>
                <Box px={'$2'} w={WIDTH * 0.4}>
                    <VStack space={'xs'}>
                        <Text fontSize="$md" bold color='$black' textAlign='center'>
                            {employeeData.totalRevenue || 'Not Available'}
                        </Text>
                        <Text fontSize="$lg" textAlign='center'>
                            Total Revenue
                        </Text>
                    </VStack>
                </Box>
                <Divider bg="$coolGray300" orientation='vertical' />
                <VStack justifyContent={'center'} w={WIDTH * 0.4} mr={'$2'}>
                    <Text textAlign='center' fontSize="$md" bold color='$black'>
                        {employeeData.totalBookings || 'Not Available'}
                    </Text>
                    <Text textAlign='center' >
                        Total Bookings
                    </Text>
                </VStack>
            </HStack>

            <Divider bg="$coolGray300" />
        </Pressable>
    );
};

export default EmployeeManagement;
