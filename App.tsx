/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  NativeModules,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Platform } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const successCallback = (result) => {
    console.log('Payment successful:', result);
  };
  
  const errorCallback = (error) => {
    console.error('Error during payment:', error);
  };

  const paymentInfo = {
    // Add your payment information here
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
  
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            alignContent: 'center',
          }}>

           <View style={{height: 100}} />
          <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            textAlign: 'center',
            color: isDarkMode ? Colors.white : Colors.black,
          }}
          >IndePay SDK On React Native Application Platform is 
           {Platform.OS === 'android' ? " Android" : " IOS"}
          </Text>
           <View style={{height: 100}} />
          <Button title="Start Payment"
     color="#D6001B"
          onPress={async () =>
          {

               var client_id = "";
               var client_secret = "";
               var merchant_id = "";
               var merchant_name = "Tara";
               console.log('Start Payment');
               if(Platform.OS === 'android') {
                console.log(NativeModules.PaymentModule);
                NativeModules.PaymentModule.testMethod();
                NativeModules.PaymentModule.initIndePaySDK(
                  client_id,
                  client_secret,
                  merchant_id,
                  "Tara",
                  "https://source.unsplash.com/random/200x200",
                  "app.tara",
                  "prod",
                  "en",
                  (paymentId, orderId, payId) => {
                    console.log(paymentId);
                    console.log(orderId);
                    console.log(payId);
                    if (payId != null) {
                      setTimeout(() => {
                        // String firstName,
                        // String lastName,
                        // String mobile,
                        // String countryCode,
                        // Callback successCallback,
                        // Callback errorCallback
                        // NativeModules.PaymentModule.getPayId(
                        //   "Tarun",
                        //   "Pal",
                        //   "7417391228",
                        //   "+62",
                        //   (paymentId, orderId, payId) => console.log(payId),
                        //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                        // );
 
                        // NativeModules.PaymentModule.getAccounts("Tarun", "Pal", "7417391228", (data) => console.log(data));
 
                        // NativeModules.PaymentModule.openSOF("Tarun", "Pal", "7417391228", "+91",
                        //   (paymentId, orderId, payId) => console.log(payId),
                        //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                        // );
 
                        // NativeModules.PaymentModule.startPayment(
                        //   "100000",
                        //   "Test",
                        //   "test@gmail.com",
                        //   "Tara",
                        //   "Tara",
                        //   "7417391228",
                        //   "+62",
                        //   "https://source.unsplash.com/random/200x200",
                        //   null,
                        //   (paymentId, orderId, payId) => console.log(paymentId),
                        //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                        // );
 
                        // String firstName,
                        // String lastName,
                        // String mobile,
                        // String countryCode,
                        // Callback successCallback,
                        // Callback errorCallback
                        // NativeModules.PaymentModule.startBindingUsingCard(
                        //   "Tarun",
                        //   "Pal",
                        //   "7417391228",
                        //   "+91",
                        //   (paymentId, orderId, payId) => console.log(paymentId),
                        //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorCode)
                        // );
 
                        NativeModules.PaymentModule.startBankRegistration(
                          "Tarun",
                          "Pal",
                          "7417391228",
                          "+91",
                          (paymentId, orderId, payId) => console.log(paymentId),
                          (errorDescription, errorCode, paymentId, orderId) => console.log(errorCode)
                        );
                      }, 2000);
                    }
                    else {
                     NativeModules.PaymentModule.getPayId(
                          "Tarun",
                          "Pal",
                          "7417391228",
                          "+62",
                          (paymentId, orderId, payId) => console.log(payId),
                          (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                        );
                    }
                  },
                  (errorDescription, errorCode, paymentId, orderId) => {
                    console.log(errorDescription);
                    console.log(errorCode);
                    console.log(paymentId);
                    console.log(orderId);
                  }
                );
               }else if(Platform.OS === 'ios') {
                console.log(NativeModules.PaymentModule);
                // NativeModules.PaymentModule.testMethod();
                // NativeModules.PaymentModule.initIndePaySDK(
                //   client_id,
                //   client_secret,
                //   merchant_id,
                //   "Tara",
                //   "https://source.unsplash.com/random/200x200",
                //   "app.tara",
                //   "prod",
                //   "en",
                //   (paymentId, orderId, payId) => {
                //     console.log(paymentId);
                //     console.log(orderId);
                //     console.log(payId);
                //     if (payId != null) {
                //       setTimeout(() => {
                //         // String firstName,
                //         // String lastName,
                //         // String mobile,
                //         // String countryCode,
                //         // Callback successCallback,
                //         // Callback errorCallback
                //         // NativeModules.PaymentModule.getPayId(
                //         //   "Tarun",
                //         //   "Pal",
                //         //   "7417391228",
                //         //   "+62",
                //         //   (paymentId, orderId, payId) => console.log(payId),
                //         //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                //         // );
 
                //         // NativeModules.PaymentModule.getAccounts("Tarun", "Pal", "7417391228", (data) => console.log(data));
 
                //         // NativeModules.PaymentModule.openSOF("Tarun", "Pal", "7417391228", "+91",
                //         //   (paymentId, orderId, payId) => console.log(payId),
                //         //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                //         // );
 
                //         // NativeModules.PaymentModule.startPayment(
                //         //   "100000",
                //         //   "Test",
                //         //   "test@gmail.com",
                //         //   "Tara",
                //         //   "Tara",
                //         //   "7417391228",
                //         //   "+62",
                //         //   "https://source.unsplash.com/random/200x200",
                //         //   null,
                //         //   (paymentId, orderId, payId) => console.log(paymentId),
                //         //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                //         // );
 
                //         // String firstName,
                //         // String lastName,
                //         // String mobile,
                //         // String countryCode,
                //         // Callback successCallback,
                //         // Callback errorCallback
                //         // NativeModules.PaymentModule.startBindingUsingCard(
                //         //   "Tarun",
                //         //   "Pal",
                //         //   "7417391228",
                //         //   "+91",
                //         //   (paymentId, orderId, payId) => console.log(paymentId),
                //         //   (errorDescription, errorCode, paymentId, orderId) => console.log(errorCode)
                //         // );
 
                //         NativeModules.PaymentModule.startBankRegistration(
                //           "Tarun",
                //           "Pal",
                //           "7417391228",
                //           "+91",
                //           (paymentId, orderId, payId) => console.log(paymentId),
                //           (errorDescription, errorCode, paymentId, orderId) => console.log(errorCode)
                //         );
                //       }, 2000);
                //     }
                //     else {
                //      NativeModules.PaymentModule.getPayId(
                //           "Tarun",
                //           "Pal",
                //           "7417391228",
                //           "+62",
                //           (paymentId, orderId, payId) => console.log(payId),
                //           (errorDescription, errorCode, paymentId, orderId) => console.log(errorDescription)
                //         );
                //     }
                //   },
                //   (errorDescription, errorCode, paymentId, orderId) => {
                //     console.log(errorDescription);
                //     console.log(errorCode);
                //     console.log(paymentId);
                //     console.log(orderId);
                //   }
                // );
              NativeModules.PaymentModule.testPrint((message) => {
                console.log(message);
              });
                
               }
               
              }
               // add delay for 2 seconds
          } />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
