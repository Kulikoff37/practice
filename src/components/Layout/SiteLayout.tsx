import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Space } from 'antd';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  height: 64,
  color: '#fff',
  fontSize: '24px',
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
        { header }
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  </Space>
);

export default SiteLayout;
