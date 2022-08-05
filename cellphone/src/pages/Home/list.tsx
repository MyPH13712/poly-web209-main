import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import LogoImage from '../../assets/images/logo.png'


const ListPage = () => {
    return (
        <>

            <Container>
                <h2>Điện thoại nổi bật nhất</h2>
                <Row>
                    <Col span={3}>
                        <Box>
                            <ProImg src={LogoImage} />
                            <NamePro>Product A</NamePro>
                            <Price>
                                <span style={color}>1000000 đ</span>
                                <span>165115151 đ</span>
                            </Price>
                            <Text>
                                dfysdufjksbjf
                            </Text>
                            <Rate />
                        </Box>
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>
                    <Col span={3}>
                        <Logo src={LogoImage} />
                    </Col>


                </Row>
            </Container>
        </>
    )
}

const Container = styled.div`
margin-top: 15px;
max-width: 1200px;
`
const Logo = styled.img`
width: 65px;
height: auto;
`
const ProImg = styled.img`
width: 180px;
padding: 20px 0;
`
const NamePro = styled.div`
margin: auto 20px;
width: 194px;
height: 42px;
left: 68px;
top: 754px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;

`
const Box = styled.div`
width: 220px;
transition: box-shadow .3s;
background: #fff;
border: 1px solid #E5E7EB;
border-radius:5px;
float: left;
`
const color = {
    color: '#D70018',
};


const Price = styled.div`
display: flex;
justify-content: space-around;
`
const Text = styled.div`
width: 200px;
background: #F3F4F6;
margin: 15px 8px 15px;
padding: 5px;
`
export default ListPage