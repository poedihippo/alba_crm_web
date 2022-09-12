import React from 'react';
import { DatePicker, Input } from 'antd';
import HeaderPage from 'src/shared/components/HeaderPage';
import type { DatePickerProps } from 'antd';

import TableActivity from './table/tableActivity';

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
	console.log(date, dateString);
};

interface Props {
	type: string;
	date: string | Date;
}

const ActivityComponent = (props: Props) => {
	const { type, date } = props;
	return (
		<div>
			<HeaderPage title={`Interior Design`} />
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Search
					placeholder="input search text"
					onSearch={onSearch}
					enterButton
					style={{ width: '25%' }}
				/>
				<DatePicker onChange={onChange} picker="month" />
			</div>
			<TableActivity />
		</div>
	);
};

export default ActivityComponent;
