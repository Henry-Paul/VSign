import React, { createContext, useReducer } from 'react';

const initialState = {
  productType: 'LED Shop Boards',
  width: '',
  height: '',
  projectType: 'retail',
  material: 'acrylic',
  warranty: 3,
  estimate: null
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const updateField = (field, value) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  const resetCalculator = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <CalculatorContext.Provider value={{ state, updateField, resetCalculator }}>
      {children}
    </CalculatorContext.Provider>
  );
};
