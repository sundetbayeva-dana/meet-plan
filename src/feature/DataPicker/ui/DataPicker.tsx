import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {useEffect, useState} from "react";


// type ValuePiece = Date | null;
//
// type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DataPicker = () => {
  const [isRangeChosen, setIsRangeChosen] = useState<boolean>(true  )
  function onChange(nextValue) {
    console.log(nextValue)
    if (nextValue.length === 2) setIsRangeChosen(true)
    else setIsRangeChosen(false)
  }
  useEffect(() => {
    console.log(isRangeChosen)
  }, [isRangeChosen])
  return (
    <>
      <Calendar
        onChange={onChange}
        selectRange={!isRangeChosen}
        allowPartialRange={true}
        locale="ru-RU"/>
    </>

  )
}
