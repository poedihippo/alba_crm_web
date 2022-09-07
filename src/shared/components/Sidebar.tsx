import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import {
	UserOutlined,
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	HomeOutlined,
	PoweroffOutlined,
	ContainerOutlined,
	MailOutlined,
	AppstoreOutlined,
	FieldTimeOutlined,
	FileDoneOutlined,
	PercentageOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import Link from 'next/link';
import {
	DASHBOARD_HELLO,
	DASHBOARD_LOGIN,
	DASHBOARD_TABLE,
} from '../constants/path';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const { SubMenu } = Menu;
const { Sider } = Layout;

type Props = {
	menu?: any;
	isSidebarCollapsed: boolean;
	onCollapse: any;
};

const items = [
	{ label: 'Home', key: '/dashboard', icon: <HomeOutlined /> },
	{
		label: 'Approval',
		key: 'approval',
		icon: <FieldTimeOutlined />,
		children: [
			{
				label: 'Need My Approval',
				key: '/dashboard/table',
			},
			{
				label: 'Approved',
				key: '/dashboard/table',
			},
			{
				label: 'Rejection',
				key: '/dashboard/table',
			},
			{
				label: 'All',
				key: '/dashboard/table',
			},
		],
	},
	{
		label: 'Report',
		key: 'Report',
		icon: <FileDoneOutlined />,
		children: [
			{
				label: 'Leads',
				key: '/dashboard/table',
			},
			{
				label: 'Brands',
				key: '/dashboard/table',
			},
		],
	},
	{
		label: 'Produk',
		key: 'Produk',
		icon: <AppstoreOutlined />,
	},
	{
		label: 'Promo',
		key: 'promo',
		icon: <PercentageOutlined />,
	},
	{
		label: 'CRM',
		key: 'crm',
		icon: <UserOutlined />,
		children: [
			{
				label: 'Unhandled',
				key: '/dashboard/table',
			},
			{
				label: 'Leads',
				key: '/dashboard/table',
			},
			{
				label: 'Prospect',
				key: '/dashboard/table',
			},
			{
				label: 'Deal',
				key: '/dashboard/table',
			},
		],
	},
	{ label: 'Logout', key: 'signout', icon: <PoweroffOutlined /> },
];

const SidebarComponent = ({
	menu = [],
	isSidebarCollapsed,
	onCollapse,
}: Props) => {
	const route = useRouter();
	const handleLogout = () => {
		Cookies.remove('user');
		route.replace(DASHBOARD_LOGIN);
	};
	return (
		<Sider
			// trigger={null}
			collapsible
			collapsed={isSidebarCollapsed}
			onCollapse={onCollapse}
			width="250"
		>
			{/* <div className="logo" /> */}
			<Row justify="center" align="middle">
				<Col>
					<h1 style={{ color: '#fff', padding: '0.5rem 0' }}>Logo</h1>
				</Col>
			</Row>
			<Menu
				defaultSelectedKeys={['/dashboard']}
				defaultOpenKeys={['/dashboard']}
				mode="inline"
				theme="dark"
				onClick={({ key }) => {
					if (key === 'signout') {
						// TODO, sign out feature here
						handleLogout();
					} else {
						route.push(key);
					}
				}}
				// inlineCollapsed={collapsed}
				items={items}
			/>
		</Sider>
	);
};

export default SidebarComponent;
