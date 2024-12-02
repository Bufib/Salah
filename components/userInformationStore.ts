import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { router } from 'expo-router';

type InitialInfoState = {
  name: string;
  gender: string;
  loadInitialInfo: () => void;
};

const useInitialInfoStore = create<InitialInfoState>((set) => ({
  name: '',
  gender: '',
  loadInitialInfo: async () => {
    const name = await AsyncStorage.getItem('name');
    const gender = await AsyncStorage.getItem('gender');
    if (!name || !gender) {
      router.replace('/initialScreen');
    } else {
      set({ name, gender });
    }
  },
}));

// Automatically load information when this hook is used
export const useLoadInitialInformation = () => {
  const loadInitialInfo = useInitialInfoStore((state) => state.loadInitialInfo);

  useEffect(() => {
    loadInitialInfo();
  }, []);
};

export default useInitialInfoStore;
