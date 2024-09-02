import styles from "./ColorPicker.module.css";
import { useState } from "react";

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");
  return(
    <div className={styles.colorPicker}>
      <h1>Color Picker</h1>
    </div>
  )
}

export default ColorPicker;