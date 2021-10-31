import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {useHistory} from '../components/Router';
import Logo from '../subComponents/Logo';
import PrimaryButton from '../atoms/PrimaryButton';

const Home = () =>{
    const history = useHistory();
    return(
        <>
        <View style={style.main}>
            <View style={style.nav}>
               <Logo />
            </View>
        </View>
        <View style={style.content}>
            <View style={style.leftContent}>
                <Text style={style.heading}>{$config.APP_NAME}</Text>
                <Text style={style.headline}>{$config.LANDING_SUB_HEADING}</Text>
                <View style={style.inputs}>
                   <PrimaryButton text = "Create A Meeting" 
                   onPress={() => history.replace("./create")}/>
                   <PrimaryButton text = "Join A Meeting" 
                   onPress={() => history.replace("./join")}/>
                </View>
            </View>
        </View>
        </>
    )
}


const style = StyleSheet.create({
    main: {
      flex: 2,
      marginHorizontal: '8%',
      marginVertical: '-7%',
    },
    nav: {
      flex: 1,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
    },
    content: {flex: 6},
    leftContent: {
      width: '100%',
      minHeight: 300,
      flex: 1,
      marginBottom: '15%',
      // marginRight: '5%',
      marginHorizontal: 'auto',
    },
    heading: {
      fontSize: 80,
      fontWeight: '300',
      textAlign: 'center',
      color: $config.PRIMARY_FONT_COLOR,
      marginBottom: 10,
    },
    headline: {
      fontSize: 20,
      fontWeight: '200',
      textAlign: 'center',
      color: $config.PRIMARY_FONT_COLOR,
      marginBottom: 80,
    },
    inputs: {
      flex: 1,
      width: '100%',
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });

export default Home;