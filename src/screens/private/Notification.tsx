import React, { useState } from 'react';
import {
    Text,
    HStack,
    Pressable,
    Toast,
} from '@gluestack-ui/themed';
import { FlatList } from '@gluestack-ui/themed';
import Empty from '~/components/core/Empty';
import useAuth from '~/hooks/useAuth';
import { useChange, useFetch } from '~/hooks/useAPI';
import NotificationCard from '~/components/NotificationCard';
import { ANIMATIONS } from '~/assets';
import { HEIGHT, WIDTH } from '~/styles';
import PrivateContainer from '~/components/shared/PrivateContainer';
type notificationType = {
    item: {
        id: string;

    }
}




const Notifications = () => {


    const dummyData = [
        {
            id: '1',
            title: 'Appointment Reminder',
            description: 'Your appointment with Barber Joe is scheduled for tomorrow at 10:00 AM.',
        },
        {
            id: '2',
            title: 'Appointment Confirmed',
            description: 'Your appointment with Barber Alex has been confirmed for next Friday at 2:00 PM.',
        },
        {
            id: '3',
            title: 'New Appointment Request',
            description: 'You have a new appointment request from John Doe for next Saturday at 11:30 AM.',
        },
        {
            id: '4',
            title: 'Appointment Cancellation',
            description: 'Your appointment with Barber Smith has been cancelled. Please reschedule if needed.',
        },
        {
            id: '5',
            title: 'Reminder: Leave a Review',
            description: 'Don\'t forget to leave a review for your recent appointment with Barber Sam!',
        },
    ];



    const [data, setData] = useState(dummyData);

    const [showModal, setShowModal] = useState(false);
    const { user } = useAuth();
    const { change } = useChange();
    const { isLoading, mutate } = useFetch<any>(
        `notificns?userId=${user?.id}&orderBedAt:desc`,
    );
    console.log(data, 'noti')

    const handleReadALL = async () => {
        try {
            const response = await change(`notifications/read/all`, {
                method: 'PUT',
                body: {
                    userId: user?.id,
                },
            });
            // if (response?.status !== 200) throw new Error(response?.results?.msg);

            if (response?.results?.success === true) {
                // Toast.show({
                //   title: 'Success',
                //   description: 'All marked read successfully',
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

    const handleDeleteAll = async () => {
        try {
            const res = await change(`notifications//delete-all`, {
                method: 'DELETE',
                body: {
                    userId: user?.id,
                },
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
            <PrivateContainer title="Notifications">

                {data?.length > 0 && (
                    <HStack mt={'$4'} justifyContent={'space-between'} mx={'$3'} alignItems={'center'}>
                        <Pressable onPress={handleReadALL}>
                            <Text  >
                                Mark All Read
                            </Text>
                        </Pressable>
                        <Pressable onPress={handleDeleteAll}>
                            <Text bold >
                                Clear all
                            </Text>
                        </Pressable>
                    </HStack>
                )}
                <FlatList
                    mt={'$3'}
                    refreshing={isLoading}
                    onRefresh={mutate}
                    data={data}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }: notificationType) => (
                        <NotificationCard item={item} key={item?.id} mutate={mutate} />
                    )}
                    ListEmptyComponent={
                        <>
                            <Empty
                                title="No data available"
                                animation={ANIMATIONS.NO_DATA}
                                height={HEIGHT / 1.7}
                                width={WIDTH}
                            />
                        </>
                    }
                />
            </PrivateContainer>
        </>
    );
};


export default Notifications;
