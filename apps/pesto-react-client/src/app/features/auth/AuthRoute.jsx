import React from 'react';

export default function AuthRoute() {
  const [value, setValue] = useState(0);
  const handleChange = v => {
    console.log(v);
    setValue(v);
  };

  return <div></div>;
}
