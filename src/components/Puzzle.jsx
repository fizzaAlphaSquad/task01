import React, {useState,useEffect, useRef} from 'react'
import Navbar from './Navbar'
import "./Puzzle.css"

const Puzzle = () => {

  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const [number, setnumber] = useState(null)
  const dragItem = useRef();
  const dragOverItem = useRef();
  let val = (input * input)
  const isAscending = (array) => array !== '' ? array?.map((a, i) => a > array[i + 1]).indexOf(true) === -1 : ''
  function handler(e) {
    e.preventDefault()
    if (input === '') {
      return
    } else {
      let random = []
      for (let i = 0; i < val; i++) {
        random.push(i + 1)
      }
      let newArr = random.sort(() => Math.random() - 0.5)
      setnumber([...newArr])
    }
  }
  useEffect(() => {
    if (input <= 1 || input === '') {
      setnumber(null)
      setMessage('')
    }
  }, [input])

  useEffect(() => {
    if (isAscending(number) !== true) {
      return
    } else {
      setMessage('You Have Solved the Puzzle')
      setnumber(null)
      setTimeout(() => {
        alert('You Have Solved the Puzzle')
      }, 300)
    }
  }, [number])

  function handleDragStart(e, position) {
    dragItem.current = position;
  }
  function handleDragEnter(e, position) {
    dragOverItem.current = position;
  }

  function handleDrop() {
    const arrayList = [...number];
    const dragItemContent = arrayList[dragItem.current];
    arrayList.splice(dragItem.current, 1);
    arrayList.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setnumber(arrayList);
  }

  return (
    <>
      <Navbar />
    
       <div className="  w-full h-screen pt-10 pb-3 z-50 justify-center items-center">
        {/* <form className="   bg-zinc-300 w-full h-screen "> */}
          <div className="p-3 w-full mt-8 h-7   justify-center items-center ">
            <h3 className="Main-form-title"> Grid Generator</h3>
            <div class="container">
              <form onSubmit={handler} >
                <div class="form-group  justify-center items-center">
                  <label for="inputNumber">Enter a number:</label>
                  <input class="form-control"
                   type="number" min={1} value={input} onChange={(e) => {
                    setInput('')
                    if (e.target.value < 6) {
                      setInput(e.target.value)
                    }
                  }} 
                  />
                   <input className="generate-button" type="submit" value="submit" />
                </div>
              </form>

              <div
                // style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
                // className={`gridSelected grid rounded-xl  grid-cols-${size} grid-rows-${size} shadow-4xl  w-full  justify-items-center gap-4   mx-auto p-6`}
              >
                <div 
                //  className='main-content'
                className={ 
                
                  (input < 3 ? 'main-gridtwo ' : '')
                  || (input < 4 ? 'main-grid-three ' : '')
                  || (input < 5 ? 'main-grid-four ' : '')
                  || (input < 6 ? 'main-grid-five ' : '')
                }
                >
      
                  {
                  number?.map((item, index) => {
                return <div draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragEnter={(e) => handleDragEnter(e, index)}
                  onDragEnd={handleDrop}
                  key={index}  className='grid-block'>
                  {
                    item
                  }
                </div>
              })}
                </div>
              
</div>
            </div>
          </div>
        {/* </form> */}
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