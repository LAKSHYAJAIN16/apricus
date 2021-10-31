import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import chatContext, {controlMessageEnum} from './ChatContext';
import ColorContext from './ColorContext';
import SecondaryButton from '../atoms/SecondaryButton';
import TextInput from '../atoms/TextInput'
import { useHistory } from 'react-router';

const HostControlView = () => {
  const history = useHistory();
  const {sendControlMessage} = useContext(chatContext);
  const {primaryColor} = useContext(ColorContext);
  return (
    <>
      <Text style={style.heading}>Host Controls</Text>
      <View>
        <View style={style.btnContainer}>
          <SecondaryButton
            onPress={() => sendControlMessage(controlMessageEnum.muteAudio)}
            text={'Turn off all audios'}
          />
        </View>
        <View style={style.btnContainer}>
          <SecondaryButton
            onPress={() => sendControlMessage(controlMessageEnum.muteVideo)}
            text={'Turn off Mute all videos'}
          />
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: $config.PRIMARY_FONT_COLOR,
    // marginBottom: 20,
    alignSelf: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
});

export default HostControlView;
