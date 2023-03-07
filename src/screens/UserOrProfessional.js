import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../utils/Colors';
import Display from '../utils/Display';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import AnimatedTyping from '../utils/AnimationType';
const UserOrProfessional = ({navigation}) => {
  const [showUserView, setShowUserView] = useState(false);
  const [showProfessionalView, setShowProfessionalView] = useState(false);
  const [userTextComplete, setUserTextComplete] = useState(false);
  const [userProfessionalSpace, setUserProfessionalSpace] = useState(true);
  const animation = useSharedValue({
    width: Display?.setWidth(40),
    height: Display?.setWidth(40),
  });
  const [userButtomClick, setUserButtomClick] = useState(false);
  const [ProfessionalButtonClick, setProfessionalButtonClick] = useState(false);
  const animationStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(animation.value.width, {
        duration: 1000,
      }),
      height: withTiming(animation.value.height, {
        duration: 600,
      }),
    };
  });
  console?.log('space', userProfessionalSpace);
  return (
    <View style={styles?.container}>
      <StatusBar backgroundColor={Colors?.DEFAULT_WHITE} />
      {ProfessionalButtonClick ? null : (
        <TouchableOpacity
          onPress={() => {
            animation.value = {
              width: Display?.setWidth(85),
              height: Display?.setHeight(80),
            };
            setUserButtomClick(true);
            setUserProfessionalSpace(false);
          }}>
          <Animated.View style={[styles.box, animationStyle]}>
            {userButtomClick ? (
              <View>
                <View
                  style={{
                    width: '100%',
                    height: '10%',
                  }}
                />
                <View style={styles?.animationViewIconContainer}>
                  <FontAwesome5
                    name="user-alt"
                    size={60}
                    color={Colors?.DEFAULT_WHITE}
                  />
                </View>
                <Text style={styles?.animationViewHeaderText}>User</Text>
                <View style={styles?.animationTypingTextConatiner}>
                  <AnimatedTyping
                    text={[
                      'If you want to construct, maintain, or upgrade your home.',
                    ]}
                    onComplete={() => setUserTextComplete(true)}
                  />
                </View>
                <View style={{width: '100%', height: '5%'}} />

                {userTextComplete ? (
                  <TouchableOpacity
                    style={styles?.animatedViewBecomeButton}
                    onPress={() =>
                      navigation?.navigate('UserRegistrationScreen')
                    }>
                    <Text style={styles?.animatedViewBecomeButtonText}>
                      Become a user
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <View>
                <FontAwesome5
                  name="user-alt"
                  size={35}
                  color={Colors?.DEFAULT_WHITE}
                />
                <View style={{width: '100%', height: '2%'}} />
                <Text style={styles?.buttonText}>User</Text>
              </View>
            )}
          </Animated.View>
        </TouchableOpacity>
      )}

      {userProfessionalSpace && <View style={{width: '100%', height: '6%'}} />}
      {userButtomClick ? null : (
        <TouchableOpacity
          onPress={() => {
            animation.value = {
              width: Display?.setWidth(85),
              height: Display?.setHeight(80),
            };
            setProfessionalButtonClick(true);
            setUserProfessionalSpace(false);
          }}>
          <Animated.View style={[styles.box, animationStyle]}>
            {ProfessionalButtonClick ? (
              <View>
                <View
                  style={{
                    width: '100%',
                    height: '10%',
                  }}
                />
                <View style={styles?.animationViewIconContainer}>
                  <FontAwesome5
                    name="user-cog"
                    size={60}
                    color={Colors?.DEFAULT_WHITE}
                  />
                </View>
                <Text style={styles?.animationViewHeaderText}>
                  Professional
                </Text>
                <View style={styles?.animationTypingTextConatiner}>
                  <AnimatedTyping
                    text={['If you are an architect, designer, contractor etc']}
                    onComplete={() => setUserTextComplete(true)}
                  />
                </View>
                <View style={{width: '100%', height: '5%'}} />

                {userTextComplete ? (
                  <TouchableOpacity
                    style={styles?.animatedViewBecomeButton}
                    onPress={() =>
                      navigation?.navigate('ProfessionalRegisterScreen')
                    }>
                    <Text style={styles?.animatedViewBecomeButtonText}>
                      Become a Professional
                    </Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            ) : (
              <View>
                <FontAwesome5
                  name="user-cog"
                  size={35}
                  color={Colors?.DEFAULT_WHITE}
                  style={styles?.buttonIcon}
                />
                <View style={{width: '100%', height: '2%'}} />
                <Text style={styles?.buttonText}>Professional</Text>
              </View>
            )}
          </Animated.View>
        </TouchableOpacity>
      )}

      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={showUserView}
          onRequestClose={() => {
            setShowUserView(!showUserView);
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 22,
            }}>
            <View
              style={{
                backgroundColor: Colors?.DEFAULT_WHITE,
                width: Display?.setWidth(85),
                height: Display?.setHeight(80),
                elevation: 20,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '100%',
                  height: '10%',
                }}
              />
              <View
                style={{
                  width: '100%',
                  height: '20%',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <FontAwesome5
                  name="user-alt"
                  size={60}
                  color={Colors?.DEFAULT_BLUE}
                />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  color: Colors?.DEFAULT_BLUE,
                }}>
                User
              </Text>
              <View
                style={{
                  width: '100%',
                  height: '30%',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <AnimatedTyping
                  text={[
                    'If you want to construct, maintain, or upgrade your home.',
                  ]}
                  onComplete={() => setUserTextComplete(true)}
                />
              </View>
              <View style={{width: '100%', height: '5%'}} />

              {userTextComplete ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors?.DEFAULT_BLUE,
                    width: '60%',
                    height: Display?.setWidth(12),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}>
                  <Text>Continue</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default UserOrProfessional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.DEFAULT_WHITE,
  },
  button: {
    backgroundColor: Colors?.DEFAULT_BLUE,
    width: Display?.setWidth(40),
    height: Display?.setWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 20,
  },
  buttonText: {
    fontSize: 15,
    color: Colors?.DEFAULT_WHITE,
    fontWeight: '900',
  },
  buttonIcon: {
    alignSelf: 'center',
  },
  box: {
    // width: 200,
    // height: 200,
    backgroundColor: Colors?.DEFAULT_BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 20,
  },
  animationViewIconContainer: {
    width: '100%',
    height: '20%',

    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  animationViewHeaderText: {
    fontSize: 20,
    color: Colors?.DEFAULT_WHITE,
    alignSelf: 'center',
  },
  animationTypingTextConatiner: {
    width: '100%',
    height: '30%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedViewBecomeButton: {
    backgroundColor: Colors?.DEFAULT_WHITE,
    width: Display?.setWidth(50),
    height: Display?.setWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
  },
  animatedViewBecomeButtonText: {
    fontSize: 15,
    color: Colors?.DEFAULT_BLUE,
  },
});
