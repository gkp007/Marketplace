import { useNavigation } from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  HStack,
  Toast,
  Modal
} from '@gluestack-ui/themed';
import { ANIMATIONS } from '~/assets';
import { Button } from '@gluestack-ui/themed';
import { useChange } from '~/hooks/useAPI';



type ModalType = {
  showModal?: boolean;
  setShowModal: (prev: boolean) => void;
  url?: any;
  isBack?: boolean;
  title?: any;
  method?: any;
  body?: any;
};
const DeleteModal = ({
  showModal,
  setShowModal,
  url,
  isBack,
  method,
  title,
  body,
}: ModalType) => {
  const { change, isChanging } = useChange();
  //
  const handleDelete = async () => {
    try {
      const res = await change(url, {
        method: method || 'DELETE',
        body: body ? body : {},
        // body: body ? { quotationId: body } : {},
      });

      if (res?.status === 200) {
        setShowModal(false);
        Toast({
          title: 'Success!!',
          description: title || 'Deleted Successful!',
          duration: 5000,
          bgColor: 'green.700',
        });
        isBack && goBack();
      } else {
        setShowModal(false);
        Toast({
          // title: res?.results?.msg,
          title: 'Delete Not Successful',
          duration: 5000,
          bgColor: 'rose.600',
        });
      }
    } catch (error) {

    }
    //
  };
  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content bgColor={'white'}>
        <Modal.Body>
          <Box>
            <Center bg={'white'}>
              <AnimatedLottieView
                source={ANIMATIONS.ALERT}
                autoPlay
                loop={true}
                style={{
                  width: 200,
                  height: 200,
                }}
              />
              <Heading textAlign={'center'} fontSize={17}>
                Are you sure?
              </Heading>
              <Text>You want to delete!</Text>
              <HStack mt={'$4'}>
                <Button
                  mx={2}
                  width={'45%'}
                  isLoadingText="Wait"
                  onPress={() => handleDelete()}>
                  <Text
                    fontSize={'$xs'}
                    color={'#fff'}>
                    Delete
                  </Text>
                </Button>
                <Button
                  onPress={() => setShowModal(false)}
                  width={'45%'}>
                  <Text
                    fontSize={'$xs'}
                    color={'#fff'}>
                    Cancel
                  </Text>
                </Button>
              </HStack>
            </Center>
          </Box>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteModal;
