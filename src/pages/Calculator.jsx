import React from 'react';
import SEO from '../components/SEO';
import BudgetCalculator from '../components/BudgetCalculator';

const Calculator = () => {
  return (
    <>
      <SEO 
        title="Signage Budget Calculator"
        description="Calculate LED sign board cost instantly. ₹850-4000/sqft. Site visit included. Andhra Pradesh & Telangana pricing."
        keywords={[
          "signage cost calculator", "LED sign board price", 
          "ACP hoarding cost", "3D letters price", "signage budget"
        ]}
      />
      
      <BudgetCalculator />
    </>
  );
};

export default Calculator;
