import React from 'react';
import { View, Text } from 'react-native';

import { Avatar } from '../Avatar'
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar 
        urlImage="https://github.com/nathanyte.png"
      />

      <View>

        <View style={styles.user}>
          <Text style={styles.greeting}>
            Vai
          </Text>
          <Text style={styles.username}>
            Nathanzin
          </Text>
        </View>

        <Text style={styles.message}>
          Só rebenta
        </Text>

      </View>
    </View>
  )
}