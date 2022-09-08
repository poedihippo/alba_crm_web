import { Card, Progress } from 'antd';
import React from 'react';

const ReportCard = () => {
	return (
		<Card
			size="small"
			title="Sales Revenue"
			style={{ width: '25%', padding: '15px', borderRadius: '12px',margin:'5px' }}
			headStyle={{ borderBottom: 'none' }}
		>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h2>Rp. 3.000.000</h2>
				<Progress type="circle" percent={75} width={40} />
			</div>
            <p>Target: Rp 30.000.000</p>
		</Card>
	);
}; 

export default ReportCard;
