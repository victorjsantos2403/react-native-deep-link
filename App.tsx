import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import * as Linking from 'expo-linking';

const redirect = function (context: string) {
  Linking.openURL(`exp://192.168.15.8:19001/vrmultibeneficios/${context}`);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="MarketPlace"
        onPress={() => { redirect("marketPlace") }}
      />

      <Button title="Recarga"
        onPress={() => { redirect("recharge") }}
      />

      <Button title="Pague Contas"
        onPress={() => { redirect("billPayment") }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
