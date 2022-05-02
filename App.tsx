import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import * as Linking from 'expo-linking';

const redirect = function (context: string) {
  Linking.openURL(`vrmultibeneficios://${context}?token=2iNaEbDFI0T28g55-W5_a2Ykhe8Jj3mR`);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Button title="MarketPlace"
        onPress={() => { redirect("marketplace") }}
      />

      <Button title="Recarga"
        onPress={() => { redirect("mobiletopup") }}
      />

      <Button title="Pague Contas"
        onPress={() => { redirect("billpayment") }}
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
