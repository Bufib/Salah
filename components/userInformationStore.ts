// // import { create } from 'zustand';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { useEffect } from 'react';
// // import { router } from 'expo-router';

// // type InitialInfoState = {
// //   name: string;
// //   gender: "boy" | "girl" | undefined;
// //   loadInitialInfo: () => void;
// // };

// // const useInitialInfoStore = create<InitialInfoState>((set) => ({
// //   name: '',
// //   gender: undefined,
// //   loadInitialInfo: async () => {
// //     const name = await AsyncStorage.getItem('name');
// //     const gender = await AsyncStorage.getItem('gender');
// //     if (!name || !gender) {
// //       router.replace('/initialScreen');
// //     } else {
// //       set({ name, gender: gender as "boy" | "girl" });
// //     }
// //   },
// // }));

// // // Automatically load information when this hook is used
// // export const useLoadInitialInformation = () => {
// //   const loadInitialInfo = useInitialInfoStore((state) => state.loadInitialInfo);

// //   useEffect(() => {
// //     loadInitialInfo();
// //   }, []);
// // };

// // export default useInitialInfoStore;

// // import { create } from 'zustand';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import { useEffect } from 'react';
// // import { router } from 'expo-router';

// // type userInformation = {
// //   name: string;
// //   gender: "boy" | "girl" | undefined; // Gender is restricted
// //   loadInitialInfo: () => void;
// // };

// // const useUserInformationStore = create<userInformation>((set) => ({
// //   name: '',
// //   gender: undefined, // Initial state
// //   loadInitialInfo: async () => {
// //     const name = await AsyncStorage.getItem('name');
// //     const gender = await AsyncStorage.getItem('gender');

// //     // Validate that gender is either "boy" or "girl"
// //     if (!name || (gender !== "boy" && gender !== "girl")) {
// //       router.replace('/initialScreen');
// //     } else {
// //       set({ name, gender: gender as "boy"  | "girl" });
// //     }
// //   },
// // }));

// // // // Automatically load information when this hook is used
// // export const useLoadInitialInformation = () => {
// //   const loadInitialInfo = useUserInformationStore((state) => state.loadInitialInfo);

// //   useEffect(() => {
// //     loadInitialInfo();
// //   }, []);
// // };

// // export default useUserInformationStore;


// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { router } from 'expo-router';

// // Zustand store

// type userInformation = {
//   name: string;
//   gender: "boy" | "girl" | undefined; // Gender is restricted
// };

// const useUserInformationStore = create<userInformation>((set) => {
//   const loadInitialInfo = async () => {
//     const name = await AsyncStorage.getItem('name');
//     const gender = await AsyncStorage.getItem('gender');

//     // Validate that gender is either "boy" or "girl"
//     if (!name || (gender !== "boy" && gender !== "girl")) {
//       router.replace('/initialScreen');
//     } else {
//       set({ name, gender: gender as "boy" | "girl" });
//     }
//   };

//   // Automatically load information when the store is created
//   loadInitialInfo();

//   return {
//     name: '',
//     gender: undefined,
//   };
// });

// export default useUserInformationStore;
