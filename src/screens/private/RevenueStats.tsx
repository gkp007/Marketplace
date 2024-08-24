import { BarChart, LineChart } from "react-native-gifted-charts";
import React, { ReactNode, useState } from 'react';
import { Box, Divider, Heading, HStack, Pressable, ScrollView, Text, VStack } from "@gluestack-ui/themed";
import { COLORS, WIDTH } from "~/styles";
import { StatusBar } from "@gluestack-ui/themed";


export default function Home() {

    const [selectedTab, setSelectedTab] = useState('weekly');

    const handleTabChange = (tab: React.SetStateAction<string>) => {
        setSelectedTab(tab);
    };

    const weeklyData = [
        {
            stacks: [
                { value: 50, color: 'white', marginBottom: 2, },
            ],
            label: 'S',
        },
        {
            stacks: [

                { value: 40, color: 'white', marginBottom: 2 },
            ],
            label: 'M',
        },
        {
            stacks: [

                { value: 30, color: 'white', marginBottom: 2 },
            ],
            label: 'T',
        },
        {
            stacks: [
                { value: 35, color: 'white', },

            ],
            label: 'W',
        },
        {
            stacks: [{ value: 20, color: 'white' },],
            label: 'T',
        },
        {
            stacks: [

                { value: 36, color: 'white', marginBottom: 2 },
            ],
            label: 'F',
        },
        {
            stacks: [
                { value: 45, color: 'white', },

            ],
            label: 'S',
        },
    ]

    const monthlyData = [
        { value: 110, },
        { value: 80, },
        { value: 60, },
        { value: 90, },
        { value: 100, label: '5' },
        { value: 60, },
        { value: 40, },
        { value: 70, },
        { value: 90, },
        { value: 60, label: '10' },
        { value: 130, },
        { value: 0, },
        { value: 60, },
        { value: 50, },
        { value: 67, label: '15' },
        { value: 30, },
        { value: 40, },
        { value: 50, },
        { value: 50, },
        { value: 60, label: '20' },
        { value: 70, },
        { value: 75, },
        { value: 85, },
        { value: 95, },
        { value: 86, label: '25' },
        { value: 76, },
        { value: 59, },
        { value: 75, },
        { value: 41, },
        { value: 20, label: '30' },
    ];

    const yearlyData = [
        {
            stacks: [
                { value: 50, color: 'white', marginBottom: 2, },
            ],
            label: 'Jan',
        },
        {
            stacks: [

                { value: 40, color: 'white', marginBottom: 2 },
            ],
            label: 'Feb',
        },
        {
            stacks: [

                { value: 30, color: 'white', marginBottom: 2 },
            ],
            label: 'Mar',
        },
        {
            stacks: [
                { value: 35, color: 'white', },

            ],
            label: 'Apr',
        },
        {
            stacks: [{ value: 20, color: 'white' },],
            label: 'May',
        },
        {
            stacks: [

                { value: 36, color: 'white', marginBottom: 2 },
            ],
            label: 'Jun',
        },
        {
            stacks: [
                { value: 45, color: 'white', },

            ],
            label: 'Jul',
        },
        {
            stacks: [

                { value: 40, color: 'white', marginBottom: 2 },
            ],
            label: 'Aug',
        },
        {
            stacks: [

                { value: 30, color: 'white', marginBottom: 2 },
            ],
            label: 'Sep',
        },
        {
            stacks: [
                { value: 35, color: 'white', },

            ],
            label: 'Oct',
        },
        {
            stacks: [{ value: 20, color: 'white' },],
            label: 'Nov',
        },
        {
            stacks: [

                { value: 36, color: 'white', marginBottom: 2 },
            ],
            label: 'Dec',
        },

    ];

    const SERVICE_ITEMS = [
        { name: 'Hair Cutting', duration: 30 },
        { name: 'Facial', duration: 16 },
        { name: 'SPA', duration: 15 }
    ];
    const SERVICES_BY = [
        { name: 'Sumanta Behera', duration: 13 },
        { name: 'Motilal Nayak', duration: 18 },
        { name: 'Amulya Behera', duration: 29 }
    ];

    return (

        <Box bg={'white'} flex={1} h={'$full'}>
            <HStack bg="white" justifyContent="space-between" px={'$4'} mt={'$1'} borderBottomWidth={'$2'} borderTopWidth={'$2'} borderTopColor='$blueGray300' borderBottomColor='$blueGray300'>
                <Pressable onPress={() => handleTabChange('weekly')}>
                    <Box borderBottomWidth={selectedTab === 'weekly' ? 2 : 0} borderColor='$blue700'>
                        <Text textAlign="center" mx={'$2'} py={'$1'} color={selectedTab === 'weekly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Weekly</Text>
                    </Box>
                </Pressable>
                <Pressable onPress={() => handleTabChange('monthly')}>
                    <Box borderBottomWidth={selectedTab === 'monthly' ? 2 : 0} borderColor='$blue700'>
                        <Text mx={'$2'} py={'$1'} color={selectedTab === 'monthly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Monthly</Text>
                    </Box>
                </Pressable>
                <Pressable onPress={() => handleTabChange('yearly')}>
                    <Box borderBottomWidth={selectedTab === 'yearly' ? 2 : 0} borderColor='$blue700'>
                        <Text mx={'$2'} py={'$1'} color={selectedTab === 'yearly' ? '$blue700' : "$grey"} bold fontSize={'$sm'}>Yearly</Text>
                    </Box>
                </Pressable>
            </HStack>

            <ScrollView>

                <Box bg={'$white'} softShadow="1" borderRadius={'$md'} >

                    <Box m={'$2'}>
                        <Heading mx={'$2'} fontSize={'$lg'} bold>Average Booking</Heading>
                        <Text mx={'$2'} fontSize={'$xs'} color="$blueGray400">52 this week bookings</Text>
                    </Box>

                    <Box overflow="hidden" m={'$4'} w={'95%'} bg={'$white'} borderRadius={'$lg'} alignSelf="center" alignItems="center" justifyContent="center" >
                        {selectedTab === 'weekly' && (
                            <BarChart
                                height={150}
                                barWidth={12}
                                spacing={35}
                                showGradient
                                hideYAxisText
                                barBorderTopLeftRadius={15}
                                barBorderTopRightRadius={15}
                                noOfSections={4}
                                stackData={weeklyData}
                                yAxisColor={'transparent'}
                                xAxisColor={'transparent'}
                                gradientColor={'rgba(0, 100, 244,0.8)'}
                                frontColor={'black'}
                                isAnimated
                                animationDuration={1500}
                            />
                        )}
                        {selectedTab === 'monthly' && (
                            <LineChart
                                isAnimated
                                curved
                                thickness={1}
                                animateOnDataChange
                                animationDuration={1000}
                                onDataChangeAnimationDuration={300}
                                areaChart
                                yAxisTextStyle={{ color: 'gray' }}
                                startFillColor={'rgb(8,10,254)'}
                                endFillColor={'white'}
                                startOpacity={0.13}
                                endOpacity={0.08}
                                showDataPointOnFocus
                                showStripOnFocus
                                showTextOnFocus
                                focusEnabled
                                backgroundColor="transparent"
                                initialSpacing={0}
                                data={monthlyData}
                                maxValue={140}
                                noOfSections={3}
                                spacing={12}
                                hideDataPoints
                                hideRules
                                color="blue"
                                yAxisColor={'transparent'}
                                xAxisColor={'transparent'}
                                xAxisLabelTextStyle={{ width: 80, marginLeft: 26 }}
                                pointerConfig={{
                                    pointerStripHeight: 175,
                                    pointerStripColor: 'blue',
                                    pointerStripWidth: 1,
                                    pointerColor: 'lightgray',
                                    radius: 6,
                                    strokeDashArray: [2, 5],
                                    pointerLabelWidth: 100,
                                    pointerLabelHeight: 90,
                                    activatePointersOnLongPress: true,
                                    autoAdjustPointerLabelPosition: false,
                                    pointerLabelComponent: (items: {
                                        date: ReactNode; value: string;
                                    }[]) => {
                                        return (
                                            <Box
                                                style={{
                                                    height: 90,
                                                    width: 100,
                                                    justifyContent: 'center',
                                                    marginTop: -30,
                                                    marginLeft: -40,
                                                }}>
                                                <Text style={{ color: 'white', fontSize: 14, marginBottom: 6, textAlign: 'center' }}>
                                                    {items[0].date}
                                                </Text>
                                                <Box style={{ paddingHorizontal: 10, paddingVertical: 6, borderRadius: 16, backgroundColor: 'gray' }}>
                                                    <Text style={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
                                                        {'₹ ' + items[0].value + '.0'}
                                                    </Text>
                                                </Box>
                                            </Box>
                                        );
                                    },
                                }}
                            />
                        )}
                        {selectedTab === 'yearly' && (
                            <BarChart
                                height={150}
                                barWidth={12}
                                spacing={35}
                                showGradient
                                hideYAxisText
                                barBorderTopLeftRadius={15}
                                barBorderTopRightRadius={15}
                                noOfSections={4}
                                stackData={yearlyData}
                                yAxisColor={'transparent'}
                                xAxisColor={'transparent'}
                                gradientColor={'rgba(0, 100, 244,0.8)'}
                                frontColor={'black'}
                                isAnimated
                                animationDuration={1500}
                            />
                        )}
                    </Box>


                    <Box m={'$2'}>
                        <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                            Services Booked This Week
                        </Text>
                        <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                            <Box borderTopRightRadius="$2xl" borderTopLeftRadius="$2xl" alignItems="center" justifyContent="center" bg={'$coolGray200'}>
                                <Text fontSize="$md" mb="$1" bold textAlign="center">
                                    Revenue Per Service
                                </Text>
                            </Box>
                            {SERVICE_ITEMS.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Divider bg="$coolGray300" />
                                    <HStack justifyContent="space-between" my="$2" alignItems="center">
                                        <Box px="$2" w={WIDTH * 0.3}>
                                            <VStack space="xs">
                                                <Text fontSize="$md" color="$black">{`${index + 1}. ${item.name}`}</Text>
                                            </VStack>
                                        </Box>
                                        <HStack justifyContent="flex-end" w={WIDTH * 0.6} mr="$2">
                                            <Text fontSize="$md">{item.duration}</Text>
                                        </HStack>
                                    </HStack>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Box>
                    <Box m={'$2'}>
                        <Text mt="$5" m="$1" fontSize="$lg" color={COLORS.theme[700]} bold>
                            Served By
                        </Text>
                        <Box borderWidth="$1" my="$2" borderRadius="$2xl" borderColor="$coolGray300">
                            <Box borderTopRightRadius="$2xl" borderTopLeftRadius="$2xl" alignItems="center" justifyContent="center" bg={'$coolGray200'}>
                                <Text fontSize="$md" mb="$1" bold textAlign="center">
                                    Revenue Per Professional
                                </Text>
                            </Box>
                            {SERVICES_BY.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Divider bg="$coolGray300" />
                                    <HStack justifyContent="space-between" my="$2" alignItems="center">
                                        <Box px="$2" w={WIDTH * 0.6}>
                                            <VStack space="xs">
                                                <Text fontSize="$md" color="$black">{`${index + 1}. ${item.name}`}</Text>
                                            </VStack>
                                        </Box>
                                        <HStack justifyContent="flex-end" w={WIDTH * 0.3} mr="$2">
                                            <Text fontSize="$md">{item.duration}</Text>
                                        </HStack>
                                    </HStack>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Box>


                </Box>
            </ScrollView>


        </Box >
    );
};
