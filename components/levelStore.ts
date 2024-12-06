// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import levleButtons from '@/components/levelButtonsIndex'; // Update to actual path where levelButtons are located

// // Zustand store to manage levels and AsyncStorage

// type LevelState = {
//   levels: Record<string, boolean>; // Levels with accessibility status
//   loadLevels: () => void;
//   updateLevelAccess: (level: string, accessible: boolean) => void;
//   inaccessibleLevels: string[];
// };

// const useLevelStore = create<LevelState>((set) => ({
//   levels: levleButtons.reduce((acc, level) => {
//     acc[level] = false; // Initialize all levels as inaccessible by default
//     return acc;
//   }, {} as Record<string, boolean>),
//   inaccessibleLevels: levleButtons, // Initially, all levels are inaccessible
//   loadLevels: async () => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       const updatedLevels = { ...levleButtons.reduce((acc, level) => {
//         acc[level] = levels[level] ?? false; // Use stored value or default to false
//         return acc;
//       }, {} as Record<string, boolean>) };
//       const inaccessibleLevels = Object.keys(updatedLevels).filter(
//         (level) => !updatedLevels[level]
//       );
//       set({ levels: updatedLevels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error loading levels from AsyncStorage:', error);
//     }
//   },
//   updateLevelAccess: async (level, accessible) => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       levels[level] = accessible;
//       await AsyncStorage.setItem('levels', JSON.stringify(levels));
//       const inaccessibleLevels = Object.keys(levels).filter(
//         (level) => !levels[level]
//       );
//       set({ levels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error updating level access in AsyncStorage:', error);
//     }
//   },
// }));

// // Function to make a specific level accessible
// export const makeLevelAccessible = async (level: string) => {
//   const updateLevelAccess = useLevelStore.getState().updateLevelAccess;
//   await updateLevelAccess(level, true);
// };

// export default useLevelStore;






// import { create } from "zustand";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { levelButtons } from "@/components/levelButtonsIndex"; // Update to actual path where levelButtons are located

// // Zustand store to manage levels and AsyncStorage

// type LevelState = {
//   levels: Record<string, boolean>; // Levels with accessibility status
//   loadLevels: () => void;
//   updateLevelAccess: (level: string, accessible: boolean) => void;
//   inaccessibleLevels: string[];
// };

