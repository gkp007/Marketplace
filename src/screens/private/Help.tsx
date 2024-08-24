import { Text, HStack, VStack, Image, Pressable, Box, Divider, Heading, AccordionTrigger, AccordionContentText } from '@gluestack-ui/themed';
import { COLORS, WIDTH } from '~/styles';
import { PrivateContainer } from '~/components/shared';
import { StackAndTabType } from '~/routes/private/types';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AppIcon from '~/components/core/AppIcon';
import { Accordion } from '@gluestack-ui/themed';
import { AccordionItem } from '@gluestack-ui/themed';
import { AccordionHeader } from '@gluestack-ui/themed';
import { AccordionTitleText } from '@gluestack-ui/themed';
import { AccordionIcon } from '@gluestack-ui/themed';
import { AccordionContent } from '@gluestack-ui/themed';
import AnimatedLottieView from 'lottie-react-native';
import animations from '~/assets/animations';


const Help = () => {

    const { navigate, goBack } = useNavigation<StackAndTabType>();
    const [isExpanded, setIsExpanded] = useState(false);

    const faqData = [
        {
            question: 'Question: How can I place an order?',
            answer:
                "To place an order, simply browse our product catalog, select the items you want, and proceed to checkout. Follow the prompts to provide shipping information and payment details to complete your purchase.",
        },
        {
            question: 'Question: Can I modify or cancel my order after placing it?',
            answer:
                "Yes, but before if it is not shipped. Please double-check your items and shipping information before confirming your order.",
        },
        {
            question: 'What payment methods do you accept?',
            answer:
                'We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure payment options. You can view all available payment methods during the checkout process.',
        },
        {
            question: 'How can I track my order?',
            answer:
                'Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this tracking number on our website to monitor the status and location of your package.',
        },
        {
            question: 'What is your return policy?',
            answer:
                'We offer a hassle-free return policy within 30 days of receiving your order. Please visit our (Returns) page for detailed instructions on initiating a return and obtaining a refund or exchange.',
        },
        {
            question: 'Are there any shipping fees?',
            answer:
                'Shipping fees may vary depending on your location and the shipping method selected. You can view the shipping costs during the checkout process before finalizing your purchase.',
        },

    ];

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleAccordionToggle = (index: number) => {
        setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return (
        <>
            <Box bg={'$white'} m={'$2'}>


                <Box alignItems='center'>

                    <AnimatedLottieView
                        source={animations.HELP}
                        autoPlay
                        style={{ height: 200, width: 300 }}
                        loop={false}
                    />
                </Box>

                <Box mt={'$2'} borderRadius={'$lg'} bg={'white'} p={'$2'} >
                    <HStack alignItems={'center'} space='xl' >
                        <Box p={'$4'} borderRadius={'$2xl'} bg={'$blue50'}>
                            <AppIcon IoniconsName="call-outline" size={32} color={'blue'} />
                        </Box>
                        <VStack space={'xs'} >
                            <Text fontSize={12} color={'$blueGray500'}>
                                Our 24 x 7 Customer Service
                            </Text>
                            <Heading bold fontSize={'$md'} w={'90%'} mr="auto" >
                                +911234567890
                            </Heading>
                        </VStack>
                    </HStack>
                </Box>
                <Box mt={'$2'} borderRadius={'$lg'} bg={'white'} p={'$2'} >
                    <HStack alignItems={'center'} space='xl' >
                        <Box p={'$4'} borderRadius={'$2xl'} bg={'$blue50'}>
                            <AppIcon FontistoName="email" size={32} color={'blue'} />
                        </Box>
                        <VStack space={'xs'} >
                            <Text fontSize={12} color={'$blueGray500'}>
                                Write us at
                            </Text>
                            <Heading bold fontSize={'$md'} w={'100%'} mr="auto" >
                                demo@combbers.com
                            </Heading>
                        </VStack>
                    </HStack>
                </Box>



                <Box mt={'$8'} mb={'$3'} mx={'$2'}>
                    <Heading size={'md'} color={'black'}>Frequently Asked Questions</Heading>
                </Box>

                <Box alignItems='center'>
                    <Accordion borderRadius={'$3xl'} width="100%" size="md" variant="filled" type="single" isCollapsible={true} isDisabled={false} >
                        <AccordionItem value="a">
                            <AccordionHeader>
                                <AccordionTrigger>
                                    {({ isExpanded }) => {
                                        return (
                                            <>
                                                <AccordionTitleText>
                                                    How cn I book a parlour?
                                                </AccordionTitleText>
                                                {isExpanded ? (
                                                    <AppIcon FontAwesomeName="caret-up" size={20} color={'black'} />

                                                ) : (
                                                    <AppIcon FontAwesomeName="caret-down" size={20} color={'blue'} />

                                                )}
                                            </>
                                        );
                                    }}
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionContentText>
                                    To place an order, simply select the products you want, proceed to
                                    checkout, provide shipping and payment information, and finalize
                                    your purchase.
                                </AccordionContentText>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="b">
                            <AccordionHeader>
                                <AccordionTrigger>
                                    {({ isExpanded }) => {
                                        return (
                                            <>
                                                <AccordionTitleText>
                                                    Is there any refund policy ?
                                                </AccordionTitleText>
                                                {isExpanded ? (
                                                    <AppIcon FontAwesomeName="caret-up" size={20} color={'black'} />

                                                ) : (
                                                    <AppIcon FontAwesomeName="caret-down" size={20} color={'blue'} />

                                                )}
                                            </>
                                        );
                                    }}
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionContentText>
                                    We accept all major credit cards, including Visa, Mastercard, and
                                    American Express. We also support payments through PayPal.
                                </AccordionContentText>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="c">
                            <AccordionHeader>
                                <AccordionTrigger>
                                    {({ isExpanded }) => {
                                        return (
                                            <>
                                                <AccordionTitleText>
                                                    How can I register my business?
                                                </AccordionTitleText>
                                                {isExpanded ? (
                                                    <AppIcon FontAwesomeName="caret-up" size={20} color={'black'} />

                                                ) : (
                                                    <AppIcon FontAwesomeName="caret-down" size={20} color={'blue'} />

                                                )}
                                            </>
                                        );
                                    }}
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionContentText>
                                    We accept all major credit cards, including Visa, Mastercard, and
                                    American Express. We also support payments through PayPal.
                                </AccordionContentText>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="c">
                            <AccordionHeader>
                                <AccordionTrigger>
                                    {({ isExpanded }) => {
                                        return (
                                            <>
                                                <AccordionTitleText>
                                                    What payment methods do you accept?
                                                </AccordionTitleText>
                                                {isExpanded ? (
                                                    <AppIcon FontAwesomeName="caret-up" size={20} color={'black'} />

                                                ) : (
                                                    <AppIcon FontAwesomeName="caret-down" size={20} color={'blue'} />

                                                )}
                                            </>
                                        );
                                    }}
                                </AccordionTrigger>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionContentText>
                                    We accept all major credit cards, including Visa, Mastercard, and
                                    American Express. We also support payments through PayPal.
                                </AccordionContentText>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </Box>
            </Box>
        </>

    )
}

export default Help