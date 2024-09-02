import { useState } from "react";

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(e) {
    setColor(e.target.value);
  }

  return(
    <div className="font-sans flex flex-col items-center">
      <h1 className="text-5xl m-12">Color Picker</h1>
      <div className="flex justify-center items-center w-80 h-80 rounded-3xl mb-6" style={{backgroundColor: color}}>
        <p className="text-center text-5xl text-gray-400 p-12">Selected Color: {color}</p>
      </div>
      <label className="mb-2.5 font-bold text-2xl">Select a Color:</label>
      <input className="w-20 h-12" type="color" value={color} onChange={handleColorChange}/>
    </div>
  )
}

export default ColorPicker;