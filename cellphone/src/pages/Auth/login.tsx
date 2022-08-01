import { Button, Checkbox, Form, Input, Row, Col, InputNumber, Select } from 'antd';
import React from 'react';

const { Option } = Select

const LoginPage: React.FC = () => {
	const [form] = Form.useForm()
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<Row>
			<Col span={12} offset={6}>
				<Form
					form={form}
					name="basic"
					labelCol={{ span: 24 }}
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Tên"
						name="name"
						rules={[{ required: true, message: 'Tên không được để trống' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Email"
						name="email"
						rules={[{ required: true, message: 'Email không được để trống' }]}
					>
						<Input style={{ width: '100%' }} />
					</Form.Item>

						<Form.Item>
						<Button type="primary" htmlType="submit">
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>

	);
};

export default LoginPage;