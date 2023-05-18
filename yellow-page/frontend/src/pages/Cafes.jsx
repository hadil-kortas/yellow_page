import React, {useState, useEffect} from "react";
import "../styles/cafes.css";
import CafeCard from "../shared/CafeCard";
import CommonSection from "../shared/cafe/CommonSection-cafe";
import { Col, Container, Row } from "reactstrap";


import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import GoogleMapComponent from "../components/GoogleMapComponent";


const Cafes = () => {
    
    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: cafe, loading, error} = useFetch(`/cafes?page=${page}`);

    const {data:cafeCount} = useFetch(`/cafes/search/getCafecount`)
    

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(cafeCount/ 8)
        SetPageCount(pages)
    },[page, cafeCount])

    return (
    <>
    <CommonSection title={"All Cafes"} />
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
                    cafe?.map(cafe => (
                    <Col lg="3" md ="6" sm="6" key={cafe._id}>
                         <CafeCard cafe={cafe} />
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
export default Cafes;