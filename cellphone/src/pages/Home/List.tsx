import { Col, Row } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React from 'react';
import styled from 'styled-components';
import Pro1 from '../../assets/images/Pro1.png';



const List = () => (
  <>

    <Content style={{ padding: '50px 50px' }}>
      <Row>
      <h2>ĐIỆN THOẠI NỔI BẬT</h2>
      </Row>
      <Row>
        <Col span={4} >
          <Box >
            <ProImage src={Pro1} alt="" />
            <h3>Product </h3>
          </Box>

        </Col>
        <Col span={4} >
          <Box >
            <ProImage src={Pro1} alt="" />
            
            <Price>
              <span style={style}>1000000đ</span>
              <span>100000đ</span>
            </Price>
            <Text>
              <p>sdfghjk</p>
            </Text>
          </Box>
        </Col>
        <Col span={4} >
          
        </Col>
        <Col span={4} >
          <div style={style}>col-6</div>
        </Col>
        <Col span={4} >
          <div style={style}>col-6</div>
        </Col>
        <Col span={4} >
          <div style={style}>col-6</div>
        </Col>
        <Col span={4} >
          <div style={style}>col-6</div>
        </Col>

        <Col span={4} />
        <Col span={4} />
        <Col span={4} />
        <Col span={4} />
        <Col span={4} />
        <Col span={4} />
        <Col span={4} />
      </Row>
    </Content>
  </>
);
const ProImage = styled.img`
    width:180px;
    padding-top: 20px;
    padding-bottom: 20px;
`
const Box = styled.div`
  width: 220px;
  transition: box-shadow .3s;
  background: #fff;
  float: left;
`
const Name = styled.h3`
  
`
const Price = styled.span`
  display: flex;
  justify-content:space-around;
`
const style = {
  color: '#D70018',
};
const Text = styled.div`
  width: 200px;
  background: #F3F4F6;
  border: 1px solid #E5E7EB;
  border-radius: 5px;
  margin: 15px 8px 15px;
  
`
export default List;