import React from "react";
import { Form, Input, Select, TextArea } from "usetheform";
import "../styles/main.scss"


export default function WizardFormFirstPage(props) {

    return (
        <div className="container">
            <div class="row mb-3">
                <div className="col-md-12">
                    <h2>iMobilize</h2>
                </div>
            </div>
            <div class="row">
                <div className="col-sm-12">
                    <Form className="well form-horizontal p-5" name="page1" {...props}>

                        <div class="form-group mb-3">
                            <label className="control-label col-sm-2 mb-1 form-label" >
                                First Name <span>*</span>
                            </label>
                            <div className="col-sm-3">
                                <Input type="text" className="form-control" required={true} name="first_Name" />
                            </div>
                        </div>
                        {/* <Input type="file" class="form-control-file" name="file" id="exampleFormControlFile1" /> */}

                        <div class="form-group mb-3">
                            <label className="control-label col-sm-2 mb-1 form-label" for="last_Name" >
                                Last Name <span>*</span>
                            </label>
                            <div class="col-sm-3">
                                <Input type="text" className="form-control" required={true} name="last_Name" />
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="company_Name" className="control-label col-sm-4 mb-1 form-label">
                                What is your company name?
                            </label>
                            <div class="col-sm-3 mb-1">
                                <Input type="text" className="form-control" name="company_Name" />
                            </div>

                        </div>
                        <div class="form-group mb-3">
                            <label for="project_Details" className="control-label col-sm-4 mb-1 form-label">
                                Tell us about your project <span>*</span>
                            </label>
                            <div class="col-sm-6 ">
                                <TextArea rows="3" cols="1" required={true} type="text" className="form-control" name="project_Details" />
                            </div>
                        </div>
                        <div class="form-group mb-3" className="control-label col-sm-4 mb-1 form-label">
                            <label for="phone">
                                Contact number
                            </label>
                            <div class="col-sm-8">
                                <Input type="tel" className="form-control" name="phone" />
                            </div>

                        </div>
                        <div className="form-group">
                            <label for="value">Within a budget of </label>
                            <div className="col-sm-8">
                            <label className="p-3">
                            Don't Know
                            <Input type="radio" className="form-control" value="Don't Know" name="value" />
                        </label>

                        <label className="p-3">
                            100-1000
                            <Input type="radio" className="form-control" value="100-1000" name="value" />
                        </label>

                        <label className="p-3">
                            1000-5000
                            <Input type="radio" className="form-control" value="1000-5000" name="value" />
                        </label>

                        <label className="p-3">
                            5000-15000
                            <Input type="radio" className="form-control" value="5000-15000" name="value" />
                        </label>

                        <Input className="btn-check" type="radio" value="20k+" name="value" />
                        <label className="btn btn-outline-primary">
                            20k+
                        </label>


                            </div>

                        </div>
                        <label for="email">
                            Email*
                        </label>
                        <Input type="email" className="form-control" required={true} name="email" />

                        <label for="company_Size">
                            How big is your company?*
                        </label>
                        <div className="col-sm-8">
                            <Select type="select" className="form-control" required={true} name="company_Size">
                                <option value="" disabled selected hidden>Please Select</option>
                                <option value="Individual">Individual</option>
                                <option value="1-10">1-10</option>
                                <option value="20-50">10-50</option>
                                <option value="100+">100+</option>
                            </Select>

                        </div>

                        <label>
                            Don't Know
                            <Input type="radio" className="form-control" value="Don't Know" name="value" />
                        </label>

                        <label>
                            100-1000
                            <Input type="radio" className="form-control" value="100-1000" name="value" />
                        </label>

                        <label>
                            1000-5000
                            <Input type="radio" className="form-control" value="1000-5000" name="value" />
                        </label>

                        <label>
                            5000-15000
                            <Input type="radio" className="form-control" value="5000-15000" name="value" />
                        </label>

                        <label>
                            20k+
                            <Input type="radio" className="form-control" value="20k+" name="value" />
                        </label>

                        <button type="submit" class="btn btn-primary">Next Page</button>
                    </Form>
                </div>
            </div>


            <p>
                Need on NDA first? Email us at {<a href="mailto:kamalawan.ak@gmail.com?subject = NDA&body =Message">kamalawan.ak@gmail.com</a>}
            </p>
        </div>

    );
}