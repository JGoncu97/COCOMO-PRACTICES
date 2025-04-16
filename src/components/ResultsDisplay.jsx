import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div className="results-section">
      <h2>Resultados de la Estimación</h2>
      
      <div className="result-item">
        <h3>Esfuerzo estimado:</h3>
        <p>{results.effort.toFixed(2)} persona-meses</p>
      </div>

      <div className="result-item">
        <h3>Duración estimada:</h3>
        <p>{results.calculatedDuration.toFixed(2)} meses</p>
        <p>({Math.floor(results.calculatedDuration / 12)} años y {(results.calculatedDuration % 12).toFixed(2)} meses)</p>
      </div>

      <div className="result-item">
        <h3>Equipo requerido:</h3>
        <p>{results.calculatedTeamSize.toFixed(2)} personas</p>
      </div>

      <div className="result-item">
        <h3>Costo total estimado:</h3>
        <p>${results.totalCost.toFixed(2)} USD</p>
      </div>

      <div className="interpretation">
        <h3>Descripción de los resultados:</h3>
        <p>
          Según el modelo COCOMO, este proyecto requeriría aproximadamente {Math.ceil(results.effort)} persona-meses de esfuerzo.
          Con el equipo y duración ingresados, el proyecto tomaría alrededor de {Math.ceil(results.calculatedDuration)} meses.
          El costo total incluye un aumento del 5% anual en los salarios para proyectos que excedan un año de duración.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;