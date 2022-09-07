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
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import CarouselComponent from './carouselBanner';

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (_, { tags }) => (
			<>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
];

const data: DataType[] = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const Home = () => {
	return (
		<>
			<PageHeader
				className="site-page-header"
				// onBack={() => null}
				title="Dashboard"
				// subTitle="This is a subtitle"
				style={{ padding: '1rem 0', fontSize: '21px' }}
				extra={[
					<BellOutlined style={{ fontSize: '35px' }} />,
					<Avatar size={40} icon={<UserOutlined />} />,
					<h5 style={{ marginBottom: '0' }}>Gabriel Raymond</h5>,
				]}
			/>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>
					<h3>Report</h3>
				</div>

				<div>
					<Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						// onChange={onChange}
						// onSearch={onSearch}
						filterOption={(input, option) =>
							(option!.children as unknown as string)
								.toLowerCase()
								.includes(input.toLowerCase())
						}
					>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="tom">Tom</Option>
					</Select>
					<Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						// onChange={onChange}
						// onSearch={onSearch}
						filterOption={(input, option) =>
							(option!.children as unknown as string)
								.toLowerCase()
								.includes(input.toLowerCase())
						}
					>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="tom">Tom</Option>
					</Select>
					<Select
						showSearch
						placeholder="Select a person"
						optionFilterProp="children"
						// onChange={onChange}
						// onSearch={onSearch}
						filterOption={(input, option) =>
							(option!.children as unknown as string)
								.toLowerCase()
								.includes(input.toLowerCase())
						}
					>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="tom">Tom</Option>
					</Select>
				</div>
			</div>

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Card
					size="small"
					title="Sales Revenue"
					style={{ width: '25%', padding: '15px', borderRadius: '12px' }}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<Progress type="circle" percent={75} width={40} />
					</div>
				</Card>
				<Card
					size="small"
					title="Settlement"
					style={{
						width: '25%',
						margin: '0 5px 0 10px',
						padding: '15px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<Progress type="circle" percent={75} width={40} />
					</div>
				</Card>
				<Card
					size="small"
					title="Interior Design"
					style={{
						width: '25%',
						margin: '0 10px 0 5px',
						padding: '15px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<Progress type="circle" percent={75} width={40} />
					</div>
				</Card>
				<Card
					size="small"
					title="Activity"
					style={{ width: '25%', padding: '15px', borderRadius: '12px' }}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<Progress type="circle" percent={75} width={40} />
					</div>
				</Card>
			</div>
			<div style={{ display: 'flex' }}>
				<Card
					size="small"
					title="Activity"
					style={{
						width: '50%',
						padding: '15px',
						margin: '20px 5px 20px 0px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h2>Rp. 3.000.000</h2>
						<p>8%</p>
					</div>
				</Card>
				<Card
					size="small"
					title="Total Follow Up"
					style={{
						width: '50%',
						padding: '15px',
						margin: '20px 0 20px 5px',
						borderRadius: '12px',
					}}
					headStyle={{ borderBottom: 'none' }}
				>
					<Progress percent={30} />
					<Progress percent={50} status="active" />
					<Progress percent={70} status="exception" />
					<Progress percent={100} />
					<Progress percent={50} showInfo={false} />
				</Card>
			</div>
			{/* <CarouselComponent /> */}
			<div>
				<div>
					<h3>Top Performance</h3>
				</div>
				<div>
					<h2>BUM</h2>
					<Table
						columns={columns}
						dataSource={data}
						style={{
							borderRadius: '16px',
						}}
					/>
				</div>
				<div>
					<h2>BUM</h2>
					<Table
						columns={columns}
						dataSource={data}
						style={{
							borderRadius: '16px',
						}}
					/>
				</div>
				<div>
					<h2>BUM</h2>
					<Table
						columns={columns}
						dataSource={data}
						style={{
							borderRadius: '16px',
						}}
					/>
				</div>
			</div>
			
		</>
	);
};

export default Home;
