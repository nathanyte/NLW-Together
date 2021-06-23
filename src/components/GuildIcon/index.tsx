import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

import discordImg from '../../assets/discordIcon.png';


export function GuildIcon() {

  return(
    <Image 
      source={discordImg} 
      style={styles.image}  
      resizeMode="cover"
    />
  )
};