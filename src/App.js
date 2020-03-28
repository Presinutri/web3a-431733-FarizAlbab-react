import React, { Component } from 'react';
import logo from './logo.svg';
import { Card } from 'antd';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Col, Row } from 'antd';
import { Button, Tooltip } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;
const { Meta } = Card;



  const cardData = [
    {
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmzD5acVWHiB-qxDTYi6Zvnvsy8QWPGsUjl3TYwOl89Ch0UlbW",
      title : "FrontEnd EDGEBOUNCE 1.5 SHOES",
      price : "$45"
    },
    {
      image :"data:image/jpeg;base64,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",
      title : "NMD_R1 SHOES",
      price : "$130"
    },
    {
      image : "data:image/jpeg;base64,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",
      title : "ULTRABOOST 20 SHOES",
      price : "$126"
    },
    {
      image : "https://assets.adidas.com/images/w_600,f_auto,q_auto/7d8553a15bd64257a25ba97b012ed5d2_9366/Continental_80_Shoes_White_G27706_07_standard.jpg",
      title : "CONTINENTAL 80 SHOES",
      price : "$80"
    },
    {
      image : "https://assets.adidas.com/images/w_600,f_auto,q_auto/49e9743bc8574c79b765a913009cdbc2_9366/Falcon_Shoes_White_B28128_01_standard.jpg",
      title : "FALCON SHOES",
      price : "$60"
    }

  ]
  class App extends React.Component{
    render(){
      return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">MEN</Menu.Item>
            <Menu.Item key="2"><Link to='/Women'>WOMEN</Link></Menu.Item>
            <Menu.Item key="3">KIDS</Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Breadcrumb style={{ margin: '16px 0',textAlign: 'center'}}>
            <p style={{color: '#dee3e2'}}> In support of the worldwide effort to keep our communities safe, we will close our US stores through March 29. <b>READ MORE</b></p>
          </Breadcrumb>

          <div className="App">
            <Row>
              <Col span={12} className="app-text">
                <h1 style={{fontSize:'30pt', margin:'0'}}>30% OFF FOR A LIMITED TIME</h1>
                <p>Get 30% off full price and sale with promo code MARCH30 at checkout. Excludes Yeezy, Pharrell Williams, and Gift Cards</p>
                <Button type="dark" style={{width:'150px', height:'50px', color:'black'}}>
                   SHOP NOW
                   <ArrowRightOutlined />
                </Button>
              </Col>
              <Col span={12}>
                <img className="img-sepatu" src="https://houseofheat.co/app/uploads/2019/09/Air-Jordan-34-22Blue-Void22-AR3240-400-1.jpg"></img>
              </Col> 
            </Row>
            
          </div>

      
      <div className="site-card-wrapper">
        <h1 style={{textAlign:'center',color:'#dee3e2'}}>WHAT'S TRENDING</h1>
        
            <Row justify="center">
              {cardData.map(data=> 
              <Card
            hoverable
            style={{ width: 240, margin: 10 }}
            cover={<img alt="example" src={data.image} />}>
            <Meta title={data.title} description={data.price} />
              </Card>
             )}
            </Row>
      </div>

      <div className="content-text">
        <h3>STORIES, STYLE, AND SPORTING GOODS AT ADIDAS, SINCE 1949</h3>
        <p>Through sports, we have the power to change lives. Sports keep us fit. They keep us mindful. They bring us together. Athletes inspire us. They help us to get up and get moving. And sporting goods featuring the latest technologies help us beat our personal best. adidas is home to the runner, the basketball player, the soccer kid, the fitness enthusiast, the yogi. And even the weekend hiker looking to escape the city. The 3-Stripes are everywhere and anywhere. In sports. In music. On life’s stages. Before the whistle blows, during the race, and at the finish line. We’re here to support creators. To improve their game. To live their lives. And to change the world.</p>

      </div>

      <div className="content-discount">
        <Row>
          <Col span={12} className="discount-text" style={{textAlign:'right', paddingRight:'30px'}}>
            <h2 style={{fontSize:'25pt', margin:'0', color:'white'}}>JOIN CREATOR & GET <br/>15% DISCOUNT</h2>
          </Col>
          <Col span={12} style={{paddingTop:'30px', textAlign:'left'}}>
          <Button type="dark" style={{width:'125px', height:'50px', color:'black'}}>
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


export default App;
