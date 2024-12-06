import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Gender = "boy" | "girl" | undefined;

interface UserInfo {
  name: string;
  gender: Gender;
}

const useGetUserInformation = (): UserInfo & { userLoading: boolean } => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    gender: undefined,
  });
  const [userLoading, setUserLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const name = await AsyncStorage.getItem("name");
        const gender = await AsyncStorage.getItem("gender");

        // Validate gender
        const validGender: Gender =
          gender === "boy" || gender === "girl" ? gender : undefined;

        setUserInfo({
          name: name || "",
          gender: validGender,
        });
      } catch (error) {
        console.error("Error loading initial information:", error);
        setUserInfo({
          name: "",
          gender: undefined,
        });
      } finally {
        setUserLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  return { ...userInfo, userLoading };
};

export default useGetUserInformation;
