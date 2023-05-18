import React, {useState, useEffect} from "react";
import "../styles/hotels.css";
import HotelCard from "../shared/HotelCard";
import CommonSection from "../shared/hotel/CommonSection-hotel";
import { Col, Container, Row } from "reactstrap";
import hotelData from "../assets/data/hotels";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import GoogleMapComponent from "../components/GoogleMapComponent";


const Hotels = () => {
    
   

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: hotels, loading, error} = useFetch(`/hotels?page=${page}`);

    const {data:hotelCount} = useFetch(`/hotels/search/getHotelcount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(hotelCount/ 8)
        SetPageCount(pages)
    },[page, hotelCount])


    return (
    <>
    <CommonSection title={"All Hotels"} />
    <section>
        <Container>
            <Row>
             
            </Row>
        </Container>
    </section>
    <section>
        <Container>
        {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row>
            
                {
                    hotels?.map(hotel => (
                    <Col lg="3" md ="6" sm="6" key={hotel._id}>
                         <HotelCard hotel={hotel} />
                         </Col>
                    ))}
                    <Col lg="12">
                            <div className="pagination d-flex align-items-center
                            justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map(number => (
                                    <span key={number} onClick={() => setPage(number)}
                                    className={page===number ? "active__page" : ""}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>

            </Row>
        }
        </Container>
    </section>
    <section>
        <Container>
            <Row>
                <Col lg="12">
                    <GoogleMapComponent />
                </Col>
            </Row>
        </Container>
    </section>
    </>
    )

};
export default Hotels;
