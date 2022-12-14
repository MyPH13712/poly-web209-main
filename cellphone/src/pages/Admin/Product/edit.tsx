import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Image,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, read, update } from "../../../api/product";
import { upload } from "../../../api/images";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getAllCate } from "../../../api/category";
import { CategoryType } from "../../../type/category";
import { ProductType, ProductUpdateType } from "../../../type/product";
const { TextArea } = Input;
const { Option } = Select;
type Props = {};
const ProductEdit = (props: Props) => {
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [cate, setCates] = useState<CategoryType[]>([]);
  const { _id } = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(_id as string);
      form.setFieldsValue(data);
      console.log(data);
    };
    getProduct();
    const getCates = async () => {
      const { data } = await getAllCate();
      setCates(data);
    };
    getCates();
  }, []);
  console.log(form);

  const navigate = useNavigate();
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result as string);
    };
  };
  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinish = async (values: any) => {
    const product = {
      _id: _id,
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      image: values.image,
      feature: values.feature,
      category: values.category,
    };
    if (values.image2) {
      product.image = uploadedImage;
    }
    console.log(product);

    try {
      const data = await update(product);
      message.success("S???a th??nh c??ng");
      navigate("/admin");
    } catch (err) {
      message.error("C?? l???i x???y ra");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  console.log(form);

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          C???p nh???t s???n ph???m
        </Typography.Title>
      </Breadcrumb>
      <Form
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelCol={{ span: 24 }}
        form={form}
      >
        <Row gutter={16}>
          <Col span={10}>
            <Container>
              <Form.Item name="image2">
                <UploadWrapper>
                  {uploadedImage ? (
                    <ImagePreview style={{}} src={uploadedImage} alt="Image" />
                  ) : (
                    <>
                      <Form.Item name="image" valuePropName="src">
                        <ImagePreview style={{ width: "500px" }} />
                      </Form.Item>
                      <UploadIcon2>
                        <PlusCircleOutlined style={{ fontSize: 30 }} />
                        <input
                          style={{ display: "none" }}
                          type="file"
                          accept="image/png, image/jpg, image/jpeg, image/gif"
                          onChange={handleChangeImage}
                        />
                        <br />
                        Thay ???nh
                      </UploadIcon2>
                    </>
                  )}
                </UploadWrapper>
              </Form.Item>
              <Form.Item
                name="shortDesc"
                labelCol={{ span: 24 }}
                label="M?? t??? ng???n"
              >
                <TextArea name="shortDesc" rows={4} />
              </Form.Item>
            </Container>
          </Col>
          <Col span={14}>
            <Typography.Title level={5}>Th??ng tin s???n ph???m</Typography.Title>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="T??n s???n ph???m"
              initialValue={_id}
              rules={[
                { required: true, message: "T??n s???n ph???m kh??ng ???????c tr???ng" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Gi?? g???c"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Gi?? s???n ph???m kh??ng ???????c ????? tr???ng",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Gi?? gi???m"
                  labelCol={{ span: 24 }}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Ph??n lo???i" name="category">
                  <Select style={{ width: "100%" }} size="large">
                    {cate &&
                      cate.map((item: any) => {
                        return <Option value={item._id}>{item.name}</Option>;
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="?????c ??i???m n???i b???t"
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="M?? t??? s???n ph???m"
            >
              <TextArea name="description" rows={8} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                C???p nh???t s???n ph???m
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
const Container = styled.div`
  text-align: center;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon2 = styled.label`
  input {
    display: none;
  }
  cursor: pointer;
  color: #1890ff;
  &:hover {
    color: black;
    transition: 0.5s;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;
const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default ProductEdit;
