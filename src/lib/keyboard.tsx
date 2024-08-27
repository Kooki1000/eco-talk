// This code is taken from the original version found at:
// https://github.com/obytes/react-native-template-obytes/blob/master/src/core/keyboard.ts
// Original code by OBytes (https://github.com/obytes), licensed under the MIT License.

import { useFocusEffect } from '@react-navigation/native';
import type { ReactNode } from 'react';
import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AvoidSoftInput } from 'react-native-avoid-softinput';

/**
 *  This hook should be used in every screen that has a form input field to avoid the keyboard.
 *  This is not a one for all solution, if you want more customization please refer to those examples: https://mateusz1913.github.io/react-native-avoid-softinput/docs/recipes/recipes-form
 */

export const useSoftKeyboardEffect = () => {
  useFocusEffect(() => {
    AvoidSoftInput.setShouldMimicIOSBehavior(true);
    AvoidSoftInput.setEnabled(true);
    // AvoidSoftInput.setAvoidOffset(30);
    AvoidSoftInput.setShowAnimationDelay(0);
    AvoidSoftInput.setShowAnimationDuration(150);
    AvoidSoftInput.setHideAnimationDuration(150);
    AvoidSoftInput.setHideAnimationDelay(0);

    return () => {
      AvoidSoftInput.setAvoidOffset(0);
      AvoidSoftInput.setEnabled(false);
      AvoidSoftInput.setShouldMimicIOSBehavior(false);
    };
  });
};

export const DismissKeyboard = ({ children }: { children: ReactNode }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
