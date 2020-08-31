import React, { useState, useEffect } from 'react';
import {
  ControlsContainer,
  ControlButton,
  ControlLabel,
  ControlValue,
} from './style';
import { Props } from './types';
import theme from '../../theme';

const ProductControl = (props: Props) => {
  const [value, setValue] = useState(parseInt(props.unit) || 1);

  useEffect(() => {
    props.onChangeValue(parseInt(value));
  }, [value]);

  useEffect(() => {
    setValue(parseInt(props.unit));
  }, [props.unit]);

  const onChangeValue = (input: string) => {
    setValue(parseInt(input));
  };

  const onIncrease = () => {
    props.onPropsIncrease && props.onPropsIncrease();

    setValue((value) => parseInt(value) + 1);
  };

  const onDecrease = () => {
    if (value > 1) {
      props.onPropsDecrease && props.onPropsDecrease();

      setValue((value) => parseInt(value) - 1);
    }
  };
  return (
    <ControlsContainer>
      <ControlButton onPress={onDecrease}>
        <ControlLabel>-</ControlLabel>
      </ControlButton>
      <ControlValue
        value={String(value)}
        onChangeText={onChangeValue}
        keyboardType="numeric"
      />
      <ControlButton onPress={onIncrease}>
        <ControlLabel style={{ color: theme.colors.yellow.zero }}>
          +
        </ControlLabel>
      </ControlButton>
    </ControlsContainer>
  );
};

export default ProductControl;
