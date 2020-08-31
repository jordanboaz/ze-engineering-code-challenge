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
  const [value, setValue] = useState(props.unit || 1);

  useEffect(() => {
    props.onChangeValue(value);
  }, [value]);

  useEffect(() => {
    setValue(Number(props.unit));
  }, [props.unit]);

  const onChangeValue = (input: string) => {
    setValue(Number(input));
  };

  const onIncrease = () => {
    props.onPropsIncrease();

    setValue((value) => value + 1);
  };

  const onDecrease = () => {
    if (value > 1) {
      props.onPropsDecrease();

      setValue((value) => value - 1);
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
