import React from 'react';
import HunterLayout from '../../component/layout';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

import './index.less';

class HomeIndex extends React.Component {
    componentDidMount() {
        console.log(`-------------------- component Did Mount ---------------------`)
    }

    render() {
        return (
            <HunterLayout>
                <Layout>
                    <Sider breakpoint="lg" collapsedWidth="0"
                        onBreakpoint={broken => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}
                    >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1222
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2333
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 34444
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                        nav 4555
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Layout>
            </HunterLayout>
        );
    }
}

export default HomeIndex;