import React from 'react';
import { Outlet } from "react-router-dom";
import { Layout, Space, Image } from 'antd';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  fontSize: '14px',
  lineHeight: 'unset',
  height: 'auto',
  color: '#979797',
  backgroundColor: '#fff',
  verticalAlign: 'middle',
  padding: '10px',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - 64px)',
  backgroundColor: '#fff',
};

const headerSpaceStyle: React.CSSProperties = {
  border: 'solid 1px',
  borderColor: '#979797',
  width: '100%',
  padding: '5px',
};

interface ISiteLayout {
  header: React.ReactNode;
}

const SiteLayout: React.FC<ISiteLayout> = ({ header }) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        <Space style={headerSpaceStyle}>
          <Image preview={false} src='/src/components/Layout/static/logo.svg' />
          <div>{header}</div>
        </Space>
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
    </Layout>
  </Space>
);

export default SiteLayout;
