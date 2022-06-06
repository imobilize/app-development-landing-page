import React from "react";
import { Form, Input, TextArea } from "usetheform";
import Header from "./header";
import "../styles/main.scss"


export default function WizardFormFirstPage(props) {

    return (
        <>
        <link href="http://fonts.cdnfonts.com/css/neue-haas-grotesk-text-pro" rel="stylesheet"></link>
            <div className="container">
                <Header />
                <div className="row mb-3">
                    <div className="row mt-5 text-center">
                        <h2 className="font-weight-bold">Project Pricing Enquiry</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div class="col-md-7 mt-5">
                <div>
                    <h1 class="font-weight-bold mt-5 mb-2"> That’s Why We So You Need To Talk About Your Business Online?
                    </h1>
                    <h2 class="font-weight-bold pb-2 pt-2">
                        Don't Worry We Can Help You!
                    </h2>
                </div>
                <div class="div-desktop pb-5 mt-5">
                    <div class="button_cont"><a class="example_f px-4 py-4" href="/enquiry-form" target="_blank" rel="nofollow"><span>Estimate the cost of my project</span></a></div>        
            </div>
            </div>
                <div class="col-md-5 mt-5">
                    <div class="hero">
                    {/* <img src="images/think.png" alt="" class="img-fluid w-75 position-relative" />
                    <div class="child_1">
                        <img src="images/Group.png" alt="" class="img-fluid" />
                    </div> */}
                    {/* <!-- <div class="child_2"><img src="images/Vector3.png" alt="" class="img-fluid"></div>
                    <div class="child_3"><img src="images/Vector4.png" alt="" class=""></div> --> */}
                </div>
                </div>
                </div>
            </div>
            <section className="">
            <div className="container-fluid  form-bg img-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <Form className="p-5" name="page1" {...props}>
                        <div className="row">
                        <div className="d-flex justify-content-center">

                            <div className="col-md-4 col-sm-12">
                                <div className="form-group mb-3">
                                    <label className=" col-sm-12 mb-1 form-label" >
                                        First Name <span>*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="text" className="input-button" required={true} name="first_Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2"></div>
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Last Name <span>*</span>
                                    </label>
                                        <Input type="text" className="input-button" required={true} name="last_Name" />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="d-flex justify-content-center">
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Email <span className="">*</span>
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="email" className="input-button" required={true} name="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2"></div>
                            <div className="col-md-4 col-sm-12">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-12 mb-1 form-label">
                                        Contact number
                                    </label>
                                    <div className="col-sm-12 mb-1">
                                        <Input type="tel" className="input-button" name="phone" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-center">
                            <div className="col-md-8 col-sm-12">
                                <div className="form-group mb-3">
                                    <label className="control-label col-sm-6 mb-1 form-label">
                                        Tell us about your project <span>*</span>
                                    </label>
                                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                                        <TextArea rows="3" cols="1" required={true} type="text" className="input-button" name="project_Details" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-flex justify-content-center"> 
                                <div className="col-md-12">
                                    <p className="text-center">
                                        Need on NDA first? Email us at {<a href="mailto:jarrar@imobilize.co.uk?subject=NDA&body=Message">jarrar@imobilize.co.uk</a>}
                                    </p>
                                    <div className="d-flex justify-content-center">
                                    <button type="submit" className="btn btn-outline-success">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </Form>
                </div>
            </div>
            </div>
            </section>
        </>
    );
}