import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 
{
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
  Poppins_500Medium,
  Poppins_600SemiBold
} from '@expo-google-fonts/poppins';
import 
{
  Rajdhani_400Regular,
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from '@expo-google-fonts/rajdhani';
import { GetInformationNavigation } from './src/routes/getInformationNavigation';
import { UserProvider } from './src/context/UserContext';

import StatusBar from './src/config/StatusBar';
import AppLoading from 'expo-app-loading';

export default () => {
  let [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Rajdhani_400Regular,
    Rajdhani_700Bold,
    Rajdhani_500Medium,
  });

  if(!fontLoaded) {
    return <AppLoading />
  };

  return (
    <UserProvider>
      <StatusBar />
      <NavigationContainer>
        <GetInformationNavigation />
      </NavigationContainer>
    </UserProvider>
  );
};