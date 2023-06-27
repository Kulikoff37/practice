import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserSpace } from './store';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Guest = () => {
  const { space, fetchSpace} = useUserSpace(state => state, shallow);
  useEffect(() => { fetchSpace() }, []);
  return (
    <>
      <Spin size="large" indicator={<LoadingOutlined style={{ fontSize: 100 }} spin/>}>
        <div style={{textAlign: 'left'}}>
          <pre>
            {JSON.stringify(space, null, 2) }
          </pre>
        </div>
      </Spin>
    </>
  )
};

