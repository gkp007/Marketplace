import React from 'react';
import { Box, Heading, HStack, Pressable, Text, VStack } from "@gluestack-ui/themed";
import AppIcon from '~/components/core/AppIcon';
import { StackAndTabType } from '~/routes/private/types';
import { useNavigation } from '@react-navigation/native';


interface TopProfessionalsProps {
    topProfessionalsData: {
        name: string;
        rating: number;
        experience: string;
        countThisMonth: number;
        countLastMonth: number;
        up?: boolean;
        downPercentage?: number;
        upPercentage?: number;
    }[];
}

const TopProfessional: React.FC<TopProfessionalsProps> = ({ topProfessionalsData }) => {

    const { navigate, goBack } = useNavigation<StackAndTabType>();

    return (
        <>
            <HStack mx={'$4'} justifyContent='space-between' >
                <Heading fontSize={'$lg'} bold>Top Professionals</Heading>
                <Pressable onPress={() => navigate('EmployeeManagement')}>
                    <HStack px={'$2'} alignItems='center' space={'xs'} bg={'$blue50'} borderRadius={'$sm'} >
                        <Text fontSize={'$xs'} color={'$coolGray600'}>
                            See all
                        </Text>
                        <AppIcon MaterialCommunityIconsName='chevron-right' size={20} color={'blue'} />
                    </HStack>
                </Pressable>
            </HStack>

            <Box borderRadius={'$md'} bg={'$white'} softShadow='1' borderColor='$coolGray300' m={'$3'} p={'$2'}>


                {topProfessionalsData.map((professional, index) => (
                    <VStack space={'xs'} key={index} mx={'$3'} borderBottomWidth={index === topProfessionalsData.length - 1 ? 0 : '$1'} borderBottomColor='$coolGray200' py={'$2'}>
                        <Heading fontSize={'$lg'} bold mb={'$1'}>
                            {professional.name}
                        </Heading>
                        <Text fontSize={'$md'} color={'$coolGray600'}>
                            Rating: {professional.rating}
                        </Text>

                        <Text fontSize={'$md'} color={'$coolGray600'}>
                            {professional.countThisMonth} This month / {professional.countLastMonth} Last month
                        </Text>
                        <HStack space={'sm'}>
                            <Text fontSize={'$md'} bold color={professional.up ? '$green700' : '$red500'}>
                                {professional.up ? `${professional.upPercentage}% up` : `${professional.downPercentage}% down`}
                            </Text>
                            <AppIcon IoniconsName={professional.up ? 'trending-up-outline' : 'trending-down-outline'} size={25} color={professional.up ? 'green' : 'red'} />
                        </HStack>

                    </VStack>
                ))}
            </Box>
        </>
    );
};

export default TopProfessional;
