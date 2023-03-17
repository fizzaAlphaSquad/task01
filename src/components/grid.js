import React from 'react';

function Grid({size}) {
  
  console.log("grid size------------------:",size)
  const grid = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      row.push(Math.floor(Math.random() * 10)); // Generate a random number between 0 and 9
    }

    grid.push(row);
  }

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i}>
          {row.map((cell, j) => (
            <span key={j}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;