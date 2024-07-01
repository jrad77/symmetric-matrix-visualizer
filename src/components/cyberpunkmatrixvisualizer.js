import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, Input, Button, Slider } from "./ui";

const CyberpunkMatrixVisualizer = () => {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(3).fill(0)));

  const handleSizeChange = (value) => {
    const newSize = value[0];
    setMatrixSize(newSize);
    setMatrix(Array(newSize).fill().map(() => Array(newSize).fill(0)));
  };

  const handleCellChange = (row, col, value) => {
    const newMatrix = [...matrix];
    newMatrix[row][col] = parseFloat(value) || 0;
    newMatrix[col][row] = parseFloat(value) || 0; // Ensure symmetry
    setMatrix(newMatrix);
  };

  const generateRandomMatrix = () => {
    const newMatrix = Array(matrixSize).fill().map(() => Array(matrixSize).fill(0));
    for (let i = 0; i < matrixSize; i++) {
      for (let j = i; j < matrixSize; j++) {
        const value = parseFloat((Math.random() * 2 - 1).toFixed(2));
        newMatrix[i][j] = value;
        newMatrix[j][i] = value; // Ensure symmetry
      }
    }
    setMatrix(newMatrix);
  };

  const getCellStyle = (i, j) => {
    if (i === j) return { backgroundColor: '#2e1065', color: '#f0abfc', textShadow: '0 0 5px #f0abfc' }; // Purple for diagonal
    if (i < j) return { backgroundColor: '#042f2e', color: '#5eead4', textShadow: '0 0 5px #5eead4' }; // Teal for upper triangle
    return { backgroundColor: '#3f0f1f', color: '#fda4af', textShadow: '0 0 5px #fda4af' }; // Red for lower triangle
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <Card className="w-full max-w-4xl bg-gray-800 shadow-2xl rounded-xl border-2 border-cyan-400">
        <CardHeader className="p-6">
          <CardTitle className="text-4xl font-bold text-center text-cyan-400 font-mono" style={{textShadow: '0 0 10px #22d3ee'}}>
            Cyberpunk Matrix Visualizer
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            <label htmlFor="matrixSize" className="block mb-2 text-lg font-medium text-cyan-300 font-mono">Matrix Size: {matrixSize}x{matrixSize}</label>
            <Slider
              id="matrixSize"
              min={1}
              max={10}
              step={1}
              value={[matrixSize]}
              onValueChange={handleSizeChange}
              className="w-full"
            />
          </div>
          <Button onClick={generateRandomMatrix} className="w-full mb-6 bg-fuchsia-700 hover:bg-fuchsia-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 font-mono text-lg" style={{boxShadow: '0 0 15px #d946ef'}}>
            Generate Random Matrix
          </Button>
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${matrixSize}, minmax(0, 1fr))` }}>
            {matrix.map((row, i) => 
              row.map((cell, j) => (
                <Input
                  key={`${i}-${j}`}
                  type="number"
                  value={cell}
                  onChange={(e) => handleCellChange(i, j, e.target.value)}
                  style={getCellStyle(i, j)}
                  className="w-full text-center font-medium rounded-md border border-cyan-700 focus:border-cyan-500 focus:ring focus:ring-cyan-500 focus:ring-opacity-50 transition duration-300 ease-in-out font-mono text-lg p-2"
                />
              ))
            )}
          </div>
          <div className="mt-6 text-lg text-cyan-300 font-mono grid grid-cols-3 gap-4">
            <div><span className="inline-block w-4 h-4 mr-2" style={{backgroundColor: '#2e1065'}}></span> Diagonal (Variance)</div>
            <div><span className="inline-block w-4 h-4 mr-2" style={{backgroundColor: '#042f2e'}}></span> Upper Triangle</div>
            <div><span className="inline-block w-4 h-4 mr-2" style={{backgroundColor: '#3f0f1f'}}></span> Lower Triangle</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CyberpunkMatrixVisualizer;