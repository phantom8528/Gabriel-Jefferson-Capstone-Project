import React from "react";
import { useState, useEffect } from "react";
// import EditTodos from "./EditTodos";
import PageExpanded from "./PageExpanded";
import './ListPages.css';

const ListPages = ({allPages}) => {
    console.log("--TESTING - ALLPAGES in ListPages.jsx---");
    console.log(allPages.length);
    const [pages, setPages] = useState([]); //<-- given a default value of an empty array
    /**
     * NOTE: the empty array above will eventually be filled 
     * with the todos from out database
     */

    /**
     * NOTE: we no longer need a get function 
     * or a useEffect method because the dashboard profile 
     * is already making a request to to the server for all 
     * of the user's data
     */

    // const _getTodos = async (e) => {
    //     try {
    //         const response = await fetch(" http://127.0.0.1:9000/dashboard/pages");
    //         //next, we need to get some data back
    //         const jsonData = await response.json(); //<-- we need to parse it first b/c we're getting json data
    //         setTodos(jsonData);

    //         // console.log(jsonData);
  
    //     } catch (err) {
    //         console.error(err.message);
            
    //     }
    // }

    /**
     * NOTE: useEffect - makes a request to our restful api
     * everytime that the page is rendered.
     */

    useEffect(() => {
        // _getTodos();
        setPages(allPages);
        
    }, [allPages]); //<-- IMPORTANT!!! - the empty array ensures that only one request is made 
    //NOTE: useEffect keeps track of the arguments that you put inside of the empty array


    // console.log(todos);
    //test-7-number

    //Function for managing items in list
    const pageManager = (data) => {
        let pageItem = data.map(item => (
            <div className="page-item-block">
            <p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#test-${item.page_id}-number`} aria-expanded="false" aria-controls={`test-${item.page_id}-number`}>
                {item.scale} | {item.location} | {item.time_stamp}
            </button>
            </p>
            <div class="collapse" id={`test-${item.page_id}-number`}>
                <div class="card card-body">
                    {/* Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. */}
                    {item.description}
                </div>
            </div>
        </div>
        ));
        return pageItem;
    }

    //Function for managing items in list
    const pageManager2 = (data) => {
        let pageItem2 = data.map(item => (
            <tr>
                {/* <th scope="row">{page.page_id}</th> */}
                <td>{item.scale}</td>
                <td>{item.location}</td>
                <td>{item.time_stamp}</td>
                <td><PageExpanded allPages={allPages} /></td>
            </tr>
        ))
        return pageItem2;
    }

    const pageManager3 = (data) => {
        let pageItem3 = data.map(item => (
            <div>
            <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#test-${item.page_id}-number`} aria-expanded="false" aria-controls={`test-${item.page_id}-number`}>
                    {item.scale} | {item.location} | {item.time_stamp}
                </button>
            </p>
            <div class="collapse" id={`test-${item.page_id}-number`}>
                <div class="card card-body">
                    {/* Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger. */}
                    {item.description}
                </div>
            </div>

            </div>
        ));
        return pageItem3;
    }

    const modalManager = (data) => {
        let pageItem5 = data.map((item) => {
            return <div id={`page-${item.page_id}-item`}>
                <div className="detail-card-layer-1">
                    <div id="detail-card-layer-2">
                        {/* This is where the data will go */}
                        {item.scale} 
                        {item.location}
                        {item.description}
                    </div>
                </div>  
            </div>
        });
        return pageItem5; 
    }



    return(
        <div>
            <h1>Pages</h1>

            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy-example" tabIndex="0">
                {pageManager3(pages)}
            </div>

            <div className="pages-expanded-view">
            {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                See Expanded List
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Expanded View</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" >
                            {/* Expanded view of each card */}
                            <div data-bs-spy="scroll" data-bs-target={`#page-${pages.page_id}-item`} data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example-2" tabIndex="0">
                                {modalManager(pages)}
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button></div>
                        </div>
                    </div>
                </div>
            </div>



            {/* 
            For Reference Purposes
            ---------------------------
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                ::::::::;;;;::::::::::::::::::::::::::::::::::::::
            */}


            {/* 

            ::::::::::::::::::::::::::::::::::::::::::::::::::::::
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Scale</th>
                        <th scope="col">Location</th>
                        <th scope="col">Date</th>
                        <th scope="col">Expand Button</th>
                    </tr>
                </thead>
                <tbody>
                    {pageManager(pages)}
                </tbody>
            </table>



            
            
            
            
            
            */}

        </div>
    )
}
export default ListPages;