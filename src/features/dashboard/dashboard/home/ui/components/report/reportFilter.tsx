import React from 'react';
import SelectComponent from './selectComponent';

const ReportFilter = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between'}}>
			<div style={{marginLeft:'5px'}}>
				<h3>Report</h3>
			</div>

			<div>
				<SelectComponent />
				<SelectComponent />
				<SelectComponent />
			</div>
		</div>
	);
};

export default ReportFilter;
