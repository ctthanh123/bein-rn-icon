import React, {  } from 'react';

import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import CustomIcons from 'react-native-rn-icons-library';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CustomIcons 
          name='xin chao 123'
        />
        <Text>asdasd asd asd</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
