import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as PushNotifications from "nativescript-push-notifications";

@Component({
  selector: 'epw-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent {
  public constructor(translateService: TranslateService) {
    translateService.use('en');

    let settings = {
      senderID: "FIREBASE_SENDER_ID_HERE",
      badge: true,
      sound: true,
      alert: true,
      interactiveSettings: {
        actions: [{
          identifier: 'READ_IDENTIFIER',
          title: 'Read',
          activationMode: "foreground",
          destructive: false,
          authenticationRequired: true
        }, {
          identifier: 'CANCEL_IDENTIFIER',
          title: 'Cancel',
          activationMode: "foreground",
          destructive: true,
          authenticationRequired: true
        }],
        categories: [{
          identifier: 'READ_CATEGORY',
          actionsForDefaultContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER'],
          actionsForMinimalContext: ['READ_IDENTIFIER', 'CANCEL_IDENTIFIER']
        }]
      },
      notificationCallbackIOS: data => {
        console.log("DATA: " + JSON.stringify(data));
      },
      notificationCallbackAndroid: (message, data
        // , notification
      ) => {
        console.log("MESSAGE: " + JSON.stringify(message));
        console.log("DATA: " + JSON.stringify(data));
        // console.log("NOTIFICATION: " + JSON.stringify(notification));
      }
    };


    PushNotifications.register(settings, data => {
      console.log("REGISTRATION ID: " + JSON.stringify(data));

      PushNotifications.onMessageReceived(settings.notificationCallbackAndroid);
    }, error => {
      console.log(error);
    });
  }
}
