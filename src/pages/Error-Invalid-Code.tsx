import React from "react";
import { View, Text, Dimensions , StyleSheet} from 'react-native';
import {useHistory} from '../components/Router';
import Logo from "../subComponents/Logo";
import SecondaryButton from "../atoms/SecondaryButton";

const ErrorRedirect = () => {
  const history = useHistory();
    return(
        <>
          <View style={style.full}>
              <View style={style.nav}>
                  <Logo />
              </View>
              <View style={style.content}>
                  <View style={style.leftContent}>
                      <Text style={style.heading}>Error : No Such Meeting Exists</Text>
                      <Text style={style.sub_heading}>Did You Enter the Correct Meeting Code? </Text>
                      <br />
                      <br />
                      <br />
                      <Text style={style.headline}>Help Code TS16-23</Text>
                      <SecondaryButton
                      onPress={() => history.push('/')}
                      text={'Back to Homepage'}
                      />
                  </View>
              </View>
          </View>
        </>
    )
}
const style = StyleSheet.create({
  full: {flex: 1},
  illustration: {flex: 1, alignSelf: 'flex-end'},
  main: {
    flex: 2,
    justifyContent: 'space-evenly',
    marginHorizontal: '10%',
  },
  nav: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  content: {flex: 6, flexDirection: 'row'},
  leftContent: {
    width: '100%',
    flex: 1,
    marginTop : '4%',
    marginRight: '5%',
    textAlign : "center",
    alignContent : "center",
    alignItems : "center"
  },
  heading: {
    fontSize: 70,
    fontWeight: '400',
    color: $config.PRIMARY_FONT_COLOR,
    marginBottom: 5,
  },
  sub_heading: {
    fontSize: 50,
    fontWeight: '300',
    color: $config.PRIMARY_FONT_COLOR,
    marginBottom: 5,
  },
  headline: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: '200',
    marginTop : 100,
    color: $config.PRIMARY_FONT_COLOR,
    marginBottom: 10,
  },
});

export default ErrorRedirect;