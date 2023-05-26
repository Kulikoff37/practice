import React from 'react';
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'left',
  height: 64,
  color: '#fff',
  fontSize: '24px'
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - 128px)',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'right',
};

interface ISiteLayout {
  header: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
}

const SiteLayout: React.FC<ISiteLayout> = ({header, content, footer}) => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>
        { header }
      </Header>
      <Content style={contentStyle}>
        { content }
      </Content>
      <Footer style={footerStyle}>
        { footer }
      </Footer>
    </Layout>
  </Space>
);

export default SiteLayout;
