import React from "react";
import { Form, Input, Select } from "usetheform";
import Header from "./header";
import "../styles/main.scss"


export default function WizardFormFirstPage(props) {

    return (
        <div className="container">
            <Header />
            <div className="row mb-3">
                <div className="row mt-5 text-center">
                    <h2>Project Pricing Enquiry</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Form className="well form-horizontal p-5" name="page1" {...props}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label" >
                                        First Name <span>*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" required={true} name="first_Name" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Last Name <span>*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" required={true} name="last_Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Email <span className="">*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="email" className="form-control" required={true} name="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Contact number
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="tel" className="form-control" name="phone" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row">
                            <p className="py-3 pl-2">
                                Need on NDA first? Email us at {<a href="mailto:jarrar@imobilize.co.uk?subject=NDA&body=Message">jarrar@imobilize.co.uk</a>}
                            </p>
                        </div>
                        <div className="row">
                            <div className="col ">
                                <button type="submit" className="btn btn-outline-success">Next Page</button>
                            </div>
                        </div>
                        
                    </Form>
                </div>
            </div>
        </div>
    );
}