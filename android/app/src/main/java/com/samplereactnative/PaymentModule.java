package com.samplereactnative;

import android.app.Activity;
import android.content.Context;
import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.indepay.umps.paymentlib.PaymentLib;
import com.indepay.umps.paymentlib.PaymentListener;
import com.facebook.react.bridge.Callback;
import com.indepay.umps.paymentlib.data.models.PaymentMethodType;

import java.nio.charset.Charset;
import java.util.Random;
import java.util.UUID;
import com.google.gson.Gson;

public class PaymentModule extends ReactContextBaseJavaModule {


    public PaymentModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "PaymentModule";
    }

    @ReactMethod
    public void initIndePaySDK(String clientId, String clientKey,
                               String merchantId,
                               String merchantName, String locale, String appId, String env,
                               String merchantLogoUrl,
                               Callback successCallback,
                               Callback errorCallback) {
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        PaymentLib.Companion.initIndePaySDK(
                clientId,
                clientKey,
                merchantId,
                merchantName, merchantLogoUrl, appId, env, locale,
                context, currentActivity,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId, @Nullable String orderId, @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
                }
        );
    }

    @ReactMethod
    public void startPayment(String amount, String remarks, String email,
                                 String firstName, String lastName, String phone, String countryCode,
                             String deeplinkCallback,
                             String paymentMethod,
                             Callback successCallback, Callback errorCallback) {
        Activity currentActivity = getCurrentActivity();
        PaymentMethodType paymentMethodEnum = paymentMethod != null ? PaymentMethodType.valueOf(paymentMethod) : null;
        PaymentLib.Companion.startPayment(currentActivity, generateOrderId(),
                Double.parseDouble(amount),
                remarks, email, firstName, lastName, phone, countryCode,
                deeplinkCallback, paymentMethodEnum,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId, @Nullable String orderId, @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
                }

        );
    }

    @ReactMethod
    public void getPayId(
            String firstName,
            String lastName,
            String mobile,
            String countryCode,
            Callback successCallback,
            Callback errorCallback
    ) {
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        PaymentLib.Companion.getPayId(context,
                firstName, lastName,
                mobile,countryCode,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId, @Nullable String orderId, @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
          },true
        );
    }

    @ReactMethod
    public void openSOF(
            String firstName,
            String lastName,
            String mobile,
            String countryCode,
            Callback successCallback,
            Callback errorCallback
    ) {
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        PaymentLib.Companion.openSOFScreen(currentActivity,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId, @Nullable String orderId, @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
                },
                firstName, lastName,
                countryCode,
                mobile
        );
    }

    @ReactMethod
    public void getAccounts(
            String firstName,
            String lastName,
            String mobile,
            Callback successCallback
    ) {
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        var data = PaymentLib.Companion.getBankAccounts(context);
        android.util.Log.d("getAccounts", "getAccounts: " + data);
        // convert to json
        var jsonData = new Gson().toJson(data);
        android.util.Log.d("Gson", "getAccounts: " + jsonData);
        successCallback.invoke(jsonData);
    }

    @ReactMethod
    public void startBindingUsingCard(
            String firstName,
            String lastName,
            String mobile,
            String countryCode,
            Callback successCallback,
            Callback errorCallback
    ){
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        PaymentLib.Companion
                .startBindingUsingCard(currentActivity,
                firstName, lastName,
                countryCode,
                mobile,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId, @Nullable String orderId, @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
                }
        );
    }


    // start Bank Binding
    @ReactMethod
    public void startBankRegistration(
            String firstName,
            String lastName,
            String mobile,
            String countryCode,
            Callback successCallback,
            Callback errorCallback
    ){
        Context context = getReactApplicationContext();
        Activity currentActivity = getCurrentActivity();
        PaymentLib.Companion.startBankRegistration(
                currentActivity,
                firstName, lastName,
                mobile,
                countryCode,
                new PaymentListener() {
                    @Override
                    public void onResultSuccess(@Nullable String paymentId,
                                                @Nullable String orderId,
                                                @Nullable String payId) {
                        Log.d("PaymentModule", "init event called successfully___" + paymentId + "___" + orderId + "___" + payId);
                        successCallback.invoke(
                                paymentId, orderId, payId);
                    }

                    @Override
                    public void onResultFailure(@Nullable String errorDescription,
                                                @Nullable String errorCode,
                                                @Nullable String paymentId,
                                                @Nullable String orderId) {
                        Log.d("PaymentModule", "init event failed with error___" + errorDescription + "___" + errorCode + "___" + paymentId + "___" + orderId);

                        errorCallback.invoke(
                                errorDescription,
                                errorCode,
                                paymentId,
                                orderId
                        );
                    }
                }
        );
    }

    @ReactMethod
    public String generateOrderId() {
        byte[] array = new byte[7]; // length is bounded by 7
        new Random().nextBytes(array);
        Log.d("PaymentModule", "OrderId generated___" + new String(array, Charset.forName("UTF-8")));
        return new String(array, Charset.forName("UTF-8"));
    }

    // test method
    @ReactMethod
    public void testMethod() {
        Log.d("PaymentModule", "testMethod called successfully___");
    }

}
