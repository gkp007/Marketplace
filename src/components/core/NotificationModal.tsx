import React from 'react';
import moment from 'moment';
import { Button, HStack, Modal, Pressable } from '@gluestack-ui/themed';
import { Text } from '@gluestack-ui/themed';
import { Box } from '@gluestack-ui/themed';
import { COLORS } from '~/styles';

type NotificationType = {
    isOpen: boolean;
    onClose: () => void;
    deleteItem: any;
    handleDeleteById: any;
};

const NotificationModal = ({
    isOpen = false,
    onClose = () => { },
    deleteItem,
    handleDeleteById = () => { },
}: NotificationType) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Modal.Content >


                <Text
                    fontSize={'$lg'}
                    color={COLORS.theme[600]}
                    bold
                    m={'$4'}
                >
                    {deleteItem?.title}
                </Text>

                <Modal.Body>
                    <Box>
                        <Text
                            fontSize={'$sm'}
                            color={'#272762'}
                        >
                            {deleteItem?.description}
                        </Text>
                    </Box>
                    <Text mb={-3} ml={-2} fontSize={'$xs'}>
                        Sent At : {moment(deleteItem?.createdAt).format('lll')}
                    </Text>
                </Modal.Body>


                <HStack space={'xs'} justifyContent={'flex-end'} mt={3}
                >

                    <Pressable
                        onPress={() => {
                            handleDeleteById(deleteItem?.id);
                            onClose();
                        }}
                        backgroundColor={'$red600'}
                        borderRadius={'$md'}
                        m={'$2'}
                        w={'$20'}
                        h={'$8'}
                        alignItems='center'
                    >
                        <Text
                            fontSize={'$md'}
                            color={'white'}
                            textAlign={'center'}
                            bold
                            mt={'$1'}
                        >
                            Delete
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={onClose}
                        backgroundColor={COLORS.theme[600]}
                        borderRadius={'$md'}
                        m={'$2'}
                        w={'$20'}
                        h={'$8'}
                        alignItems='center'
                    >
                        <Text
                            fontSize={'$md'}
                            color={'white'}
                            textAlign={'center'}
                            bold
                            mt={'$1'}
                        >
                            Okay
                        </Text>
                    </Pressable>

                </HStack>

                {/* <Button.Group space={'xs'}>
                    <Button
                        w={20}
                        // variant="ghost"

                        onPress={() => {
                            handleDeleteById(deleteItem?.id);
                            onClose();
                        }}>
                        <Text>Delete</Text>
                    </Button>
                    <Button w={20} onPress={onClose} >
                        <Text>close</Text>
                    </Button>
                </Button.Group> */}

            </Modal.Content>
        </Modal>
    );
};

export default NotificationModal;
