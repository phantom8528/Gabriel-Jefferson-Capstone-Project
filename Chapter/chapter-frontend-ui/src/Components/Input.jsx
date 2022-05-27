import React from "react";
import './Input.css'

class Input extends React.Component{
    render(){
        return(
            <div>
                {/* <h1>Component: Input | ParentComponent(s): LandingPage</h1> */}
                <div className="input-container">
                    <div id="input-container-inner-label-logo">
                        <div id="inner-label">
                            Write a Page
                        </div>
                        {/* <div id="inner-logo">
                            <img id="input-pen-logo" src="https://www.kindpng.com/picc/m/298-2985419_pen-icon-white-on-tansparent-svg-clip-arts.png" alt="" />
                        </div> */}
                    </div>


                    <div className="input-form-container">
                        {/* FIRST INPUT  */}
                        <div className="mind-body-option-btn-container">
                            <a href=""><img id="mind-btn-option" src="https://as1.ftcdn.net/v2/jpg/02/23/07/10/1000_F_223071023_CUJJwMYNO5sqS9AmRT8s7khlYDhkQhLT.jpg" alt="" /></a>
                            <a href=""><img id="body-btn-option" src="https://icon-library.com/images/body-icon/body-icon-22.jpg" alt="" /></a>
                        </div>

                        {/* SECOND INPUT */}
                        <div className="input-range-container">
                            <div id="input-range-label">Feeling Like a: </div>
                            <div className="input-range-radio-button-containers">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">2</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">3</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">4</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">6</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">7</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">8</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">9</label>
                                </div>


                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2">10</label>
                                </div>

                            </div>
                        </div>

                        {/* THIRD INPUT */}
                        <div className="input-details-container">
                            <div className="details-container-text">
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Details</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Explain how you feel ..."></textarea>
                                </div>
                            </div>
                        </div>

                        {/* FOURTH INPUT */}
                        <div className="input-pin-number-container">
                            <input type="text" placeholder="Pin #" />
                        </div>

                        {/* BUTTONS */}
                        <div className="input-buttons-container">
                            <button id="write-button" type="button" class="btn btn-primary">Write</button>
                            <button id="clear-button"  type="button" class="btn btn-secondary">Clear</button>
                        </div>
                        


                    </div>

                </div>


            </div>
        )
    }
}

export default Input;
