import { BellOutlined, UserOutlined } from '@ant-design/icons';
import {
	Avatar,
	Button,
	Card,
	PageHeader,
	Progress,
	Select,
	Space,
	Table,
	Tag,
} from 'antd';
import { Option } from 'antd/lib/mentions';

import React from 'react';
import CarouselComponent from './carouselBanner';
import Header from './header';
import Report from './report/report';
import TopPerformance from './topPerformance/topPerformance';

const Home = () => {
	return (
		<>
			<Header />
			<Report />
			<TopPerformance />
			{/* <CarouselComponent /> */}
		</>
	);
};

export default Home;
