import React , { useState } from 'react';
const Button = React.lazy(
  () => import('MFE1/Button')
);
 
const Mfe1Title = React.lazy(
  () => import('MFE1/Title')
);

function App() {
 const [count, setCount] = useState(0);

  return (
    <div>
      <h1>MFE2 {count}</h1>
      <div>
        <React.Suspense fallback='Loading Button'>
          <Button callback={setCount} />
         <br />
          <Mfe1Title />
        </React.Suspense>
      </div>
      <h2>MFE2</h2>
    </div>
  );
}

export default App;