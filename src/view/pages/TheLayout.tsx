import React, { Suspense } from 'react';
// import Home from './home/Home';

const Home=React.lazy(()=>import('./home/Home'));

const TheLayout = () => {
     return (
          <div>
               <Suspense fallback={<div>Loading...</div>}>
                    <Home></Home>
               </Suspense>
               
          </div>
     );
};

export default TheLayout;