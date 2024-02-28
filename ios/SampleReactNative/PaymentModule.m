#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import "PaymentModule.h"

// Import the Swift-generated header file

 // Import this if you have a corresponding .h file for the module

@implementation PaymentModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initIndePaySDK:(NSString *)clientId
                  clientKey:(NSString *)clientKey
                  merchantId:(NSString *)merchantId
                  merchantName:(NSString *)merchantName
                  locale:(NSString *)locale
                  appId:(NSString *)appId
                  env:(NSString *)env
                  merchantLogoUrl:(NSString *)merchantLogoUrl
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
  

}

RCT_EXPORT_METHOD(startPayment:(NSString *)amount
                  remarks:(NSString *)remarks
                  email:(NSString *)email
                  firstName:(NSString *)firstName
                  lastName:(NSString *)lastName
                  phone:(NSString *)phone
                  countryCode:(NSString *)countryCode
                  deeplinkCallback:(NSString *)deeplinkCallback
                  paymentMethod:(NSString *)paymentMethod
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(getPayId:(NSString *)firstName
                  lastName:(NSString *)lastName
                  mobile:(NSString *)mobile
                  countryCode:(NSString *)countryCode
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(openSOF:(NSString *)firstName
                  lastName:(NSString *)lastName
                  mobile:(NSString *)mobile
                  countryCode:(NSString *)countryCode
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(getAccounts:(NSString *)firstName
                  lastName:(NSString *)lastName
                  mobile:(NSString *)mobile
                  success:(RCTResponseSenderBlock)successCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(startBindingUsingCard:(NSString *)firstName
                  lastName:(NSString *)lastName
                  mobile:(NSString *)mobile
                  countryCode:(NSString *)countryCode
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(startBankRegistration:(NSString *)firstName
                  lastName:(NSString *)lastName
                  mobile:(NSString *)mobile
                  countryCode:(NSString *)countryCode
                  success:(RCTResponseSenderBlock)successCallback
                  error:(RCTResponseSenderBlock)errorCallback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(generateOrderId:(RCTResponseSenderBlock)callback) {
    // Your implementation here
}

RCT_EXPORT_METHOD(testMethod) {
    // Your implementation here
}

RCT_EXPORT_METHOD(testPrint:(RCTResponseSenderBlock)callback) {
    NSString *message = @"testPrint from accessing payment module";
    NSLog(@"%@", message);
    callback(@[message]); // Return the string to the JavaScript side
}

@end
