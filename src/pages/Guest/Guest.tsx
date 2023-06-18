import React from 'react';
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
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };

    return (
        <div>
            <Space style={{ alignItems: 'left', width: '100%' }}>
                <Image
                    preview={false}
                    src='/src/pages/Guest/static/badge.svg'
                />
                <Title>ISAFSB</Title>
            </Space>
            <div>
                <Carousel afterChange={onChange}>
                    <div>
                        <img src="src/pages/Guest/static/carousel/img1.svg" alt="" />
                    </div>
                    <div>
                        <img src="src/pages/Guest/static/carousel/img2.svg" alt="" />
                    </div>
                </Carousel>
            </div>
            <div>
                <Tag bordered={false} className='gray-tag'>текущая версия</Tag>
                <Space size={[0, 'small']} wrap>
                    <Tag bordered={false} className='lime-tag'>
                        <Space split={<Divider className='gray-divider' type='vertical' />}>
                            <div>1.07.10</div>
                            <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
                                <div>...</div>
                            </Dropdown>

                        </Space>
                    </Tag>
                </Space>
            </div >
            <div>
                <Paragraph>
                    Обновлен сертификат, mobile-provision profile
                </Paragraph>
                <Paragraph>
                    Что нового:
                    <ul>
                        <li>
                            - обновлена система безопасности
                        </li>
                        <li>
                            - устранена ошибка: падение при выборе ключа в выпадающем списке
                        </li>
                        <li>
                            - изменен дизайн панели выбора
                        </li>
                    </ul>
                </Paragraph>
            </div>
            <div>
                <Title level={2}>Файлы</Title>
                <div>
                    <Title level={3}>Linux</Title>
                    <Paragraph>
                        Версия для Linux может быть установлена в любую папку Вашего домашнего каталога. Не рекомендуется ставить
                        приложение в катаолог /opt
                        Подробная инструкция по установке находится в архиве ‘documentation.zip’, в ‘readme.txt’
                    </Paragraph>
                    <div>
                        <div>
                            <Tag>A</Tag>
                            <Paragraph>application_files_backend.zip</Paragraph>
                            <Paragraph>файлы для установки backend</Paragraph>
                            <Paragraph>147.7 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>A</Tag>
                            <Paragraph>application_files_frontend.zip</Paragraph>
                            <Paragraph>статики frontend</Paragraph>
                            <Paragraph>40.1 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>D</Tag>
                            <Paragraph>documentation.zip</Paragraph>
                            <Paragraph>инструкция по установке, рук. пользователя и пр…</Paragraph>
                            <Paragraph>8.1 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>M</Tag>
                            <Paragraph>разное.zip</Paragraph>
                        </div>
                    </div>
                    <Button>Загрузить одним архивом</Button>
                </div>
                <div>
                    <Title level={3}>Windows Server</Title>
                    <div>
                        <div>
                            <Tag>A</Tag>
                            <Paragraph>application_files_backend_win.zip</Paragraph>
                            <Paragraph>файлы для установки backend</Paragraph>
                            <Paragraph>147.7 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>A</Tag>
                            <Paragraph>application_files_frontend_win.zip</Paragraph>
                            <Paragraph>статики frontend</Paragraph>
                            <Paragraph>40.1 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>D</Tag>
                            <Paragraph>documentation_win.zip</Paragraph>
                            <Paragraph>инструкция по установке, рук. пользователя и пр…</Paragraph>
                            <Paragraph>8.1 Mb</Paragraph>
                        </div>
                        <div>
                            <Tag>M</Tag>
                            <Paragraph>разное_win.zip</Paragraph>
                        </div>
                    </div>
                    <Button>Загрузить одним архивом</Button>
                </div>
            </div>

        </div >

    );
}

export default Guest;