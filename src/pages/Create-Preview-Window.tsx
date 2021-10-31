import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
  } from 'react-native';

const style = StyleSheet.create({
    full: {flex: 1},
    main: {
      flex: 2,
      justifyContent: 'space-evenly',
      marginHorizontal: '8%',
      marginVertical: '2%',
    },
    nav: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    content: {flex: 6, flexDirection: 'row'},
    leftContent: {
      width: '100%',
      flex: 1,
      justifyContent: 'space-evenly',
      marginBottom: '13%',
      minHeight: 350,
      // marginRight: '5%',
      marginHorizontal: 'auto',
    },
    heading: {
      fontSize: 60,
      fontWeight: '300',
      textAlign: 'center',
      color: $config.PRIMARY_FONT_COLOR,
      marginBottom: 4,
    },
    headline: {
      fontSize: 20,
      fontWeight: '200',
      textAlign: 'center',
      color: $config.PRIMARY_FONT_COLOR,
      marginBottom: 80,
    },
  });
  