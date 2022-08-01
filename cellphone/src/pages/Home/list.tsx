import { Col, Row } from "antd";
import React from "react";


const ListPage = () => {
    return (
        <>
            <h3>Điện thoại nổi bật nhất</h3>
            <>
                
                <Row>
                    <Col span={4}>col-6</Col>
                    <Col span={4}>col-6</Col>
                    <Col span={4}>col-6</Col>
                    <Col span={4}>col-6</Col>
                </Row>
            </>
        </>
    )
}

export default ListPage