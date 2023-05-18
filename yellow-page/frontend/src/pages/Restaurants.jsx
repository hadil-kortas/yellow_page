import React, {useState, useEffect} from "react";
import "../styles/restaurant.css";
import RestaurantCard from "../shared/RestaurantCard";

import CommonSection from "../shared/restaurant/CommonSection-restaurant";
import restaurantData from "../assets/data/restaurant";
import { Container, Row, Col } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";
import GoogleMapComponent from "../components/GoogleMapComponent";



const Restaurants = () => {
    
    

    const [pageCount, SetPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const {data: restaurant, loading, error} = useFetch(`/restaurants?page=${page}`);

    const {data:restaurantCount} = useFetch(`/restaurants/search/getRestaurantcount`)

    useEffect(()=>{
        window.scrollTo(0,0)
        const pages = Math.ceil(restaurantCount/ 8)
        SetPageCount(pages)
    },[page, restaurantCount])



    return (
    <>
        <CommonSection title={"All Restaurants"}/>
        <section>
            <Container>
                <Row>
                 
                </Row>
            </Container>
        </section>
        <section className="pt-0">
            <Container>
                
            {loading && <h4 className="text-center pt-5">Loading...</h4>}
            {error && <h4 className="text-center pt-5">{error}</h4>}
            {!loading && !error && <Row>
                    {
                        restaurant?.map(restaurant => (
                        <Col lg="3" md ="6" sm="6" className="mb-4" key={restaurant._id}>
                             <RestaurantCard  restaurant={restaurant} />
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
export default Restaurants;
