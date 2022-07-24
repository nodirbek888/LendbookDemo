import { Skeleton } from 'antd';
import React from 'react';

const App = () => (
  <Skeleton
    avatar
    paragraph={{
      rows: 4,
    }}
  />
);

export default App;