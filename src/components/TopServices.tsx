import React from 'react';
import { Box, Heading, HStack, Pressable, Text } from "@gluestack-ui/themed";
import AppIcon from '~/components/core/AppIcon';
import { useNavigation } from '@react-navigation/native';
import { StackAndTabType } from '~/routes/private/types';

interface TopServicesProps {
    topServicesData: {
        name: string;
        countThisMonth: number;
        countLastMonth: number;
        up?: boolean;
        downPercentage?: number;
        upPercentage?: number;
    }[];
}

const TopServices: React.FC<TopServicesProps> = ({ topServicesData }) => {

    const { navigate, goBack } = useNavigation<StackAndTabType>();


    return (

        <>
            <HStack mx={'$4'} justifyContent='space-between' >
                <Heading fontSize={'$lg'} bold>Top Services</Heading>
                <Pressable onPress={() => navigate('Services')}>
                    <HStack px={'$2'} alignItems='center' space={'xs'} bg={'$blue50'} borderRadius={'$sm'} >
                        <Text fontSize={'$xs'} color={'$coolGray600'}>
                            See all
                        </Text>
                        <AppIcon MaterialCommunityIconsName='chevron-right' size={20} color={'blue'} />
                    </HStack>
                </Pressable>
            </HStack>
            <Box borderRadius={'$md'} bg={'$white'} borderColor='$coolGray300' softShadow='1' m={'$3'} p={'$2'}>


                {topServicesData.map((service, index) => (
                    <Box key={index} mx={'$3'} borderBottomWidth={index === topServicesData.length - 1 ? 0 : '$1'} borderBottomColor='$coolGray200' py={'$2'}>
                        <Heading fontSize={'$lg'} bold mb={'$1'}>
                            {service.name}
                        </Heading>
                        <Text fontSize={'$md'} color={'$coolGray600'}>
                            {service.countThisMonth} This month / {service.countLastMonth} Last month
                        </Text>
                        <HStack space={'sm'}>
                            <Text fontSize={'$md'} bold color={service.up ? '$green700' : '$red500'}>
                                {service.up ? `${service.upPercentage}% up` : `${service.downPercentage}% down`}
                            </Text>
                            <AppIcon IoniconsName={service.up ? 'trending-up-outline' : 'trending-down-outline'} size={25} color={service.up ? 'green' : 'red'} />
                        </HStack>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default TopServices;
