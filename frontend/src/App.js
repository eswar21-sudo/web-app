import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://backend-service:5000/api/data')  // Assuming backend is hosted on 'backend-service'
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
};

export default App;
