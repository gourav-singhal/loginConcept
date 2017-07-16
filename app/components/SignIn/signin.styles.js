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
  bgImage1: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 90,
  },
  curve: {
    width,
    height,
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
  formContainer: {
    marginTop: 120,
    marginLeft: 50,
    backgroundColor: 'transparent',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  passContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  nullContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image1: {
    flex: 0.45,
    zIndex: 0,
  },
  image2: {
    flex: 0.55,
    zIndex: 9999,
  },
  userIcon: {
    borderColor: '$appThemeColor',
    borderRightWidth: 1,
    padding: 10,
    borderBottomWidth: 1,
  },
  passIcon: {
    borderColor: '$appThemeColor',
    borderRightWidth: 1,
    padding: 10,
    borderBottomWidth: 1,
  },
  input: {
    padding: 10,
    borderColor: '$appThemeColor',
    borderBottomWidth: 1,
  },
  nullIcon: {
    borderColor: '$appThemeColor',
    borderRightWidth: 1,
    padding: 16.5,
  },
  buttonContainer: {
    width: 200,
    height: 40,
    backgroundColor: '#cfc391',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderColor: '#cfc391',
    borderRadius: 5,
  }
});

export default styles;
