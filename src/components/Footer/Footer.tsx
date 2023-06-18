import React from 'react';
import { Space, Typography } from 'antd';

const { Text } = Typography;

const nameStyle: React.CSSProperties = {
    textAlign: 'left',
};

const docStyle: React.CSSProperties = {
    textAlign: 'end',
};

const Footer: React.FC = () => (
    <Space direction="horizontal" style={{ width: '100%' }}>
        <Text style={nameStyle}>
            (c) Parma TG, 2023
        </Text>
        <Text style={docStyle}>
            Соглашение о распространении
        </Text>
    </Space>
);

export default Footer;