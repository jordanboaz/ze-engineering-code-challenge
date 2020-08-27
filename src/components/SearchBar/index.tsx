import React from 'react';
import { SearchBar, SearchBarContainer, IconContainer } from './style';
import theme from '../../theme';
import { Props } from './types';

const SearchBarComponent = (props: Props) => {
  return (
    <SearchBarContainer style={props.animation}>
      <IconContainer>{props.icon ? props.icon() : <></>}</IconContainer>
      <SearchBar
        value={props.value}
        placeholder={props.placeholder}
        onFocus={props.onFocus}
        onChangeText={props.onChangeText}
      />
    </SearchBarContainer>
  );
};

export default SearchBarComponent;
