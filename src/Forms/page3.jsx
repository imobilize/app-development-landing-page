import React from 'react'
import { Form, Input, TextArea } from "usetheform";

import Header from "./header";

export default function Page3({ prevPage, ...props }) {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-sm-12">
                    <Form className="well form-horizontal mt-5 mx-3" name="page3" {...props}>
                        <div className="row">

                            <div className="col-sm-auto">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-auto mb-1 form-label">
                                        Have you raised any funding for your project? <span>*</span>
                                    </label>
                                    <div className="row">
                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" required className="btn-check" id="self" value="self" name="company_Funds" />
                                            <label className="btn btn-outline-primary" htmlFor="self">I am self funded</label>
                                        </div>
                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="existing-business" value="existing-business" name="company_Funds" />
                                            <label className="btn btn-outline-primary" htmlFor="existing-business" >Funding from an existing business</label>
                                        </div>
                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="seed-Angel" value="seed-Angel" name="company_Funds" />
                                            <label className="btn btn-outline-primary" htmlFor="seed-Angel">Seed/Angel funding</label>
                                        </div>
                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="venture-capital" value="venture-capital" name="company_Funds" />
                                            <label className="btn btn-outline-primary" htmlFor="venture-capital">Venture capital funding</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="row ">
                                <label className="control-label col-sm-4 mb-1 form-label">
                                    Within a budget of? <span>*</span>
                                </label>
                            </div>

                            <div className="col-sm-auto ">
                                <div className="row">
                                    <div className="col-sm-auto mb-2 ">
                                        <Input type="radio" className="btn-check" id="dk" value="Don't Know" name="budget" />
                                        <label className="btn btn-outline-primary" htmlFor="dk">Don't Know</label>
                                    </div>

                                    <div className="col-sm-auto mb-2 ">
                                        <Input type="radio" required className="btn-check" id="100-1000" value="100-1000" name="budget" />
                                        <label className="btn btn-outline-primary" htmlFor="100-1000" >$100-$1000</label>
                                    </div>

                                    <div className="col-sm-auto mb-2">
                                        <Input type="radio" className="btn-check" id="1000-5000" value="1000-5000" name="budget" />
                                        <label htmlFor="1000-5000" className="btn btn-outline-primary">$1000-$5000</label>
                                    </div>
                                    <div className="col-sm-auto mb-2">
                                        <Input type="radio" className="btn-check" id="5000-15000" value="5000-15000" name="budget" />
                                        <label className="btn btn-outline-primary" htmlFor="5000-15000">$5000-$15000</label>
                                    </div>
                                    <div className="col-sm-auto mb-2">
                                        <Input type="radio" className="btn-check" id="20k" value="20k+" name="value" />
                                        <label className="btn btn-outline-primary" htmlFor="20k">$20k+</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-auto">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        What time frame did you have in mind for your project?
                                    </label>
                                    <div className="row">


                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="1_month" value="1_month" name="time" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="1_month">1 Month</label>
                                        </div>

                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="3_months" value="3_months" name="time" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="3_months" >3 Months</label>
                                        </div>


                                        <div className="col-sm-auto mb-2">
                                            <Input type="radio" className="btn-check" id="6+_months" value="6+_months" name="time" />
                                            <label className="btn btn-outline-primary radio-space" htmlFor="6+_months">6+ Months</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-6 mb-1 form-label">
                                        Tell us about your project <span>*</span>
                                    </label>
                                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                                        <TextArea rows="3" cols="1" required={true} type="text" className="form-control" name="project_Details" />
                                    </div>
                                </div>
                            </div>
                        </div>





                        <div className="row">
                            <div className="col-sm-auto">
                                <div className="mt-3 mb-3">
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
