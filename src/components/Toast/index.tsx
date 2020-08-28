import React, { useEffect, useState, useCallback } from 'react';
import { Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { Container, Content, IconContainer, Message } from './style';
import { hideToast } from '../../store/actions/toast';
import theme from '../../theme';

const Toast = () => {
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const showAnimated = new Animated.Value(0);

  const animate = useCallback(() => {
    if (toast.show) {
      Animated.timing(showAnimated, {
        toValue: 1,
        duration: 700,
        useNativeDriver: false,
      }).start(() => {
        Animated.delay(250).start(() => {
          Animated.timing(showAnimated, {
            toValue: 0,
            duration: 700,
            useNativeDriver: false,
          }).start(() => {
            dispatch(hideToast());
          });
        });
      });
    } else {
      Animated.timing(showAnimated, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start(() => {});
    }
  }, [toast.show]);
  useEffect(() => {
    animate();
  }, [toast.show]);

  const renderIcon = () => {
    switch (toast.icon) {
      case 'success':
        return <AntDesign name="checkcircleo" size={40} color="white" />;
      case 'error':
        return <AntDesign name="closecircleo" size={40} color="white" />;
      default:
        return <></>;
    }
  };

  const colorAccordingToType = () => {
    switch (toast.icon) {
      case 'success':
        return '#21ba45';
      case 'error':
        return '#db2828';
      default:
        return 'transparent';
    }
  };

  return (
    <Container
      style={{
        backgroundColor: colorAccordingToType(),
        transform: [
          {
            translateY: showAnimated.interpolate({
              inputRange: [0, 1],
              outputRange: [-theme.size.screenHeigth * 0.15, 0],
            }),
          },
        ],
      }}
    >
      <Content>
        <IconContainer>{renderIcon()}</IconContainer>
        <Message>{toast.message}</Message>
      </Content>
    </Container>
  );
};

export default Toast;
