import React, {useState, useEffect} from "react";
import "../styles/pharmacies.css";
import PharmacieCard from "../shared/PharmacieCard";
import CommonSection from "../shared/pharmacie/CommonSection-pharmacie";
import { Col, Container, Row } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import GoogleMapComponent from "../components/GoogleMapComponent";



const Pharmacies = () => {

    
    



    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: pharmacie, loading, error} = useFetch(`/pharmacies?page=${page}`);

    const {data:pharmacieCount} = useFetch(`/pharmacies/search/getPharmaciecount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(pharmacieCount/ 8);
        SetPageCount(pages)
    },[page, pharmacieCount])

    return (
    <>
    <CommonSection title={"All Pharmacies"} />
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
                         pharmacie?.map(pharmacie => ( 
                        <Col lg="3" md ="6" sm="6" key={pharmacie._id}>
                             <PharmacieCard pharmacie={pharmacie} />
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
export default Pharmacies;