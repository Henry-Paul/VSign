import React, { useContext, useState } from 'react';
import { CalculatorContext } from '../context/CalculatorContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator } from 'lucide-react';
import { openWhatsApp } from '../utils/emailjs';

const pricingData = {
  'LED Shop Boards': { base: [850, 1500], highRise: 1.3 },
  'ACP Hoardings': { base: [1200, 2500], highRise: 1.2 },
  '3D Letters': { 
    base: [1500, 4000], 
    materials: { acrylic: 0, stainless: 500, brass: 1000, titanium: 1500 }
  },
  'Terrace LED Signage': { base: [2000, 3500], highRise: 1.5, minSize: 50 },
  'Hospital Signage': { base: [1200, 2200], special: true },
  'Hotel LED Boards': { base: [1500, 2800], special: true }
};

const BudgetCalculator = () => {
  const { state, updateField, resetCalculator } = useContext(CalculatorContext);
  const [loading, setLoading] = useState(false);

  const calculateEstimate = () => {
    setLoading(true);
    
    setTimeout(() => {
      const { productType, width, height, projectType, material, warranty } = state;
      const pricing = pricingData[productType];
      const area = width * height;
      
      let baseMin = pricing.base[0] * area;
      let baseMax = pricing.base[1] * area;
      
      const premium = projectType === 'highRise' ? (pricing.highRise || 1) : 1;
      const materialCost = pricing.materials?.[material] || 0;
      const warrantyCost = warranty === 5 ? 50 * area : warranty === 10 ? 150 * area : 0;
      
      const min = Math.round((baseMin + materialCost + warrantyCost) * premium);
      const max = Math.round((baseMax + materialCost + warrantyCost) * premium);
      
      updateField('estimate', { min, max });
      setLoading(false);
    }, 1500);
  };

  const inputsComplete = state.width > 0 && state.height > 0;

  const handleWhatsAppLead = () => {
    const message = `Hi V SIGN, I calculated a budget of ₹${state.estimate.min.toLocaleString()}–₹${state.estimate.max.toLocaleString()} for ${state.width}x${state.height}ft ${state.productType}. Need detailed quote.`;
    openWhatsApp({
      ...state,
      message,
      sourcePage: '/calculator'
    });
  };

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-card card-premium">
          <div className="calculator-header">
            <Calculator size={32} className="calculator-icon" />
            <h2>Signage Budget Calculator</h2>
            <p>Get instant estimate for your project</p>
          </div>

          <div className="calculator-grid">
            <div className="form-group">
              <label>Signage Type</label>
              <select 
                value={state.productType}
                onChange={(e) => updateField('productType', e.target.value)}
              >
                {Object.keys(pricingData).map(p => <option key={p}>{p}</option>)}
              </select>
            </div>

            <div className="input-row">
              <div className="form-group">
                <label>Width (feet)</label>
                <input
                  type="number"
                  value={state.width}
                  onChange={(e) => updateField('width', Number(e.target.value))}
                  min="1"
                  placeholder="e.g., 10"
                />
              </div>
              <div className="form-group">
                <label>Height (feet)</label>
                <input
                  type="number"
                  value={state.height}
                  onChange={(e) => updateField('height', Number(e.target.value))}
                  min="1"
                  placeholder="e.g., 4"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Project Type</label>
              <select value={state.projectType} onChange={(e) => updateField('projectType', e.target.value)}>
                <option value="retail">Retail/Shop</option>
                <option value="highRise">High-Rise Building</option>
                <option value="hospital">Hospital/Clinic</option>
                <option value="hotel">Hotel/Restaurant</option>
                <option value="school">School/College</option>
              </select>
            </div>

            {pricingData[state.productType]?.materials && (
              <div className="form-group">
                <label>Material Finish</label>
                <select value={state.material} onChange={(e) => updateField('material', e.target.value)}>
                  <option value="acrylic">Acrylic</option>
                  <option value="stainless">Stainless Steel (+₹500/sqft)</option>
                  <option value="brass">Brass (+₹1,000/sqft)</option>
                  <option value="titanium">Titanium (+₹1,500/sqft)</option>
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Warranty Plan</label>
              <select value={state.warranty} onChange={(e) => updateField('warranty', Number(e.target.value))}>
                <option value="3">3 Years Standard</option>
                <option value="5">5 Years Premium (+₹50/sqft)</option>
                <option value="10">10 Years Ultimate (+₹150/sqft)</option>
              </select>
            </div>

            <button 
              onClick={calculateEstimate}
              disabled={!inputsComplete || loading}
              className="btn-primary btn-full"
            >
              {loading ? 'Calculating...' : '💰 Calculate Budget'}
            </button>
          </div>

          <AnimatePresence>
            {state.estimate && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="estimate-result"
              >
                <div className="estimate-range">
                  ₹{state.estimate.min.toLocaleString()} – ₹{state.estimate.max.toLocaleString()}
                </div>
                <p className="estimate-note">
                  Final price confirmed after site visit. Includes installation & GST.
                </p>
                
                <div className="lead-form">
                  <h3>Get Exact Quote via WhatsApp</h3>
                  <button onClick={handleWhatsAppLead} className="btn-whatsapp btn-full">
                    📱 Send to WhatsApp
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
