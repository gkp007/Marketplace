
import { Pressable, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { IMAGES } from '../../assets';
import { Box } from '@gluestack-ui/themed';
import { Image } from '@gluestack-ui/themed';


export default function DevDashboardCard({ item }: any) {
    return (
        <>
            <Pressable
                onPress={item?.onPress}
                bg={item?.color1}
                softShadow={'2'}
                alignSelf={'center'}
                borderRadius={10}
                w={'44%'}
                overflow={'hidden'}
                m={2}>
                <Box position={'absolute'} right={0} mt={-1}>
                    <Image alt={'DESIGN IMAGE'} source={IMAGES.LOGO} w={20} h={20} />
                </Box>
                <VStack space={'md'} py={4}>
                    <Box
                        justifyContent={'center'}
                        alignItems={'center'}
                        w={'$12'}
                        h={'$12'}
                        p={2}
                        softShadow={'2'}
                        mx={3}
                        bg={'$red300'}
                        borderRadius={10}>
                        <Image
                            resizeMode="contain"
                            source={item?.image}
                            alt="image"
                            w={16}
                            h={16}
                        />
                    </Box>

                    <Text
                        textAlign={'left'}
                        fontSize={12}
                        textTransform={'capitalize'}
                        pt={1}
                        px={4}
                        top={1}>
                        {item?.title}
                    </Text>
                    <Text
                        textAlign={'left'}
                        px={5}
                        fontSize={12}
                    >10
                    </Text>
                </VStack>
            </Pressable>
        </>
    );
}

