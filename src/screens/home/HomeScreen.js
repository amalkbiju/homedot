import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Display from '../../utils/Display';
import Colors from '../../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Entypo name="menu" size={40} color={Colors?.DEFAULT_BLUE} />
        <Image
          source={require('../../assets/images/homedotText.png')}
          style={{
            width: '25%',
            height: '50%',
            tintColor: Colors?.DEFAULT_BLUE,
          }}
        />
        <Feather
          name="search"
          size={30}
          color={Colors?.DEFAULT_BLUE}
          style={{marginRight: 5}}
        />
      </View>
      <ScrollView>
        <View style={styles.topCardsContainers}>
          <View style={{width: '1%', height: '100%'}} />
          <TouchableOpacity style={styles?.topCards}>
            <Image
              source={require('../../assets/images/Interior.png')}
              style={styles?.topCardImage}
            />
            <View style={styles?.topCardTextContainer}>
              <Text style={styles?.topCardText}>Interior Design</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles?.topCards}>
            <Image
              source={require('../../assets/images/Exterior.jpg')}
              style={styles?.topCardImage}
            />
            <View style={styles?.topCardTextContainer}>
              <Text style={styles?.topCardText}>Exterior Design</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles?.topCards}>
            <Image
              source={require('../../assets/images/architect.jpeg')}
              style={styles?.topCardImage}
            />
            <View style={styles?.topCardTextContainer}>
              <Text style={styles?.topCardText}>Architect</Text>
            </View>
          </TouchableOpacity>
          <View style={{width: '1%', height: '100%'}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  header: {
    width: Display?.setWidth(100),
    height: Display?.setHeight(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topCardsContainers: {
    width: Display?.setWidth(100),
    height: Display?.setHeight(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topCards: {
    width: Display?.setWidth(26),
    height: Display?.setWidth(26),
    borderRadius: 6,
    justifyContent: 'flex-end',
  },
  topCardTextContainer: {
    backgroundColor: 'rgba(50, 50, 50, 0.4)',
    width: '100%',
    height: '40%',
    position: 'absolute',
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topCardText: {
    fontSize: 14.5,
    color: Colors?.DEFAULT_WHITE,
  },
  topCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
});
