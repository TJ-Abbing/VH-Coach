import * as Notifications from "expo-notifications";

export async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: { title },
      body: "Here is the notification body",
      data: { data: "goes here" },
    },
    trigger: { seconds: 2 },
  });
}
