import {StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

const App = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Welcome my homepage!</Text>
      <Text style={styles.paraStyle}>I am developer ReactNative, Reactjs and Golang</Text>
        <View>
          <Image style={styles.imgStyle}
            source={{
              uri: 'https://github.com/AlexandreLima658.png',
            }}
          />
        </View>

        <View style={styles.aboutLayout}>
            <Text style={styles.aboutSubHeader}> About me</Text>
            <Text style={[styles.paraStyle, styles.aboutPara]}>
              My name is Carlos Alexandre from Morada Nova-ce, I am 24 years old.
              I started in the technology area in high school, with a technical course
              in computer science and soon after started a course in Software Engineering
              at the Federal University of Ceará (UFC) - Russas Campus.
            </Text>
        </View>

        <Text style={styles.mainHeader}>Folow me on Social Networks</Text>

        <View style={styles.menuContainer}>
            <TouchableOpacity
              onePress={() => Linking.openURL("https://www.linkedin.com/in/carlos-alexandre-lima-da-silva-06b7221a4/")}
              style={styles.buttonStyle}
            >
              <Image
                style={styles.iconStyles}
                  source={require('./assets/linkedin.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onePress={() => Linking.openURL("https://github.com/AlexandreLima658/AlexandreLima658")}
              style={styles.buttonStyle}
            >
              <Image
                style={styles.iconStyles}
                source={require('./assets/github.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onePress={() => Linking.openURL("https://www.instagram.com/alexandrelima021/")}
              style={styles.buttonStyle}
            >
              <Image
                style={styles.iconStyles}
                source={require('./assets/instagram.png')}
              />
            </TouchableOpacity>
        </View>

    </View>
  );

}

const styles = StyleSheet.create({
  aboutContainer :{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 22,
    color:'#1d3557',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20,

  },
  paraStyle: {
    fontSize: 14,
    color: '#7d7d7d',
    paddingBottom: 20,
    padding: 8,
  },
  aboutLayout: {
    color:  '#fff',
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30,
  },

  aboutSubHeader : {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    lineHeight: 30,
    alignSelf: 'center',
  },
  aboutPara :{
    color: '#fff'
  },
  menuContainer : {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyles: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  }

});


export default App;