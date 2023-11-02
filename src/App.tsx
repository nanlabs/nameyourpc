import React, { Suspense } from 'react';

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div>App</div>
  </Suspense>
);

export default App;
