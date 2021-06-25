import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import maskicon from '../../../src/assets/images/mask_icon.svg';
import arrow from '../../assets/images/arrow.svg';
import melodyicon from '../../../src/assets/images/melody_icon.svg';
import linkicon from '../../../src/assets/images/link_icon.svg';
import startscreen from '../../assets/images/start_screen.png';
const BrandedGol = () =>{
    return(
        <fieldset>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-7">
                        <div className="branded-gol row">
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                <NavLink to="/add-filter">
                                    <div className="col-md-3 gol-image">
                                        <img src={maskicon} />
                                    </div>
                                    <div className="col-md-7 gol-content pd-right0">
                                        <div className="branded-gol-content">
                                            <h3>Add Filters</h3>
                                            <p>Choose filters/effects from gallery</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 arrow-left">
                                        <img src={arrow} />        
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                <NavLink to="/add-sound">
                                    <div className="col-md-3 gol-image">
                                        <img src={melodyicon} />
                                    </div>
                                    <div className="col-md-7 gol-content pd-right0">
                                        <div className="branded-gol-content">
                                            <h3>Add Sound</h3>
                                            <p>Choose sounds/tunes from gallery or upload</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 arrow-left">
                                        <img src={arrow} />        
                                    </div>
                                </NavLink>    
                            </div>
                            <div className="col-md-12 branded-gol-block pd-right0 pd-left0">
                                <NavLink to="/add-filter">
                                    <div className="col-md-3 gol-image">
                                        <img src={linkicon} />
                                    </div>
                                    <div className="col-md-9 gol-content pd-right0">
                                        <div className="branded-gol-content">
                                            <h3>Add Brand URL</h3>
                                            <p>Input your URL</p>
                                        </div>
                                    </div>
                                </NavLink>    
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={startscreen} />
                    </div>
                </div>    
            </div>
            <div className="col-md-7">   
                <input type="button" name="next-step" className="next-step btn btn-gradient" value="Save and Continue" ></input>
            </div>
        </fieldset>
    )
}
export default BrandedGol;