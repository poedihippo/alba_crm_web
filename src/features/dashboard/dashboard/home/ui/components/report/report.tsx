import { Card, Progress } from 'antd';
import React from 'react';
import ReportCard from './reportCard';
import ReportFilter from './reportFilter';

const Report = () => {
	return (
		<div className="report">
			<ReportFilter />

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<ReportCard />
				<ReportCard />
				<ReportCard />
				<ReportCard />
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
