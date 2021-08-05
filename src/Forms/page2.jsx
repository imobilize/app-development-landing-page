import React from 'react'
import { Form, Input } from "usetheform";

import Header from "./header";

export default function Page2({ prevPage, ...props }) {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-sm-12">
                    <Form className="well form-horizontal mt-5 mx-3" name="page2" {...props}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        What is your company name?
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="text" className="form-control" name="company_Name" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-auto">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        How big is your company? <span>*</span>
                                    </label>
                                    <div className="row">
                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" required className="btn-check" id="Individual" value="Individual" name="company_Size" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="Individual">Individual</label>
                                        </div>

                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="1-10" value="1-10" name="company_Size" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="1-10" >1-10 Employees</label>
                                        </div>


                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="10-50" value="10-50" name="company_Size" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="10-50">10-50 Employees</label>
                                        </div>

                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="100+" value="100+" name="company_Size" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="100+">100+ Employees</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="pt-5">
                                    <button type="button" className="btn btn-outline-dark btn-light btn-space" onClick={prevPage}>
                                        Previous Page
                                    </button>

                                    <button type="submit" className="btn btn-outline-success btn-light">
                                        Next Page
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

        </div >
    )
}
