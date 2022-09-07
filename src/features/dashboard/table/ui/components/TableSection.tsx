import { Col, PageHeader, Space, Table, Tag } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import useGetData from '../../hooks/useGetData';

const { Column, ColumnGroup } = Table;

interface DataType {
	key: React.Key;
	firstName: string;
	lastName: string;
	age: number;
	address: string;
	tags: string[];
}

const data: DataType[] = [
	{
		key: '1',
		firstName: 'John',
		lastName: 'Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
		tags: ['nice', 'developer'],
	},
	{
		key: '2',
		firstName: 'Jim',
		lastName: 'Green',
		age: 42,
		address: 'London No. 1 Lake Park',
		tags: ['loser'],
	},
	{
		key: '3',
		firstName: 'Joe',
		lastName: 'Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
		tags: ['cool', 'teacher'],
	},
];

const TableSection = ({ initialData }: { initialData?: any }) => {
	const router = useRouter();
	console.log(initialData);
	const { fetchQuery } = useGetData(initialData);

	const { data, isLoading, isError, error }: any = fetchQuery;
	console.log(data);
	return (
		<>
			<PageHeader
				className="site-page-header"
				onBack={() => router.back()}
				title="Table Dummy"
				// subTitle="Just Try for making table"
			/>
			{/* <Table /> */}
			<Table dataSource={data}>
				<Column title="Name" dataIndex="name" key="name" />
				<Column title="Username" dataIndex="username" key="username" />
				<Column title="Email" dataIndex="email" key="email" />
				<Column title="Phone" dataIndex="phone" key="phone" />
				<Column title="Website" dataIndex="website" key="website" />
				<Column
					title="Action"
					key="websitelol"
					render={(_: any, record: any) => (
						<a href={`https://${record.website}`} target="_blank">
							{record.website}
						</a>
					)}
				/>
				{/* <Column title="Age" dataIndex="age" key="age" />
				<Column title="Address" dataIndex="address" key="address" />
				<Column
					title="Tags"
					dataIndex="tags"
					key="tags"
					render={(tags: string[]) => (
						<>
							{tags.map((tag) => (
								<Tag color="blue" key={tag}>
									{tag}
								</Tag>
							))}
						</>
					)}
				/>
				<Column
					title="Action"
					key="action"
					render={(_: any, record: DataType) => (
						<Space size="middle">
							<a>Invite {record.lastName}</a>
							<a>Delete</a>
						</Space>
					)}
				/> */}
			</Table>
		</>
	);
};

export default TableSection;
