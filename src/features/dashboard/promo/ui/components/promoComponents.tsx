import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import HeaderPage from 'src/shared/components/HeaderPage';

const PromoComponents = () => {
	return (
		<div>
			<HeaderPage title="Promo" />
			<Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}>
				<Col className="gutter-row" span={8}>
					<Card
						hoverable
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col className="gutter-row" span={8}>
					<Card
						hoverable
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col className="gutter-row" span={8}>
					<Card
						hoverable
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
				<Col className="gutter-row" span={8}>
					<Card
						hoverable
						cover={
							<img
								alt="example"
								src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
							/>
						}
					>
						<Meta title="Europe Street beat" description="www.instagram.com" />
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default PromoComponents;
