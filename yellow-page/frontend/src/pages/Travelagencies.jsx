import React, {useState, useEffect} from "react";
import "../styles/travelagencies.css";
import TravelAgencieCard from "../shared/TravelAgencieCard";
import CommonSection from "../shared/travelagencie/CommonSection-travelagencie";
import { Col, Container, Row } from "reactstrap";
import travelData from "../assets/data/travelagencies";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import GoogleMapComponent from "../components/GoogleMapComponent";

const TravelAgencies = () => {

    

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: travelagencie, loading, error} = useFetch(`/travelagencies?page=${page}`);

    const {data:travelagencieCount} = useFetch(`/travelagencies/search/getTravelAgenciecount`)
    

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(travelagencieCount/ 8)
        SetPageCount(pages)
    },[page, travelagencieCount])
    return (
     <>
    <CommonSection title={"All Travel Agencies"} />
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
            {!loading && !error &&<Row>
                {
                     travelagencie?.map(travelagencie => (
                         <Col lg="3" md ="6" sm="6" key={travelagencie._id}> 
                         <TravelAgencieCard travelagencie={travelagencie} />
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
export default TravelAgencies;