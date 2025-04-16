import React from 'react';

const CostFactors = ({ costFactors, selectedFactors, onFactorChange }) => {
  const factorGroups = {
    "Atributos del producto": ["RELY", "DATA", "CPLX"],
    "Atributos de la computadora": ["TIME", "STOR", "VIRT", "TURN"],
    "Atributos del personal": ["ACAP", "AEXP", "PCAP", "VEXP", "LEXP"],
    "Atributos del proyecto": ["MODP", "TOOL", "SCED"]
  };

  return (
    <div className="cost-factors">
      <h2>Factores de Costo</h2>
      <p>Seleccione la valoración para cada factor (Muy bajo, Bajo, Nominal, Alto, Muy alto, Extra alto)</p>
      
      {Object.keys(factorGroups).map(group => (
        <div key={group} className="factor-group">
          <h3>{group}</h3>
          <div className="factors-grid">
            {factorGroups[group].map(factor => (
              <div key={factor} className="factor-item">
                <label>
                  {costFactors[factor].name} ({factor}):
                  <select 
                    value={selectedFactors[factor]} 
                    onChange={(e) => onFactorChange(factor, e.target.value)}
                  >
                    {costFactors[factor].values.map((val, idx) => (
                      val !== null && (
                        <option key={idx} value={idx}>
                          {["Muy bajo", "Bajo", "Nominal", "Alto", "Muy alto", "Extra alto"][idx]} ({val})
                        </option>
                      )
                    ))}
                  </select>
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CostFactors;