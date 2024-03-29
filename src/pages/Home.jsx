import { Container, Row, Col, Button } from 'reactstrap';
import iphoneHome from '../assets/images/screens/iphone_hometab-min.png';
import youtubeIcon from '../assets/images/common/youtube_social_icon_white.png';

const Home = () => {
    return(
        <section id='home'>
            <Container>
                <Row className='row-center'>
                    <Col lg='5' md='12' sm='12' className='col-pb-30'>
                        <img src={iphoneHome} alt="" />
                    </Col>
                    <Col lg='7' md='12' sm='12' className='home-description col-pb-30'>
                        <Row>
                            <h1><span>Design your Room</span></h1>
                        </Row>
                        <Row>
                            <h1>Chamber AR</h1>
                        </Row>
                        <Row>
                            <p className='details'>Create your 3D room layout with textured floor and walls in real-time. Place your 3D furniture models and design your room. Give realistic looking with user-defined lighting options.  </p>
                        </Row>

                        <Row >
                            <Col>
                                <Button href='#screens' className='cv-btn mr-20'>See More</Button>

                                <a href='https://youtu.be/NcTS3BAcNts?si=VhpQXjYV_dZC6dj1' target='_blank' rel='noopener noreferrer' className='youtube-icon'>
                                    <img src={youtubeIcon} alt="" style={{ width: '56px', height: '35px' }} />
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Home;