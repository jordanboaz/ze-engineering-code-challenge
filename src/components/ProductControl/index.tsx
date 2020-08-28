import React, { useState } from 'react';
import {
  Container,
  ControlsContainer,
  ControlButton,
  ControlLabel,
  ControlValue,
  UnitsControlContainer,
  Unit,
  UnitText,
  SubmitButton,
  SubmitText,
} from './style';
import { Props } from './types';
import theme from '../../theme';

const ProductControl = (props: Props) => {
  const [value, setValue] = useState(1);
  const [units, setUnits] = useState([
    1,
    ...(props.units?.length ? props.units : []),
  ]);
  const [unitSelected, setUnitedSelect] = useState(0);

  const onChangeValue = (input: string) => {
    setValue(Number(input));
  };

  const renderControls = (key: number) => {
    return (
      <ControlsContainer key={key}>
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

  const selectUnit = (eachUnit: number, index: number) => {
    setUnitedSelect(index);
    setValue(eachUnit);
  };

  const onIncrease = () => {
    setValue((value) => value + 1);
  };

  const onDecrease = () => {
    if (value > 1) {
      setValue((value) => value - 1);
    }
  };

  return (
    <Container>
      <UnitsControlContainer>
        {units.map((eachUnit: number, index: number) => {
          if (unitSelected === index) {
            return renderControls(index);
          }
          return (
            <Unit key={index} onPress={() => selectUnit(eachUnit, index)}>
              <UnitText>{eachUnit}</UnitText>
            </Unit>
          );
        })}
      </UnitsControlContainer>
      <SubmitButton onPress={() => props.onSubmit(value)}>
        <SubmitText>{`Adicionar (${value})`}</SubmitText>
        <SubmitText>
          {props.price ? `R$ ${(props.price * value).toFixed(2)}` : ''}
        </SubmitText>
      </SubmitButton>
    </Container>
  );
};

export default ProductControl;
