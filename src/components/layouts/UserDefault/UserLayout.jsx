import { Col, Row } from 'antd';
//import Footer from '@/component/Footer';
//import Navbar from '@/component/Navbar/Navbar';
//import Slidebar from '@/component/Slidebar/Slidebar';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';

function UserLayout() {
    return ( 
        <Row>
            <Col span={24}>
              <Header/>
            </Col>

            {/* <Col span={24}>
                <Navbar/>
            </Col>

            <Col span={24}>
                <Slidebar/>
            </Col> */}

             <Col span={24}>
                {/* Đây là chỗ nội dung thay đổi */}
              <Outlet/>
            </Col>


            {/* <Col span={24}>
                <Footer/>
            </Col> */}
        </Row>
    );
}

export default UserLayout;