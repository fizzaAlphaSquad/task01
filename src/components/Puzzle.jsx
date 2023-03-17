import React, { useState } from 'react'
import Navbar from './Navbar'
import "./Puzzle.css"
import Grid from './grid';
const Puzzle = () => {

  const [size, setSize] = useState(0);
  console.log("-----", size)
  function handleInputChange(event) {
    
    const value = event.target.value;
    if (/^[1-5]*$/g.test(value)) {
      setSize(value);
    }
  }

   const [x, setX] = useState(0);
  const [y, setY] = useState(0);
 
  const handleDragEnd = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };
  const handleDragStart=(event)=> {
          // This method runs when the dragging starts
          console.log("Started")
      }
      
      const handleDrag=(event)=> {
          // This method runs when the component is being dragged
          console.log("Dragging...")
      }
      
    //  const  handleDragEnd=(event)=> {
    //       // This method runs when the dragging stops
    //       console.log("Ended")
    //   }
 
    // Render the grid component with the size entered by the user
    console.log("grid size------------------:",size)
    const grid = [];
  
    for (let i = 0; i < size; i++) {
      const row = [];
  
      for (let j = 0; j < size; j++) {
        row.push(Math.floor(Math.random() * 10)); // Generate a random number between 0 and 9
      }
      grid.push(row);
  }
  
  


    // const generateGrid = () => {
    //   // get input value
    //   var number = document.getElementById("inputNumber").value;

    //   // create array of numbers to populate grid
    //   var numbers = [];
    //   for (var i = 1; i <= number * number; i++) {
    //     numbers.push(i);
    //   }
    //   // shuffle numbers array to randomize order
    //   for (var i = numbers.length - 1; i > 0; i--) {
    //     var j = Math.floor(Math.random() * (i + 1));
    //     var temp = numbers[i];
    //     numbers[i] = numbers[j];
    //     numbers[j] = temp;
    //   }
    //   {/* <div class =grid-container>  */ }
    //   // create grid HTML
    //   var gridHTML = " <table class='table grid-item t '  > ";
    //   for (var i = 0; i < number; i++) {
    //     gridHTML += "<tr  class=' grid-item '>";
    //     for (var j = 0; j < number; j++) {
    //       gridHTML += "<td class=' grid-item  '>" + numbers[i * number + j] + "</td>";
    //     }
    //     gridHTML += "</tr>";
    //   }
    //   gridHTML += "</table>";

    //   // add grid HTML to container
    //   document.getElementById("gridContainer").innerHTML = gridHTML;
    // }
    return (
      <>
        <Navbar />
  
        <div className="Main-container-puzzle">
          <form className="Main-Box-puzzle">
            <div className="Main-form-content">
              <h3 className="Main-form-title">Random Grid Generator</h3>
              <div class="container">
                <form>
                  <div class="form-group">
                    <label for="inputNumber">Enter a number:</label>
                    <input class="form-control" id="inputNumber" min="1" max="5" 
                     onChange={handleInputChange}
                     required
                      type="number" value={size} 
                      // onChange={(e) => { setSize(e.target.value) }}
                      
                      />
                  </div>
                  <button type="button" class="btn btn-primary"
                   
                  // onClick={generateGrid}
                  >Generate Grid</button>
                </form>

                <div
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
            className={`gridSelected grid rounded-xl  grid-cols-${size} grid-rows-${size} shadow-4xl  w-full  justify-items-center gap-4   mx-auto p-6`}
        >
            <div>
      {grid.map((row, i) => (
        <div
         draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}

        className='grid-row' 
        key={i}>
          {row.map((cell, j) => (
            <span className='grid-col'
            draggable
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}

            key={j}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
        </div>
                {/* <div id="gridContainer">
                </div> */}
              </div>
            </div>
          </form>
        </div>

        {/* 
      ********************************** */}
        {/* <div className="container">
      <h1>Random Grid Puzzle</h1>
      <div className="input-container">
        <label className="input-label">
          Grid Size:
          <input className="input-field" type="number" value={size} onChange={handleSizeChange} />
        </label>
        <button className="generate-button" onClick={handleGenerateClick}>Generate</button>
      </div>
    </div> */}
      </>


    )
  }

  export default Puzzle