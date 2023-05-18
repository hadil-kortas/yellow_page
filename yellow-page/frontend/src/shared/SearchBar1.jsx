import React, {useRef} from 'react';
import './search-bar1.css';
import {Col, Form, FormGroup} from "reactstrap";

import {BASE_URL} from './../utils/config';

import { useNavigate} from 'react-router-dom';

 const SearchBar = () => {

    const locationRef = useRef("");
    const nameRef = useRef("");
    const navigate = useNavigate();


     const searchHandler = async () => {
        
        const name = nameRef.current.value;
        const location = locationRef.current.value;

        if (name === "" & location === "") {
            return alert("field are required !");
        }

       const res = await fetch(`${BASE_URL}/hotels/search/getHotelBySearch?name=${name}&city=${location}`)

        if(!res.ok) alert('Something went wrong')

        const result = await res.json()
        navigate(`/search?name=${name}&city=${location}`, {state: result.data}
        );
        


    }; 

    return (
    <Col lg='12'>
        <div className='search__bar'>
            <Form className='d-flex align-items-center form-gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-search-line"></i></span>
                    <div>
                        <h6>Name</h6>
                        <input type='text' placeholder='What are you looking for?' ref={nameRef}/>
                    </div>
                </FormGroup>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-line"></i></span>
                    <div>
                        <h6>City</h6>
                        <input type='text' placeholder='Where?' ref={locationRef}/>
                    </div>
                </FormGroup>
                <span className='search__icon' type = 'submit' onClick={searchHandler} >
                <i class="ri-search-line"></i>
                
                </span>
            </Form>
        </div>

    </Col>
    );
 };

 export default SearchBar;