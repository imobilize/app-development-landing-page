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
                        <div className="row">
                            <div className="col-sm-6">
                                <div class="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label" >
                                        First Name <span>*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" required={true} name="first_Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Last Name <span>*</span>
                                    </label>
                                    <div class="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" required={true} name="last_Name" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div class="form-group mb-3">
                                    <label for="email" className="control-label col-sm-12 mb-1 form-label">
                                        Email <span className="">*</span>
                                    </label>
                                    <div class="col-sm-12 mb-1">
                                        <Input type="email" className="form-control" required={true} name="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div class="form-group mb-3">
                                    <label for="phone" className="control-label col-sm-12 mb-1 form-label">
                                        Contact number
                                    </label>
                                    <div class="col-sm-12 mb-1">
                                        <Input type="tel" className="form-control" name="phone" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div class="form-group mb-3">
                                    <label for="company_Name" className="control-label col-sm-12 mb-1 form-label">
                                        What is your company name?
                                    </label>
                                    <div class="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" name="company_Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label for="company_Size" className="control-label col-sm-12 mb-1 form-label">
                                        How big is your company? <span>*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Select type="select" className="form-control" required={true} name="company_Size">
                                            <option value="" disabled selected hidden>Please Select</option>
                                            <option value="Individual">Individual</option>
                                            <option value="1-10">1-10 Employees</option>
                                            <option value="20-50">10-50 Employees</option>
                                            <option value="100+">100+ Employees</option>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <label for="project_Details" className="control-label col-sm-6 mb-1 form-label">
                                Tell us about your project <span>*</span>
                            </label>
                            <div class="col-sm-12 col-md-12 col-lg-6 ">
                                <TextArea rows="3" cols="1" required={true} type="text" className="form-control" name="project_Details" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="row">
                                <label className="control-label col-sm-4 mb-1 form-label">
                                    Within a budget of?
                                </label>
                            </div>

                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col pl-2 py-1">
                                        <Input type="radio" className="btn-check" id="dk" value="Don't Know" name="value" />
                                        <label className="btn btn-outline-primary" for="dk">Don't Know</label>
                                    </div>

                                    <div className="col p-1">
                                        <Input type="radio" className="btn-check" id="100-1000" value="100-1000" name="value" />
                                        <label className="btn btn-outline-primary" for="100-1000" >$100-$1000</label>
                                    </div>

                                    <div className="col  p-1">
                                        <Input type="radio" className="btn-check" id="1000-5000" value="1000-5000" name="value" />
                                        <label className="p-3" for="1000-5000" className="btn btn-outline-primary">$1000-$5000</label>
                                    </div>
                                    <div className="col p-1">
                                        <Input type="radio" className="btn-check" id="5000-15000" value="5000-15000" name="value" />
                                        <label className="btn btn-outline-primary" for="5000-15000">$5000-$15000</label>
                                    </div>
                                    <div className="col  p-1">
                                        <Input type="radio" className="btn-check" id="20k" value="20k+" name="value" />
                                        <label className="btn btn-outline-primary" for="20k">$20k+</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <p className="p-3">
                                Need on NDA first? Email us at {<a href="mailto:kamalawan.ak@gmail.com?subject = NDA&body =Message">kamalawan.ak@gmail.com</a>}
                            </p>
                        </div>

                        <div className="row">
                            <div className="col p-3">
                                <button type="submit" class="btn btn-primary">Next Page</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}