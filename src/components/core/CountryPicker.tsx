// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import React, {useEffect, useState} from 'react';
// import {
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   SafeAreaView,
//   StyleSheet,
//   Pressable,
//   FlatList,
//   Image,
//   Modal,
// } from 'react-native';

// import {Text} from 'react-native-svg';
// import {Country} from '~/constant';
// import { HStack, Icon, Input, VStack } from '@gluestack-ui/themed';

// type Props = {
//   visible: boolean;
//   onSelect: (country: any) => void;
//   onClose: () => void;
//   selectedCountry?: any;
// };

// export default ({onClose, onSelect, visible}: Props) => {
//   const [searchTxt, setSearchTxt] = useState('');
//   const [searchRes, setSearchRes] = useState(() => Country);
//   useEffect(() => {
//     if (searchTxt) {
//       const resArr = Country?.filter((item: any) =>
//         item?.name?.toLowerCase().includes(searchTxt.toLowerCase()),
//       );
//       setSearchRes(resArr);
//     } else {
//       setSearchRes(Country);
//     }
//   }, [searchTxt]);
//   return (
//     <>
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={visible}
//         onRequestClose={() => onClose()}>
//         <TouchableWithoutFeedback onPress={() => onClose()}>
//           <SafeAreaView style={styles.container}>
//             <VStack w="100%" space={'lg'} alignSelf="center">
//               <HStack mt={2} space={'md'}>
//                 <Pressable onPress={() => onClose()}>
//                   <MaterialIcons name="arrow-back" size={25} color="#000" />
//                 </Pressable>
//                 <Text fontSize="lg">Select Your Country</Text>
//               </HStack>

//               <Input
//                 // placeholder="Search by country name"
//                 width="100%"
//                 borderRadius={'$lg'}
//                 backgroundColor={'#fff'}
//                 py='$1'
//                 px='$1'

//                 // InputLeftElement={
//                 //   <Icon
//                 //     m="$2"
//                 //     ml="$3"
//                 //     size="md"
//                 //     color="gray.400"
//                 //     as={<MaterialIcons name="search" />}
//                 //   />
//                 }
//                 value={searchTxt}
//                 onChangeText={setSearchTxt}
//               />
//             </VStack>

//             <FlatList
//               keyboardShouldPersistTaps="always"
//               data={searchRes}
//               renderItem={({item}) => (
//                 <TouchableOpacity
//                   style={styles.flagWrapper}
//                   onPress={() => onSelect(item)}>
//                   <Image
//                     source={{
//                       uri: `https://flagcdn.com/w20/${item.code.toLowerCase()}.png`,
//                     }}
//                     alt="country"
//                     style={styles.flag}
//                   />
//                   <Text fontSize={12}>{item.name}</Text>
//                 </TouchableOpacity>
//               )}
//               keyExtractor={item => item.code}
//               showsVerticalScrollIndicator={false}
//             />
//           </SafeAreaView>
//         </TouchableWithoutFeedback>
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   flag: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//     resizeMode: 'contain',
//   },
//   flagWrapper: {padding: 10, flexDirection: 'row'},
//   container: {
//     flex: 1,
//     padding: 10,
//   },
// });
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CountryPicker = () => {
  return (
    <View>
      <Text>CountryPicker</Text>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({});
