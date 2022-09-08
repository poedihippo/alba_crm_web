import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, PageHeader } from 'antd';
import React from 'react';

const Header = () => {
	return (
		<PageHeader
			className="site-page-header"
			// onBack={() => null}
			title="Dashboard"
			// subTitle="This is a subtitle"
			style={{ padding: '1rem 0', fontSize: '21px', margin: '0 5px' }}
			extra={[
				<BellOutlined style={{ fontSize: '35px' }} />,
				<Avatar size={40} icon={<UserOutlined />} />,
				<h5 style={{ marginBottom: '0' }}>Gabriel Raymond</h5>,
			]}
		/>
	);
};

export default Header;
