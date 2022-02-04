import React from 'react';
import { InputContainer, SearchInputElement, ErrorLabel } from './SearchInput.styles';

export interface SearchInputProps {
  placeHolder: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  error?: string;
}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <InputContainer>
      <SearchInputElement
        placeholder={props.placeHolder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={(e) => props.onKeyDown(e)}
      />
      {props.error && <ErrorLabel>{props.error}</ErrorLabel>}
    </InputContainer>
  );
};
