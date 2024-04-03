import { createContext } from 'react';

export interface XYCheckboxContextProps {
  value?: Array<string>;
  onChange: (e: any) => void;
  disabled?: boolean;
}

const checkboxContext = createContext<XYCheckboxContextProps>({
  value: [],
  onChange: () => {},
  disabled: false,
});

export default checkboxContext;
