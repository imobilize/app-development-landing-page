import React from "react";
import { Form, Input, TextArea } from "usetheform";
import think from "../images/think.png";
import Group from "../images/Group.png";
import "../styles/main.scss"


export default function WizardFormFirstPage(props) {

    return (
        <>
            <link href="http://fonts.cdnfonts.com/css/neue-haas-grotesk-text-pro" rel="stylesheet"></link>
            <div className="container">
                <div className="row">
                    <div class="col-lg-7 text-left col-sm-12 mt-5">
                        <div>
                            <h1 class="font-weight-bold mt-5 mb-5"> Get an Estimate on your project
                            </h1>
                            <h2 class="font-weight-bold pb-2">
                                Don't Worry We Can Help You!
                            </h2>
                            <p>We Create Mobile Apps and Mobile Responsive Websites So That You Can Reach Your Clients!</p>
                        </div>
                    </div>
                    <div class="col-md-5 d-none d-lg-block mt-5">
                        <div class="hero">
                            <img src={think} alt="" class="img-fluid img w-75 position-relative" />
                            <div class="child_1">
                                <img src={Group} alt="" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid  form-bg img-fluid">
                <div className="row text-center mt-5">
                    <h1>FORM</h1>
                </div>
                <section className="Form">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">
                                <Form name="page1" {...props}>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <Input type="text" class="form-control my-2 p-3 border" placeholder="Name" required={true} name="first_Name" aria-label="First name" />
                                        </div>
                                        <div class="col-lg-6">
                                            <Input type="email" class="form-control border my-2 p-3" placeholder="Email" required={true} name="email" aria-label="email" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Input type="text" class="form-control border my-2 p-3" placeholder="Subject" aria-label="Subject" name="Subject" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <TextArea name="project_Details" id="message" cols="7" rows="10" placeholder="Your Message" className="form-control border my-2 p-3" />
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center">
                                        <div className="col-lg-4">
                                            <button type="submit" className="btn1 my-4">Submit Form</button>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}