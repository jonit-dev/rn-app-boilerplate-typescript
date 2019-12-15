import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { useDispatch } from 'react-redux';

import { images } from '../../constants/Images.constant';
import { colors } from '../../constants/UI/Colors.constant';
import { toggleOnboarding } from '../../store/actions/user.actions';

export const OnboardingScreen = props => {
  const dispatch = useDispatch();

  const finishOnboarding = () => {
    dispatch(toggleOnboarding(true)); // set onboarding to true in our reducer, so we wont be redirected to this screen anymore (unless we purge the state)

    props.navigation.navigate("Init");
  };
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => finishOnboarding()}
        pages={[
          {
            backgroundColor: colors.accent,
            image: (
              <Image
                source={images.onboardingStep1}
                style={styles.onboardingImage}
              />
            ),
            title: "This is the step 1",
            subtitle: "Done with React Native Onboarding Swiper"
          },
          {
            backgroundColor: colors.accent,
            image: (
              <Image
                source={images.onboardingStep2}
                style={styles.onboardingImage}
              />
            ),
            title: "This is the step 2",
            subtitle: "Done with React Native Onboarding Swiper"
          },
          {
            backgroundColor: colors.accent,
            image: (
              <Image
                source={images.onboardingStep3}
                style={styles.onboardingImage}
              />
            ),
            title: "This is the step 3",
            subtitle: "Done with React Native Onboarding Swiper"
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  onboardingImage: {
    width: 200,
    height: 200
  }
});
