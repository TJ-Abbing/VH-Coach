import NotificationPopup from 'react-native-push-notification-popup';

class Popup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NotificationPopup
          ref={(ref) => (this.popup = ref)}
          renderPopupContent={renderCustomPopup}
          shouldChildHandleResponderStart={true}
          shouldChildHandleResponderMove={true}
        />
      </View>
    );
  }
}
// ...