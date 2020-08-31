import React, { useState } from 'react';
import {
  Container,
  UnitsControlContainer,
  Unit,
  UnitText,
  SubmitButton,
  SubmitText,
} from './style';
import { Props } from './types';
import theme from '../../theme';
import Control from '../Control';

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
      <Control
        key={key}
        onChangeValue={onChangeValue}
        unit={units[unitSelected]}
      />
    );
  };

  const selectUnit = (eachUnit: number, index: number) => {
    setUnitedSelect(index);
    setValue(eachUnit);
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
