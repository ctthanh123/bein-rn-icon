import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomIcons } from 'react-native-rn-icons-library';

export default function App() {
  const onPress = () => console.log('click me!');

  const renderDemos = () => {
    return demoDatas.map((item) => (
      <View id={item.name} style={styles.boxDemo} >
        <Text>
          { item.title }
        </Text>
        <CustomIcons 
          name={item.name as any}
          size={26}
          onPress={onPress}
          labelRight={item.label}
        />
      </View>
    ));
  }

  return (
      <View style={styles.container}>
        <Text style={styles.sologan}>
          Easily customizable with a rich icon library
        </Text>
        {renderDemos()}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sologan: {
    fontSize: 18,
    marginBottom: 12,
    color: '#f51dc7',
  },
  boxDemo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const demoDatas = [
  {
    id: 1,
    title: 'Avatar fireman: ',
    name: 'avatarFireMan',
    label: '',
  },
  {
    id: 2,
    title: 'Avatar avatarHacker: ',
    name: 'avatarHacker',
    label: '',
  },
  {
    id: 3,
    title: 'Avatar avatarGamer: ',
    name: 'avatarGamer',
    label: '',
  },
  {
    id: 4,
    title: 'Icon without label: ',
    name: 'link',
    label: '',
  },
  {
    id: 5,
    title: 'Icon with label: ',
    name: 'calendar',
    label: 'Calendar',
  },
  {
    id: 6,
    title: 'Icon with label: ',
    name: 'presentation',
    label: 'Press me!',
  },
  {
    id: 7,
    title: 'Icon with label: ',
    name: 'like',
    label: 'Like!',
  },
];
