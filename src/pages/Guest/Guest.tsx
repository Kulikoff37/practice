import React from 'react';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import { useUserSpace } from './store';
import { EllipsisOutlined } from '@ant-design/icons';
import { Image, Typography, Carousel, Space, Tag, Button, Divider, Dropdown, MenuProps } from 'antd';
import './index.css'

const { Title, Paragraph } = Typography;

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                2nd menu item
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="">
                3rd menu item
            </a>
        ),
    },
];

const Guest: React.FC = () => {
    const { space, fetchSpace } = useUserSpace(state => state, shallow);
    useEffect(() => { fetchSpace() }, []);

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <Space direction='vertical' className='content'>
            {/* <div style={{ textAlign: 'left' }}>
                <pre>
                    {JSON.stringify(space, null, 2)}
                </pre>
            </div> */}
            <div className='badge'>
                <Image
                    preview={false}
                    src={'/src/pages/Guest/static/badge.svg'}
                />
                <div className='top-title'>
                    <Title className='title-company-name'>{space?.name}</Title>
                </div>

            </div>
            <Divider className='divider' />
            <div className='top-carousel'>
                <div className='carousel'>
                    <Carousel afterChange={onChange}>
                        <div>
                            <img src={space?.images[0]} alt="" />
                        </div>
                        <div>
                            <img src={space?.images[1]} alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className='versions-tags-box'>
                <Tag bordered={false} className='gray-tag'>текущая версия</Tag>

                <Space size={[0, 'small']} wrap>
                    <Tag bordered={false} className='lime-tag'>
                        <Space split={<Divider className='gray-divider' type='vertical' />} style={{ gap: '0px' }}>
                            <div>1.07.10</div>
                            <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <EllipsisOutlined className='dots' />
                            </Dropdown>

                        </Space>
                    </Tag>
                    <Space className='tags-separator'>
                        <Tag className='date-tag'>дата</Tag>
                        <Tag className='blue-tag'>7.02.2023</Tag>
                    </Space>

                </Space>
            </div >
            <div className='commentaries-box '>
                <Paragraph className='paragraph-space-commentary'>
                    Обновлен сертификат, mobile-provision profile
                    Что нового:
                    <ul>
                        <li>
                            обновлена система безопасности
                        </li>
                        <li>
                            устранена ошибка: падение при выборе ключа в выпадающем списке
                        </li>
                        <li>
                            изменен дизайн панели выбора
                        </li>
                    </ul>
                </Paragraph>
            </div>
            <div className='files-components'>
                <Title className='title-files'>Файлы</Title>
                <div>
                    <Title className='title-files-system '>Linux</Title>
                    <Divider className='divider' />
                    <div className='top-paragraph-files-commentary'>
                        <Paragraph className='paragraph-files-commentary'>
                            Версия для Linux может быть установлена в любую папку Вашего домашнего каталога. Не рекомендуется ставить
                            приложение в катаолог /opt
                            Подробная инструкция по установке находится в архиве ‘documentation.zip’, в ‘readme.txt’
                        </Paragraph>
                    </div>

                    <Divider className='divider' />
                    <Space direction='vertical' className='files-divider-space'>
                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='a-tag'>A</Tag>
                                <Paragraph className='paragraph'>application_files_backend.zip</Paragraph>
                                <Paragraph className='paragraph'>файлы для установки backend</Paragraph>
                                <Paragraph className='paragraph'>147.7 Mb</Paragraph>
                            </Space>
                        </Space>

                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='a-tag'>A</Tag>
                                <Paragraph className='paragraph'>application_files_frontend.zip</Paragraph>
                                <Paragraph className='paragraph'>статики frontend</Paragraph>
                                <Paragraph className='paragraph'>40.1 Mb</Paragraph>
                            </Space>
                        </Space>
                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='d-tag'>D</Tag>
                                <Paragraph className='paragraph'>documentation.zip</Paragraph>
                                <Paragraph className='paragraph'>инструкция по установке, рук. пользователя и пр…</Paragraph>
                                <Paragraph className='paragraph'>8.1 Mb</Paragraph>
                            </Space>
                        </Space>
                        <Space direction='horizontal' className='files'>
                            <Tag className='m-tag'>M</Tag>
                            <Paragraph className='paragraph'>разное.zip</Paragraph>
                        </Space>
                    </Space>
                    <Divider className='divider' />
                    <div className='button'>
                        <div>
                        </div>
                        <div>
                            <Button>Загрузить одним архивом</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Title className='title' level={3}>Windows Server</Title>
                    <Divider className='divider' />
                    <Space direction='vertical' className='files-divider-space'>
                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='a-tag'>A</Tag>
                                <Paragraph className='paragraph'>application_files_backend_win.zip</Paragraph>
                                <Paragraph className='paragraph'>файлы для установки backend</Paragraph>
                                <Paragraph className='paragraph'>147.7 Mb</Paragraph>
                            </Space>
                        </Space>
                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='a-tag'>A</Tag>
                                <Paragraph className='paragraph'>application_files_frontend_win.zip</Paragraph>
                                <Paragraph className='paragraph'>статики frontend</Paragraph>
                                <Paragraph className='paragraph'>40.1 Mb</Paragraph>
                            </Space>
                        </Space>
                        <Space direction='horizontal' className='files'>
                            <Space direction='horizontal' className='files-deep'>
                                <Tag className='d-tag'>D</Tag>
                                <Paragraph className='paragraph'>documentation_win.zip</Paragraph>
                                <Paragraph className='paragraph'>инструкция по установке, рук. пользователя и пр…</Paragraph>
                                <Paragraph className='paragraph'>8.1 Mb</Paragraph>
                            </Space>
                        </Space>
                        <Space direction='horizontal' className='files'>
                            <Tag className='m-tag'>M</Tag>
                            <Paragraph className='paragraph'>разное_win.zip</Paragraph>
                        </Space>
                    </Space>
                    <Divider className='divider' />
                    <div className='button'>
                        <div>
                        </div>
                        <div>
                            <Button>Загрузить одним архивом</Button>
                        </div>
                    </div>

                </div>
            </div>

        </Space >

    );
}

export default Guest;