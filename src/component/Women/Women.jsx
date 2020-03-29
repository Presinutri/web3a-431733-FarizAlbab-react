import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Card } from 'antd';
import '../../App.css';
import './Women.css';
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
      image : "https://cdn.zando.co.za/p/343826-8099-628343-1-zoom.jpg",
      title : "FrontEnd EDGEBOUNCE 1.5 SHOES",
      price : "$45"
    },
    {
      image :"https://assets.adidas.com/images/w_600,f_auto,q_auto/36378345e8b14ab2b032a8ba00f131b1_9366/Swift_Run_Shoes_White_B37725_01_standard.jpg",
      title : "Swift Run Shoes",
      price : "$43"
    },
    {
      image : "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/35a22142df5e49a1a57caa990134d1a9_9366/Ultraboost_Shoes_White_F34079_01_standard.jpg",
      title : "ULTRABOOST SHOES",
      price : "$90"
    },
    {
      image : "https://www.shoegalleryonline.com/prodimages/23981-DEFAULT-l.jpg",
      title : "Adidas Women's Crazy Chaos",
      price : "$75"
    }

  ]
  class Women extends React.Component{
    render(){
      return (
        <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px',fontWeight:'bold'}}
          >
            <Menu.Item key="1"><Link to='/'>MEN</Link></Menu.Item>
            <Menu.Item key="2">WOMEN</Menu.Item>
            <Menu.Item key="3"><Link to='/kids'>KIDS</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="content">
          <Breadcrumb style={{ margin: '16px 0',textAlign: 'center'}}>
            <p style={{color: 'black'}}> In support of the worldwide effort to keep our communities safe, we will close our US stores through March 29. <b>READ MORE</b></p>
          </Breadcrumb>

          <div className="App-women">
            <Row>
              <Col span={12} className="app-text">
                <h1 style={{fontSize:'30pt', margin:'0'}}>30% OFF FOR A LIMITED TIME</h1>
                <p>Get 30% off full price and sale with promo code MARCH30 at checkout. Excludes Yeezy, Pharrell Williams, and Gift Cards</p>
                <Button type="dark" style={{width:'150px', height:'50px',  color:'white', backgroundColor:'black'}}>
                   SHOP NOW
                   <ArrowRightOutlined />
                </Button>
              </Col>
              <Col span={12}>
                <img className="img-sepatu" src="https://sneakerbardetroit.com/wp-content/uploads/2018/06/adidas-Ultra-Boost-Ash-Peach-BB6497.jpg"></img>
              </Col> 
            </Row>
          </div>
          <div className="App-women2">
            <Row>
              <Col span={12}>
              <img className="img-sepatu-women" src="https://www.improveyourvolley.com/images/alixklinemanadidascloseup.jpg"></img>  
              </Col>
              <Col span={12} className="app-text-women">
              <h1 style={{fontSize:'30pt', margin:'0', color:'white'}}>ALIX KLINEMAN IS READY</h1>
                <p style={{ color:'white'}}>HEAT.RDY apparel keeps the air flowing and you cool, dry and confident.</p>
                <Button type="dark" style={{width:'170px', height:'50px',  color:'black', backgroundColor:'white'}}>
                  <ArrowLeftOutlined />
                   SHOP HEAT.RDY
                </Button>
                <br/>
                <br/>
                <Button type="dark" style={{width:'210px', height:'50px',  color:'black', backgroundColor:'white'}}>
                   <ArrowLeftOutlined />
                   EXPLORE TECHNOLOGY
                </Button>
              </Col> 
            </Row>
          </div>
      <div className="content-text-women">
        <h3 style={{fontSize:'18pt'}}>WOMEN’S CLOTHING & SHOES</h3>
        <p>In sport and in life, creators aren’t content on the sidelines. adidas women’s shoes and apparel are made for those who understand that rules can be negotiated; expectations, evolved. Reach for a new personal best in apparel made of specialized performance fabrics. Accentuate your personal style in sport-inspired sneakers for your day-to-day. Whether sport is your life or you’re an athleisure fashionista, women’s clothing and footwear from adidas exist to help you redefine what’s possible.</p>
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


export default Women;
