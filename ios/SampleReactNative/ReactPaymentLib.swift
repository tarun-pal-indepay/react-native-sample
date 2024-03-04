//
//  ReactPaymentLib.swift
//  SampleReactNative
//
//  Created by Shishir Mathur on 27/02/24.
//
import paymentlib

import Foundation

public class ReactPaymentLib {
  /// <#Description#>
  /// - Parameters:
  ///   - clientId: <#clientId description#>
  ///   - clientKey: <#clientKey description#>
  ///   - merchantId: <#merchantId description#>
  ///   - merchantName: <#merchantName description#>
  ///   - locale: <#locale description#>
  ///   - appId: <#appId description#>
  ///   - env: <#env description#>
  ///   - merchantLogoUrl: <#merchantLogoUrl description#>
    public static func initIndepaySDK(clientId: String, clientKey: String, merchantId: String, merchantName: String, locale: String, appId: String, env: String, merchantLogoUrl: String) {
        // Your   implementation here
        print("Initialized Indepay SDK with Client ID: \(clientId)")
      PaymentLib().initIndepaySDK(
          clientId: "clientId",
          clientKey: "clientKey",
          merchantId: "merchantId",
          merchantName: "Merchant Name",
          locale: "en",
          appId: "appId",
          env: "dev",
          merchantLogoUrl: "merchantLogoUrl"
      )
    }
}
