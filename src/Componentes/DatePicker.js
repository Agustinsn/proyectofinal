import React, { useState } from "react";
import DatePicker,{registerLocale} from "react-datepicker";
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setHours'
import es from "date-fns/locale/es"
registerLocale("es",es)



// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());

  const actualizar = date=>{
    setStartDate(date)
  }
  
  return (
    
    <div>
        <DatePicker 
        selected={startDate} 
        onChange={actualizar}
        dateFormat="dd/MM/yyyy" 
        minDate={new Date()}
        value={startDate}/>
        {console.log(startDate)}
        <div>
          {startDate.getHours()}
        </div>
    </div>
    
    
    
    );

}

export default Example