import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Card } from 'antd';
import '../../App.css';
import './Kids.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Col, Row } from 'antd';
import { Button, Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;



  const cardData = [
    {
      image : "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/4a983edb13b8471eb446aa49000d5e0a_9366/ultraboost-19-shoes.jpg",
      title : "ULTRABOOST 19 SHOES",
      price : "$160"
    },
    {
      image :"https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/a6f1f19ae9f54c7b8de6ab0a00b76dfa_9366/ozweego-shoes.jpg",
      title : "OZWEEGO SHOES",
      price : "$90"
    },
    {
      image : "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/d502f17f32884180ac77ab2500dc8107_9366/u_path-run-shoes.jpg",
      title : "U_PATH RUN SHOES",
      price : "$65"
    },
    {
      image : "https://assets.adidas.com/images/w_385,h_385,f_auto,q_auto:sensitive,fl_lossy/8cfded326377438dbda9ab2c009d3fc0_9366/haiwee-shoes.jpg",
      title : "HAIWEE SHOES",
      price : "$65"
    }

  ]
  class Kids extends React.Component{
    render(){
      return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['3']}
            style={{ lineHeight: '64px',fontWeight:'bold'}}
          >
            <Menu.Item key="1"><Link to='/'>MEN</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/women'>WOMEN</Link></Menu.Item>
            <Menu.Item key="3">KIDS</Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Breadcrumb style={{ margin: '16px 0',textAlign: 'center'}}>
            <p style={{color: 'black'}}> US Store Closure Updates  <b>READ MORE</b></p>
          </Breadcrumb>

          <div className="App-kids">
            <Row>
              <Col span={12} className="app-text-kids">
                <h1 style={{fontSize:'30pt', margin:'0', color:'white'}}>CHANGE IS A TEAM SPORT</h1>
                <p style={{color:'white'}}>Young creators, it's your turn to make Superstar history.</p>
                <Button type="dark" style={{width:'150px', height:'50px',  color:'black', backgroundColor:'white',fontWeight:'bold'}}>
                   SHOP NOW
                   <ArrowRightOutlined />
                </Button>
              </Col>
            </Row>
          </div>
          <div className="App-card-kids">
            <Row>
              <Col span={12}>
              <div className="kids-1">

              </div>
              </Col>
              <Col span={12}>
              <div className="kids-2">
                <h3 style={{fontSize:'14pt', margin:'0', color:'white', fontWeight:'bold'}}>OUT GROWN THEIR GEAR?</h3>
                <p style={{ color:'white', margin:'0',}}>Update their look.</p>
                <Button type="dark" style={{width:'140px', height:'50px',  color:'black', backgroundColor:'white', fontWeight:'bold'}}>
                  SHOP NOW
                   <ArrowRightOutlined />
                </Button>
              </div>
              </Col> 
            </Row>
          </div>

          <div className="site-card-wrapper">
        <h1 style={{textAlign:'center',color:'black', fontSize:'18pt'}}>WHAT'S TRENDING</h1>
        
            <Row justify="center">
              {cardData.map(data=> 
              <Card
                hoverable
                style={{ width: 250, margin: 10, textAlign:'left'}}
                cover={<img alt="example" src={data.image} />}>
                <Meta title={data.title} description={data.price} />
              </Card>
             )}
            </Row>
      </div>

      <div className="content-text-women">
        <h3 style={{fontSize:'18pt'}}>ADADAS KIDS CLOTHING & KIDS SHOES</h3>
        <p>Whether they’re big kids playing in a weekend tournament or little ones mastering the monkey bars, being a young creator is all about having fun while playing hard. Find girls’ and boys’ shoes to support both their game and their style. Boys’ and girls’ clothing and shoes from adidas are built to give kids of every age and stage comfort and confidence for everything from first steps to personal bests</p>
      </div>

      

      <div className="content-discount-women">
        <Row>
          <Col span={12} className="discount-text-women" style={{textAlign:'left', paddingLeft:'300px'}}>
            <h2 style={{fontSize:'23pt', margin:'0', color:'black', fontWeight:'bold'}}>STAY IN THE KNOW WITH ADADAS!</h2>
          </Col>
          <Col span={12} style={{paddingTop:'30px', textAlign:'left'}}>
          <Button type="dark" style={{width:'125px', height:'50px', color:'white', backgroundColor:'black'}}>
              SIGN UP
              <ArrowRightOutlined />
            </Button>
          </Col> 
        </Row>
      </div>

      <div className="content-footer">
        <Row>
          <Col span={10} style={{textAlign:'right'}}>
            <h3>TRENDING</h3>
            <p>Black Friday<br/>Cyber Monday<br/>Casual Shoes<br/>Slip On Shoes<br/>Camo Clothing<br/>Burgundy Shoes<br/>Leather Sneakers</p>
          </Col>
          <Col span={4}>
          <h3>CUSTOMER SUPPORT</h3>
          <p>Get Help<br/>Track Order<br/>Return and Refunds<br/>Promotions<br/>How to Clean<br/>Store Locator<br/>Site Map</p>
          </Col>
          <Col span={10}style={{textAlign:'left'}}>
          <h3>COMPANY INFO</h3>
          <p>About Us<br/>Careers<br/>Press<br/>Military Discount<br/>Student Discount<br/>Mobile Apps<br/>Creator Clubs Adadas Stories</p>
            
          </Col>
        </Row>

      </div>

        </Content>
        <Footer style={{ textAlign: 'center', height:'0px', paddingTop:0, background:'grey', color:'white'}}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      
        );
    }
  }


export default Kids;
