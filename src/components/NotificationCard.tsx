import React, { useState } from 'react';
import moment from 'moment';
import {
    Box,
    Heading,
    Text,
    HStack,
    VStack,
    Image,
    Pressable,
    Spinner,
    Toast,
} from '@gluestack-ui/themed';
import { useChange } from '~/hooks/useAPI';
import AppIcon from './core/AppIcon';
import NotificationModal from './core/NotificationModal';
import { COLORS, WIDTH } from '~/styles';

const NotificationCard = ({ item, mutate }: any) => {
    const [deleteItem, setDeleteItem] = useState<any>();
    const [showModal, setShowModal] = useState(false);
    const [readItem, setReadItem] = useState<any>();
    const { change } = useChange();

    const handleReadById = async () => {
        try {
            const response = await change(`notifications/${readItem}`, {
                method: 'PUT',
                body: {
                    readStatus: true,
                },
            });
            // if (response?.status !== 200) throw new Error(response?.results?.msg);

            if (response?.results?.success === true) {
                // Toast.show({
                //   title: 'Success',
                //   description: 'Notification read successfully',
                //   bgColor: '#84cc16',
                //   duration: 5000,
                // });
                mutate();
            }
        } catch (error) {
            Toast({
                title: 'Error',
                description: 'error occurred',
                duration: 5000,
                bgColor: '#fb7185',
            });
        }
    };

    const handleDeleteById = async (id: string) => {
        try {
            const res = await change(`notifications/${deleteItem?.id}`, {
                method: 'DELETE',
            });
            if (res?.status === 200) {
                setShowModal(false);
                Toast({
                    title: 'Delete Successful!',
                    duration: 5000,
                    bgColor: 'green.600',
                });
                mutate();
            } else {
                setShowModal(false);
                Toast({
                    title: res?.results?.msg,
                    // title: 'Delete Not Successful',
                    duration: 5000,
                    bgColor: 'rose.600',
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Pressable
                onPress={() => {
                    setReadItem(item?.id);
                    handleReadById();
                    setShowModal(true);
                    setDeleteItem(item);
                }}>
                <HStack
                    ml={'$3'}
                    mr={'$3'}
                    mb={'$6'}
                    px={'$2'}
                    softShadow='1'
                    shadowColor='$blue600'
                    shadowOffset={{ width: 4, height: 5 }}
                    shadowOpacity={'$5'}
                    py={'$3'}
                    borderRadius={'$md'}
                    bgColor={'white'}
                    borderColor={COLORS.theme[600]}
                    borderBottomWidth={2}>
                    {item?.readStatus === true ? (
                        <Box
                            bgColor={'gray'}
                            p={'$2.5'}
                            mt={'$2'}
                            mx={'$1'}
                            alignItems='center'
                            justifyContent='center'
                            rounded={'$full'}
                            width={'$10'}
                            height={'$10'}>
                            <AppIcon FeatherName="bell" size={20} color={'white'} />
                        </Box>
                    ) : (
                        <Box
                            bgColor={COLORS.theme[600]}
                            p={'$2.5'}
                            mt={'$2'}
                            mx={'$1'}
                            borderRadius={'$3xl'}
                            alignItems='center'
                            justifyContent='center'
                            width={'$10'}
                            height={'$10'}>
                            <AppIcon FeatherName="bell" size={20} color={'white'} />
                        </Box>
                    )}
                    <Box mx={'$1'} position={'relative'}>
                        <Text
                            position={'absolute'}
                            right={3}
                            top={-6}
                            textAlign={'right'}
                            fontSize={'$xs'}
                        >
                            {moment(item.createdAt).fromNow()}
                        </Text>
                        <Text
                            width={WIDTH / 1.3}
                            fontSize={'$sm'}
                            mb={1}
                            mt={3}>
                            {item?.title}
                        </Text>
                        <Text
                            width={WIDTH / 1.3}
                            fontSize={'$xs'}
                            color={'gray.700'}
                            pr={2}
                        >
                            {item?.description}
                        </Text>
                    </Box>
                </HStack>
            </Pressable>

            <NotificationModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                deleteItem={deleteItem}
                handleDeleteById={handleDeleteById}
            />
        </>
    );
};

export default NotificationCard;
