import BasicLayout from '../layouts/BasicLayout'
import React, { useState } from 'react';
import InitialGrid from '../components/InitialGrid'
import CombinationTree from '../components/CombinationTree'


export default function Home() {
  const [firstMove, setFirstMove] = useState(null);

  return (
    <BasicLayout>
      {firstMove ?  <CombinationTree firstMove={firstMove} /> : <InitialGrid setFirstMove={setFirstMove} />}
    </BasicLayout>
  )
}