// const useLevelStore = create<LevelState>((set) => ({
//   levels: levelButtons.reduce((acc, level) => {
//     acc[level] = level === "start"; // Make 'start' level accessible by default
//     return acc;
//   }, {} as Record<string, boolean>),
//   inaccessibleLevels: levelButtons.filter((level) => level !== "start"), // Initially, all levels except 'start' are inaccessible
//   loadLevels: async () => {
//     try {
//       const levelsString = await AsyncStorage.getItem("levels");
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       const updatedLevels = {
//         ...levelButtons.reduce((acc, level) => {
//           acc[level] = levels[level] ?? level === "start"; // Use stored value or default to 'start' being accessible
//           return acc;
//         }, {} as Record<string, boolean>),
//       };
//       const inaccessibleLevels = Object.keys(updatedLevels).filter(
//         (level) => !updatedLevels[level]
//       );
//       set({ levels: updatedLevels, inaccessibleLevels });
//     } catch (error) {
//       console.error("Error loading levels from AsyncStorage:", error);
//     }
//   },
//   updateLevelAccess: async (level, accessible) => {
//     try {
//       const levelsString = await AsyncStorage.getItem("levels");
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       levels[level] = accessible;
//       await AsyncStorage.setItem("levels", JSON.stringify(levels));
//       const inaccessibleLevels = Object.keys(levels).filter(
//         (level) => !levels[level]
//       );
//       set({ levels, inaccessibleLevels });
//     } catch (error) {
//       console.error("Error updating level access in AsyncStorage:", error);
//     }
//   },
// }));

// // Function to make a specific level accessible
// export const makeLevelAccessible = async (level: string) => {
//   const updateLevelAccess = useLevelStore.getState().updateLevelAccess;
//   await updateLevelAccess(level, true);
// };

// export default useLevelStore;



// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { levelButtons } from '@/components/levelButtonsIndex'; // Update to actual path where levelButtons are located

// // Zustand store to manage levels and AsyncStorage

// type LevelState = {
//   levels: Record<string, boolean>; // Levels with accessibility status
//   loadLevels: () => void;
//   updateLevelAccess: (level: string, accessible: boolean) => void;
//   activateNextLevel: () => void;
//   inaccessibleLevels: string[];
// };

// const useLevelStore = create<LevelState>((set) => ({
//   levels: levelButtons.reduce((acc, level) => {
//     acc[level] = level === 'start'; // Make 'start' level accessible by default
//     return acc;
//   }, {} as Record<string, boolean>),
//   inaccessibleLevels: levelButtons.filter(level => level !== 'start'), // Initially, all levels except 'start' are inaccessible
//   loadLevels: async () => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       const updatedLevels = { ...levelButtons.reduce((acc, level) => {
//         acc[level] = levels[level] ?? (level === 'start'); // Use stored value or default to 'start' being accessible
//         return acc;
//       }, {} as Record<string, boolean>) };
//       const inaccessibleLevels = Object.keys(updatedLevels).filter(
//         (level) => !updatedLevels[level]
//       );
//       set({ levels: updatedLevels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error loading levels from AsyncStorage:', error);
//     }
//   },
//   updateLevelAccess: async (level, accessible) => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       levels[level] = accessible;
//       await AsyncStorage.setItem('levels', JSON.stringify(levels));
//       const inaccessibleLevels = Object.keys(levels).filter(
//         (level) => !levels[level]
//       );
//       set({ levels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error updating level access in AsyncStorage:', error);
//     }
//   },
//   activateNextLevel: async () => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       const accessibleLevels = levelButtons.filter(level => levels[level]);
//       const nextLevelIndex = levelButtons.findIndex(level => level === accessibleLevels[accessibleLevels.length - 1]) + 1;
//       if (nextLevelIndex < levelButtons.length) {
//         const nextLevel = levelButtons[nextLevelIndex];
//         await useLevelStore.getState().updateLevelAccess(nextLevel, true);
//       }
//     } catch (error) {
//       console.error('Error activating next level in AsyncStorage:', error);
//     }
//   },
// }));

// // Function to make a specific level accessible
// export const makeLevelAccessible = async (level: string) => {
//   const updateLevelAccess = useLevelStore.getState().updateLevelAccess;
//   await updateLevelAccess(level, true);
// };

// export default useLevelStore;


// import { create } from 'zustand';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { levelButtons } from '@/components/levelButtonsIndex'; // Update to actual path where levelButtons are located

// // Zustand store to manage levels and AsyncStorage

// type LevelState = {
//   levels: Record<string, boolean>; // Levels with accessibility status
//   loadLevels: () => void;
//   updateLevelAccess: (level: string, accessible: boolean) => void;
//   activateNextLevel: () => void;
//   inaccessibleLevels: string[];
// };

// const useLevelStore = create<LevelState>((set) => ({
//   levels: levelButtons.reduce((acc, level) => {
//     acc[level] = level === 'start'; // Make 'start' level accessible by default
//     return acc;
//   }, {} as Record<string, boolean>),
//   inaccessibleLevels: levelButtons.filter(level => level !== 'start'), // Initially, all levels except 'start' are inaccessible
//   loadLevels: async () => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       const updatedLevels = { ...levelButtons.reduce((acc, level) => {
//         acc[level] = levels[level] ?? (level === 'start'); // Use stored value or default to 'start' being accessible
//         return acc;
//       }, {} as Record<string, boolean>) };
//       const inaccessibleLevels = Object.keys(updatedLevels).filter(
//         (level) => !updatedLevels[level]
//       );
//       set({ levels: updatedLevels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error loading levels from AsyncStorage:', error);
//     }
//   },
//   updateLevelAccess: async (level, accessible) => {
//     try {
//       const levelsString = await AsyncStorage.getItem('levels');
//       const levels = levelsString ? JSON.parse(levelsString) : {};
//       levels[level] = accessible;
//       await AsyncStorage.setItem('levels', JSON.stringify(levels));
//       const inaccessibleLevels = Object.keys(levels).filter(
//         (level) => !levels[level]
//       );
//       set({ levels, inaccessibleLevels });
//     } catch (error) {
//       console.error('Error updating level access in AsyncStorage:', error);
//     }
//   },
//   activateNextLevel: async () => {
//     try {
//       const accessibleLevels = levelButtons.filter(level => useLevelStore.getState().levels[level]);
//       const nextLevelIndex = levelButtons.findIndex(level => level === accessibleLevels[accessibleLevels.length - 1]) + 1;
//       if (nextLevelIndex < levelButtons.length) {
//         const nextLevel = levelButtons[nextLevelIndex];
//         await useLevelStore.getState().updateLevelAccess(nextLevel, true);
//       }
//     } catch (error) {
//       console.error('Error activating next level:', error);
//     }
//   },
// }));

// // Function to make a specific level accessible
// export const makeLevelAccessible = async (level: string) => {
//   const updateLevelAccess = useLevelStore.getState().updateLevelAccess;
//   await updateLevelAccess(level, true);
// };

// export const activateNextLevel = async () => {
//   await useLevelStore.getState().activateNextLevel();
// };



import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { levelButtons } from '@/components/levelButtonsIndex'; // Update to actual path where levelButtons are located

// Zustand store to manage levels and AsyncStorage

type LevelState = {
  levels: Record<string, boolean>; // Levels with accessibility status
  loadLevels: () => void;
  updateLevelAccess: (level: string, accessible: boolean) => void;
  activateNextLevel: () => void;
  inaccessibleLevels: string[];
};

const useLevelStore = create<LevelState>((set) => ({
  levels: levelButtons.reduce((acc, level) => {
    acc[level] = level === 'start'; // Make 'start' level accessible by default
    return acc;
  }, {} as Record<string, boolean>),
  // inaccessibleLevels: levelButtons.filter(level => level !== 'start'), Initially, all levels except 'start' are inaccessible



  // !Workaround 
  inaccessibleLevels: levelButtons.filter((level => level !== 'start' && level !== 'fatiha' && level !== 'start')), 


  loadLevels: async () => {
    
    try {
      const levelsString = await AsyncStorage.getItem('levels');
      const levels = levelsString ? JSON.parse(levelsString) : {};
      const updatedLevels = { ...levelButtons.reduce((acc, level) => {
       // acc[level] = levels[level] ?? (level === 'start'); // Use stored value or default to 'start' being accessible


  // !Workaround 
       acc[level] = levels[level] ?? (level === 'start' || level == 'fatiha' ||level !== 'start');


        return acc;
      }, {} as Record<string, boolean>) };
      const inaccessibleLevels = Object.keys(updatedLevels).filter(
        (level) => !updatedLevels[level]
      );
      set({ levels: updatedLevels, inaccessibleLevels });
    } catch (error) {
      console.error('Error loading levels from AsyncStorage:', error);
    }
  },
  updateLevelAccess: async (level, accessible) => {
    try {
      const levelsString = await AsyncStorage.getItem('levels');
      const levels = levelsString ? JSON.parse(levelsString) : {};
      levels[level] = accessible;
      await AsyncStorage.setItem('levels', JSON.stringify(levels));
      const inaccessibleLevels = Object.keys(levels).filter(
        (level) => !levels[level]
      );
      set({ levels, inaccessibleLevels });
    } catch (error) {
      console.error('Error updating level access in AsyncStorage:', error);
    }
  },
  activateNextLevel: async () => {
    try {
      const accessibleLevels = levelButtons.filter(level => useLevelStore.getState().levels[level]);
      const nextLevelIndex = levelButtons.findIndex(level => level === accessibleLevels[accessibleLevels.length - 1]) + 1;
      if (nextLevelIndex < levelButtons.length) {
        const nextLevel = levelButtons[nextLevelIndex];
        await useLevelStore.getState().updateLevelAccess(nextLevel, true);
      }
    } catch (error) {
      console.error('Error activating next level:', error);
    }
  },
}));

export { useLevelStore };

// Function to make a specific level accessible
export const makeLevelAccessible = async (level: string) => {
  const updateLevelAccess = useLevelStore.getState().updateLevelAccess;
  await updateLevelAccess(level, true);
};

export const activateNextLevel = async () => {
  await useLevelStore.getState().activateNextLevel();
};


