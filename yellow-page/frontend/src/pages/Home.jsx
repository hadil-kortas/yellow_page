import React from "react";
import '../styles/home.css'


import {Container , Row , Col} from 'reactstrap';
import hotel1 from '../assets/images/hotel1.png';
import worldImg from '../assets/images/world.png'
import hotel from '../assets/images/hotel.png'
import Subtitle from './../shared/Subtitle';
import Hotel from './../assets/images/hotel6.png'
import SearchBar from "./../shared/SearchBar";
//import AvisList from "../avis/AvisListe";
import africaImg from '../assets/images/africa.png'
import sopalImg from '../assets/images/sopal.png'
import adbImg from '../assets/images/ADB.png'
import FeaturedLocationsList from "../components/featured-locations/FeaturedLocationsList";
import Testimonials from "../components/Testimonial/Testimonials";
import GoogleMapComponent from "../components/GoogleMapComponent";

const Home = () => {
    return <>
    {/*----------- hero section start---------*/ }
    
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero__content">
                        <div className="hero__subtitle d-flex align-items-center ">
                            <Subtitle subtitle ={'Don`t search, find'} />
                            <img src={worldImg} alt="" />
                        </div>
                        <h1>Make {" "}  
                            <span className="highlight"> the right choice </span>
                        </h1>
                         <p>The original source to find and connect with local doctors, pharmacies, hotels, restaurants, dentists, and more.</p>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box">
                        <img src={hotel} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-4">
                        <img src={hotel1} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero__img-box mt-5">
                        <img src={Hotel} alt="" />
                    </div>
                </Col>
                <SearchBar />

                
                
            </Row>
        </Container>
        
    </section>

    
    
    {/*------------------- testimonial section start-------------------*/ }


    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Categories'}/> 
                <   h2 className="testimonial__title"> Which category you choose</h2>                
                </Col>
                <Col lg="12">
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>




    {/*------------------- testimonial section end-------------------*/ }

    {/*--------------------------- featured location section start ---------------*/ }
    <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}/> 
                <   h2 className="featured__location-title"> Recommendations</h2>

                
                </Col>
                <FeaturedLocationsList />
            </Row>
        </Container>
    </section>

    
    {/*--------------------------- featured location section end ---------------*/ }

    {/*------------------- testimonial section start-------------------*/ }


    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Google Maps'}/> 
                <   h2 className="googlemap__title"> Take the best road</h2>                
                </Col>
                <Col lg="12">
                    <GoogleMapComponent />
                </Col>
            </Row>
        </Container>
    </section>




    {/*------------------- testimonial section end-------------------*/ }



    {/*-----------hero section start------------- */}
    <section className="testimonial">
        <div className="container">
            <div className="section-title headline">
                <span className="headline_content">
                        <div className="row">
                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={africaImg} alt="" />
                                </div>
                                <h2>DERBIGUM AFRICA</h2>
                                <p>I consider yellow pages as a very useful complement in digital marketing: it only takes a few clicks. To the extent that your customers and prospects are looking for you and find you on it, you might as well do it correctly</p>
                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={sopalImg} alt="" />

                                </div>
                                <h2>SOPAL</h2>
                                <p>Yellow pages is as important as social networks, see more!</p>

                            </div>

                            <div className="col-lg-4 text-center">
                                <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                                    <img src={adbImg} alt="" />

                                </div>
                                <h2>ADB, ACOUSTIC DESIGN & BROADCAST</h2>
                                <p>Go to yellow pages and you will see that small SMEs and TPEs can also promote themselves, without necessarily buying space from the web giants google or facebook.</p>

                            </div>                       
                               </div>
                 </span>
            </div>       
        </div>
    </section>
    

    </>

};
export default Home;
