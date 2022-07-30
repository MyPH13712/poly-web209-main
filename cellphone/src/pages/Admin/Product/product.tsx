import { Table, Space, Switch, Image, Button, message } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleAdmin from "../../../components/TitleAdmin/TitleAdmin";
import styled from "styled-components";
import { deleteProduct, getAll, update, updateStt } from "../../../api/product";
import { useQuery } from "react-query";
import { getAllCate } from "../../../api/category";
import { ProductType } from "../../../type/product";
import { CategoryType } from "../../../type/category";
import useProduct from "../../../hooks/useProduct";
import { mutate } from "swr";
interface DataType {
  status: number;
  _id: string;
  name: string;
  originalPrice: number;
  saleOffPrice: number;
  image: string;
  feature: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const Product: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  const [cate, setCate] = useState<CategoryType[]>([]);
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll();
      setDataTable(data);
    };
    const fetchCate = async () => {
      const { data } = await getAllCate();
      setCate(data);
    };
    fetchCate();
    fetchData();
  }, []);
  console.log(dataTable);
  console.log(cate);
  const data1 = dataTable.map((item, index) => {
    return {
      key: index + 1,
      status: item.status,
      _id: item._id,
      name: item.name,
      originalPrice: item.originalPrice,
      saleOffPrice: item.saleOffPrice,
      image: item.image,
      feature: item.feature,
      category: item.category,
    };
  });
  const columns = ({ handleDeleleProduct }): ColumnsType<DataType> => [
    {
      title: "Ảnh",
      key: "image",
      dataIndex: "image",
      render: (text: string) => <Image width={100} src={text} />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá niêm yết (đồng)",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (text: string) => {
        let name;
        cate.map((item) => {
          if (item._id == text) {
            name = item.name;
          }
        });
        return <span>{name}</span>;
      },
    },
    {
      title: "Ẩn/hiện",
      dataIndex: 'isDelete',
      key: 'isDelete',
      width: '10%',
      render: (_, record) => <Switch checked={_} onChange={(isDelete) => handleDeleleProduct(isDelete, record)} />
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "_id",
      render: (text: string) => (
        <Space size="middle">
          <Link to={`/admin/product/edit/${text}`}>
            <EditOutlined />
          </Link>
          <Button
            style={{ border: "none" }}
            onClick={async () => {
              const confirm = window.confirm(
                "Bạn có chắc chắn muốn xóa không?"
              );
              if (confirm) {
                const { data } = await deleteProduct(text);
                data &&
                  setDataTable(dataTable.filter((item) => item._id !== text));
                message.success("Xóa thành công")
              }

            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  // const onChange = async (checked: boolean, _id: string) => {
  //   console.log(_id);
  //   const status = checked ? 0 : 1;
  //   const { data } = await updateStt({ status: status }, _id);
  //   setDataTable(dataTable.map((item) => (item._id == _id ? data : item)));
  //   message.success("Đổi trạng thái thành công");
  // };
  // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
  //   console.log("selectedRowKeys changed: ", selectedRowKeys);
  //   setSelectedRowKeys(newSelectedRowKeys);
  // };
  const {data, isLoading, isError } = useProduct()

  const handleDeleleProduct = async (isDelete: boolean, record: any) => {
    const { id } = record
    record.isDelete = isDelete
    const res = await update(id, record)
    mutate('/products')
    message.success("Cập nhật thành công")
  }

  console.log("-------reRender---------")
  return (
    <div>
      <Top>
        <TitleAdmin name={"Sản phẩm"} />
        <Link to="/admin/product/add">
          <Button type="default" shape="default" icon={<PlusOutlined />} />
        </Link>
      </Top>
      <Table
        loading={isLoading} columns={columns({ handleDeleleProduct })} dataSource={data?.data} rowKey="id"/>
    </div>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Product;
