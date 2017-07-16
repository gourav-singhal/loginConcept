import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width,
    height,
  },
  curve: {
    width,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  text1: {
    color: '#fff',
    marginRight: width/2 -100,
    fontSize: 20,
  },
  text2: {
    color: '#fff',
    marginLeft: width/2 -100,
    fontSize: 20,
  },
  textContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 50,
    left: 30,
  },
  text1Container: {
    borderColor: '#fff',
    borderRightWidth: 1,
  },
  text2Container: {

  },
});

export default styles;
