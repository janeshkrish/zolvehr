import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import './CSS/Landing.css'
import { Link } from 'react-router-dom'
import { Button, Card, Row, Col, Typography } from 'antd'
import img_1 from '../Components/assets/img1.jpg'
import img_2 from '../Components/assets/img2.jpg'
import img_3 from '../Components/assets/img3.jpg'
import globe from '../Components/assets/earth.png'
import company from '../Components/assets/company.png'
import user from '../Components/assets/users.png'
import { CalendarOutlined, FileTextOutlined, LinkOutlined, MobileOutlined, SolutionOutlined } from '@ant-design/icons'
import { Footer } from '../Components/Footer/Footer'



export const Landing = () => {
  const {Title,Text} = Typography
  const images = [img_1,img_2,img_3]
  const [currentImageIndex,setCurrentImageIndex] = useState(0)
 
  useEffect(() => {
    const interval = setInterval(()=>{
      setCurrentImageIndex(prev => (prev+1) % images.length)
    },3000)
    return () => clearInterval(interval)
  },[])

  return (
    <div>
        <Navbar />
        <div className="custom-hero-container">
              <Row justify="center" align="middle" className='custom-hero-row'>
                  <Col xs={24} md={12} className='custom-hero-content'>
                      <Title level={1} className='hero-title'>
                          Give a head start to your <br />HR Function
                      </Title>
                      <Text className="hero-subtext">
                        We take away the HR headaches so you can focus on serving clients and growing your business.
                      </Text>
                      <a href="#more"><Button type="primary" size="large" className="main-btn" style={{ marginTop: 20 }}>
                        Learn More →
                      </Button></a>
                      <div className="custom-slide-indicator">
                        {images.map((_, index)=>(
                          <span key={index} className={`custom-dot ${currentImageIndex === index ? 'active' : 'faded'}`}
                          onClick={()=> setCurrentImageIndex(index)}
                          >
                            0{index+1}
                          </span>
                        ))}
                      </div>
                  </Col>
                  <Col xs={24} md={12} className="custom-image-col">
                        <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="custom-carousel-img fade-in" />
                  </Col>
              </Row>
        </div>
        <div className="hero-section" id='more'>
          <Title className="hero-title">
            Welcome to the <span className="zolvetxt">ZolveHR</span> Side
          </Title>
          <Text className="hero-subtext">
            The most trusted full-suite HRMS for your people operations
          </Text>
          <hr/>
          <div className="button-group">
            <Link to="/freetrial"><Button type='primay' size='large' className='main-btn'>
              Start a Free Account
            </Button></Link>
            <Link to='/login'><Button type='primay' size='large' className='login_btn'>
              Login
            </Button></Link>
          </div>
          <Row justify='center' gutter={[24,24]} className='row-stats'>
            <Col xs={24} sm={8} md={6}>
              <Card bordered={false} className='stat-card card-blue' >
                 <img src={globe} alt="" className='stat-icon' />
                 <Title level={3}>30+</Title>
                 <Text>Countries</Text>
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Card bordered={false} className='stat-card card-green' >
                 <img src={company} alt="" className='stat-icon' />
                 <Title level={3}>20,000+</Title>
                 <Text>Companies</Text>
              </Card>
            </Col>
            <Col xs={24} sm={8} md={6}>
              <Card bordered={false} className='stat-card card-yellow' >
                 <img src={user} alt="" className='stat-icon' />
                 <Title level={3}>4 million+</Title>
                 <Text>Users</Text>
              </Card>
            </Col>
          </Row>
          <Title className="hero-title">
             Modern <span className="zolvetxt">HR and Payroll</span> are Complex 
          </Title>
          <Text className="hero-subtext">
             ZolveHR solves some of the most common HR and Payroll issues that slow down your business.
          </Text>
          <hr/>
          <Row gutter={[24,24]} justify="center" className='issue-grid'>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card className='issue-card green-card' bordered={false}>
                       <div className="card-icon green-icon"><FileTextOutlined /></div>
                       <Title level={4}>You don’t have an HRMS, and running HR ops on Sheets</Title> 
                       <Text>Use one single app for all HR and Payroll Processes,
                         including workforce management, employee relations, leave and attendance
                       </Text>  
              </Card>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card className='issue-card purple-card' bordered={false}>
                       <div className="card-icon purple-icon"><SolutionOutlined /></div>
                       <Title level={4}>Your payroll solution is unstable, requires hours of manual work</Title> 
                       <Text>Ensure faster and accurate checkouts. Implement complex policies. Automate hours of manual 
                        payroll processes and remove any manual error
                       </Text>  
              </Card>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card className='issue-card blue-card' bordered={false}>
                       <div className="card-icon blue-icon"><LinkOutlined /></div>
                       <Title level={4}>Most HR and payroll tasks are manual, clerical, and take hours to complete</Title> 
                       <Text>Give access to the best-in-category leave management solution for efficient leave management
                       </Text>  
              </Card>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card className='issue-card yellow-card' bordered={false}>
                       <div className="card-icon yellow-icon"><CalendarOutlined /></div>
                       <Title level={4}>You’re still using old ways to capture and track leaves and attendance</Title> 
                       <Text>150+ basic and advanced admin reports covering Leave and Attendance, 
                        Payroll, MIS, Claims, Welfare and State-level Policies
                       </Text>  
              </Card>
            </Col>
            <Col xs={24} sm={12} md={10} lg={8}>
              <Card className='issue-card green-card' bordered={false}>
                       <div className="card-icon green-icon"><MobileOutlined /></div>
                       <Title level={4}>Your employees need a self-serving portal (ESS), ON MOBILE!</Title> 
                       <Text>Use ZolveHR's "mobile-first" Employee Self Service Portal 
                        (ESS) enables common HR tasks for employees and managers. Access payslips, 
                        manage leaves, add expense claims and so much more. All on mobile
                       </Text>  
              </Card>
            </Col>
          </Row>
          <div className="button-group">
            <Link to="/freetrial"><Button type='primay' size='large' className='main-btn'>
              Explore HRMS
            </Button></Link>
            <Link to="/freetrial"><Button type='primay' size='large' className='main-btn'>
              Explore Payroll
            </Button></Link>
          </div>
          <Title className="hero-title1">
             Everyone gets <span className="zolvetxt">value</span> from day 1 
          </Title>
          <Text className="hero-subtext">
             A platform loved by everyone in your company - by employers and employees
          </Text>
          <hr/>
        </div>
        <Footer />
    </div>
  )
}
