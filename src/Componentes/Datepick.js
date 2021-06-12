
import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DateTimePicker
      value={value}
        onChange={(value) => alert('New date is: ', value)}
      />
      {console.log(value)}
    </div>
  );
}
export default MyApp