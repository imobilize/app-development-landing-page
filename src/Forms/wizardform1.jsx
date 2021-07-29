import React from "react";
import { Form, Input, Select } from "usetheform";

export default function WizardFormFirstPage(props) {

    return (
        <div className="container">
            <h2>iMobilize</h2>

            <Form className="well form-horizontal p-5" name="page1" {...props}>

                <div class="form-group">
                    <label className="control-label col-sm-2" for="first_Name" >
                        First Name*
                    </label>
                    <div className="col-sm-8">
                        <Input type="text" className="form-control" required={true} name="first_Name" />
                    </div>
                </div>
                {/* <Input type="file" class="form-control-file" name="file" id="exampleFormControlFile1" /> */}

                <div class="form-group">
                    <label className="control-label col-sm-2" for="last_Name" >
                        Last Name*
                    </label>
                    <div class="col-sm-8">
                        <Input type="text" className="form-control" required={true} name="last_Name" />
                    </div>
                </div>

                <div class="form-group">

                    <div class="col-sm-8">


                    </div>

                </div>


                <label for="company_Name">
                    What is your company name?
                </label>
                <Input type="text" className="form-control" name="company_Name" />

                <label for="project_Details">
                    Tell us about your project
                </label>
                <Input type="text" className="form-control" name="project_Details" />

                <label for="phone">
                    Contact number
                </label>
                <Input type="tel" className="form-control" name="phone" />

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


                <label for="value">Within a budget of </label>

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
            <p>
                Need on NDA first? Email us at {<a href="mailto:kamalawan.ak@gmail.com?subject = NDA&body =Message">kamalawan.ak@gmail.com</a>}
            </p>
        </div>

    );
}