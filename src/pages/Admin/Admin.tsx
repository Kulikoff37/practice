import { Space, Divider, Button, Tree, Avatar, Typography, Radio } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { DataNode, TreeProps } from 'antd/es/tree';
import React from 'react';
import './index.css'

const { Paragraph } = Typography;

const treeData: DataNode[] = [
    {
        title: 'Администраторы',
        key: '0-0',
        children: [
            {
                title: 'Иван Белов',
                key: '0-0-0',
            },
            {
                title: 'Сергей Шемякин',
                key: '0-0-1',
            },
            {
                title: 'Степан Пахомов',
                key: '0-0-2',
            },
            {
                title: 'Руслан Гасанов',
                key: '0-0-3',
            },
            {
                title: 'Ульяна Панфилова',
                key: '0-0-4',
            },
            {
                title: 'Георгий Акимов',
                key: '0-0-5',
            },
            {
                title: 'Михаил Кузьмин',
                key: '0-0-6',
            },
        ],
    },
    {
        title: 'Администраторы пространств',
        key: '0-1',
        children: [
            {
                title: 'Даниил Ульянов',
                key: '0-1-0',
            },
            {
                title: 'Анна Лебедева',
                key: '0-1-1',
            },
            {
                title: 'Дарья Денисова',
                key: '0-1-2',
            },
            {
                title: 'Анатолий Шишкин',
                key: '0-1-3',
            },
            {
                title: 'Дарья Денисова',
                key: '0-1-4',
            },
            {
                title: 'Александр Зубков',
                key: '0-1-5',
            },
            {
                title: 'София Королева',
                key: '0-1-6',
            },
        ],
    },
];

const Admin: React.FC = () => {
    const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    return (
        <Space direction='vertical' className='content'>
            <Radio.Group buttonStyle='solid' defaultValue='users'>
                <Radio.Button className='radio' value="scopes">Пространства</Radio.Button>
                <Radio.Button className='radio' value="users">Пользователи</Radio.Button>
                <Radio.Button className='radio' value="settings">Настройки</Radio.Button>
            </Radio.Group>
            <Divider className='divider' />
            <Space direction='vertical'>
                <Space direction='horizontal'>
                    <Space direction='vertical'>
                        <Tree
                            showLine
                            switcherIcon={<DownOutlined />}
                            defaultExpandedKeys={['0-0', '0-1']}
                            onSelect={onSelect}
                            treeData={treeData}
                        />
                        <div className='button-left'>
                            <div>
                            </div>
                            <Space direction='horizontal'>
                                <Button>Добавить</Button>
                                <Button className='red-button'>Удалить</Button>
                            </Space>
                        </div>
                    </Space>
                    <div className='divider-div'>
                        <Divider type="vertical" className='divider' />
                    </div>
                    <Space direction='vertical'>
                        <Space direction='horizontal'>
                            <Avatar shape="square" size={64} icon={<UserOutlined />} />
                            <Button>Выберите файл</Button>
                        </Space>
                        <Space className='settings-deep' direction='vertical'>
                            <Space direction='horizontal'>
                                <Paragraph className='paragraph'>Имя</Paragraph>
                            </Space>
                        </Space>
                    </Space>
                </Space>
            </Space>
            <Divider className='divider' />
            <div className='button-bot'>
                <div>
                </div>
                <Space direction='horizontal' className='buttons'>
                    <Button className='blue-button'>Сохранить</Button>
                    <Button>Отмена</Button>
                </Space>
            </div>
        </Space>
    );
}

export default Admin;