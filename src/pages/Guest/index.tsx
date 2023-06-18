import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserSpace } from './store';

export const Guest = () => {
  const { space, fetchSpace} = useUserSpace(state => state, shallow);
  useEffect(() => { fetchSpace() }, []);
  return (
    <div style={{textAlign: 'left'}}>
      <pre>
        {JSON.stringify(space, null, 2) }
      </pre>
    </div>
  )
};

