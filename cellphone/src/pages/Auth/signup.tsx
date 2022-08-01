import { Button, Checkbox, Form, Input, Row, Col, InputNumber, Select } from 'antd';
import React from 'react';

const { Option } = Select

const SignupPage: React.FC = () => {
	const [form] = Form.useForm()
	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const onGenderChange = (value: string) => {
		const name = form.getFieldValue("name")
		console.log(name)
		switch (value) {
		  case 'male':
		    form.setFieldsValue({name: 'Hi, sir!'});
		    return;
		  case 'female':
		    form.setFieldsValue({ note: 'Hi, lady!' });
		    return;
		  case 'other':
		    form.setFieldsValue({ note: 'Hi there!' });
		}
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

					<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
						<Select
							placeholder="Select a option and change input text above"
							onChange={onGenderChange}
							allowClear
						>
							<Option value="male">male</Option>
							<Option value="female">female</Option>
							<Option value="other">other</Option>
						</Select>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit">
							Đăng ký
						</Button>
					</Form.Item>
				</Form>
			</Col>
		</Row>

	);
};

export default SignupPage;