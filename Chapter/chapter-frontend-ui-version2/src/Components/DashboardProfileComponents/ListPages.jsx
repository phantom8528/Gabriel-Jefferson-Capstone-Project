import React from "react";
import { useState, useEffect } from "react";
// import EditTodos from "./EditTodos";
import PageExpanded from "./PageExpanded";
import './ListPages.css';

const ListPages = ({allPages}) => {
    console.log("--TESTING - ALLPAGES in ListPages.jsx---");
    console.log("LENGTH TEST", allPages.length);
    const [pages, setPages] = useState([]); //<-- given a default value of an empty array
    /**
     * NOTE: the empty array above will eventually be filled 
     * with the todos from out database
     */



    /**
     * NOTE: useEffect - makes a request to our restful api
     * everytime that the page is rendered.
     */

    useEffect(() => {
        // _getTodos();
        setPages(allPages);
        
    }, [allPages]); //<-- IMPORTANT!!! - the empty array ensures that only one request is made 
    //NOTE: useEffect keeps track of the arguments that you put inside of the empty array



    //Function for converting ISO time into mm/dd/yyyy format
    const timeManager = (data) => {
        let dateTime = data.time_stamp;
        let dt = new Date(dateTime);
        let dd = dt.getDate();
        let mm = dt.getMonth() + 1;
        let yyyy = dt.getFullYear();
        
        if (dd<10) {
            dd = '0' + dd;
        }
        if (mm<10) {
            mm = '0' + mm;
        }

        return mm + '/' + dd + '/' + yyyy;
    }




    const scaleManager1 = (data) => {

        if (data.scale === "1" || data.scale === "2" || data.scale === "3"){
            return "card-body-layer-1"

        }

        if (data.scale === "4" || data.scale === "5" || data.scale === "6"){
            return "card-body-layer-1-alt-2";
        }

        if (data.scale === "7" || data.scale === "8" || data.scale === "9" || data.scale === "10"){
            return "card-body-layer-1-alt-3"
        }

    }

    const scaleManager2 = (data) => {

        if (data.scale === "1" || data.scale === "2" || data.scale === "3"){
            return "card-body-layer-2"

        }

        if (data.scale === "4" || data.scale === "5" || data.scale === "6"){
            return "card-body-layer-2-alt-2";
        }

        if (data.scale === "7" || data.scale === "8" || data.scale === "9" || data.scale === "10"){
            return "card-body-layer-2-alt-3"
        }

    }

    const buttonManager = (data) => {
        if (data.scale === "1" || data.scale === "2" || data.scale === "3"){
            return "button-background-1"

        }

        if (data.scale === "4" || data.scale === "5" || data.scale === "6"){
            return "button-background-2"
        }

        if (data.scale === "7" || data.scale === "8" || data.scale === "9" || data.scale === "10"){
            return "button-background-3"
        }
    }

    const detailCardManager1 = (data) => {
        if (data.scale === "1" || data.scale === "2" || data.scale === "3"){
            return "detail-card-layer-1-alt-1"

        }

        if (data.scale === "4" || data.scale === "5" || data.scale === "6"){
            return "detail-card-layer-1-alt-2";
        }

        if (data.scale === "7" || data.scale === "8" || data.scale === "9" || data.scale === "10"){
            return "detail-card-layer-1-alt-3"
        }

    }

    const detailCardManager2 = (data) => {
        if (data.scale === "1" || data.scale === "2" || data.scale === "3"){
            return "detail-card-layer-2-alt-1"
        }

        if (data.scale === "4" || data.scale === "5" || data.scale === "6"){
            return "detail-card-layer-2-alt-2";
        }

        if (data.scale === "7" || data.scale === "8" || data.scale === "9" || data.scale === "10"){
            return "detail-card-layer-2-alt-3"
        }




    }

    const pageManager3 = (data) => {
        let pageItem3 = data.map(item => {
            return <div className="page-item">
            <p>
                <button id={buttonManager(item)}  class="btn" type="button" data-bs-toggle="collapse" data-bs-target={`#test-${item.page_id}-number`} aria-expanded="false" aria-controls={`test-${item.page_id}-number`}>
                    {timeManager(item)} | Feeling Like a {item.scale} 
                </button>
            </p>
            <div class="collapse" id={`test-${item.page_id}-number`}>
                <div class="card card-body" id={scaleManager1(item)}>
                    <div id={scaleManager2(item)}>
                    {/* {item.description} */}
                    <div className="scroll-item-box">

                            <div id="modal-location-item">
                                Where: {item.location}
                            </div>
                            <div id="modal-description-item">
                                Description: {item.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>




        });

        console.log("TESTING TIME MANAGER", timeManager(data));


        return pageItem3;

    }

    const modalManager = (data) => {
        let pageItem5 = data.map((item) => {
            return <div id={`page-${item.page_id}-item`}>
            <div id={detailCardManager1(item)}>
                <div id={detailCardManager2(item)}>
                    {/* This is where the data will go */}
                    <div className="modal-item-box">
                    <div id="modal-scale-item">
                            Date: {timeManager(item)}
                        </div>
                        <div id="modal-scale-item">
                            Feels Like a: {item.scale}
                        </div>
                        <div id="modal-location-item">
                            Where: {item.location}
                        </div>
                        <div id="modal-description-item">
                            Description: {item.description}
                        </div>
                    </div>

                </div>
            </div>  
        </div>

 
        });


        // console.log(data.length);

        // if(timeManager(item.time_stamp) === '12/31/1969'){
        //     // return "No Pages Yet"
        //     return <h4 id="no-pages-yet" >No Pages Yet</h4>
        // }
        // else {

        //     return pageItem5;
        // }
        return pageItem5; 
    }





    return(
        <div>

            <div id="page-box-layer-1">
                <div id="page-box-layer-2">
                    <h1></h1>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabIndex="0">
                        {
                        
                        // timeManager(pages),
                        pageManager3(pages)}
                    </div>
                </div>

                {/* <!-- Button trigger modal --> */}
                <button id="see-expanded-btn"  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    See Expanded View
                </button>
                
            </div>

            <div className="pages-expanded-view">


                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">How You've been doing</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            {/* Expanded view of each card */}
                            <div data-bs-spy="scroll" data-bs-target={`#page-${pages.page_id}-item`} data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                                {
                                
                                
                                // timeManager(pages),
                                modalManager(pages)
         
                                }
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListPages;