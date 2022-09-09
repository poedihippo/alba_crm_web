import { Card, Progress } from 'antd';
import React from 'react';
import ReportCard from './reportCard';
import ReportFilter from './reportFilter';

const Report = () => {
	return (
		<div className="report">
			<ReportFilter />

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<ReportCard
					link="/dashboard/report/sales-revenue/bum"
					title="Sales Revenue"
					value={'Rp 5.000.000'}
					target={'Rp 10.000.000'}
					percentage={70}
				/>
				<ReportCard
					link="/dashboard/report/settlement/1/02-2022"
					title="Settlement"
					value={'40'}
					target={'0'}
					percentage={30}
				/>
				<ReportCard
					link="/dashboard/report/interior-design/1/2022-09"
					title="Interior Design"
					value={'Rp 200.000.000'}
					target={''}
					percentage={0}
				/>
				<ReportCard
					link="/dashboard/report/activity"
					title="Activity"
					value={'6468'}
					target={''}
					percentage={0}
				/>
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
		</div>
	);
};

export default Report;
