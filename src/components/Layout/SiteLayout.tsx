import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  height: '57px',
  color: '#fff',
  fontSize: '24px',
  backgroundColor: '#fff',
  border:'1px solid #979797',
  backgroundImage:'url(./src/img/header.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition:'10px',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - 64px)',
};

interface ISiteLayout {
  header: React.ReactNode;
}

const SiteLayout: React.FC<ISiteLayout> = ({ header }) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        {header}
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  </Space>
);

export default SiteLayout;
