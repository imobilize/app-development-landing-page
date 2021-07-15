import React from "react";
import { Form, Input, Select } from "usetheform";

export default function WizardFormFirstPage(props) {

    return (
        <>
            <Form name="page1" {...props}>
                <label for="name">
                    First Name*
                </label>
                <Input type="text" required={true} name="first_Name" />
                <br />
                <label for="name">
                    Last Name*
                </label>
                <Input type="text" required={true} name="last_Name" />
                <br />
                <label for="company_Name">
                    What is your company name?
                </label>
                <Input type="text" name="company_Name" />
                <br />
                <label for="project_Details">
                    Tell us about your project
                </label>
                <Input type="text" name="project_Details" placeholder="Tell us about your project" />
                <br />
                <label for="phone">
                    Contact number
                </label>
                <Input type="tel" name="phone" placeholder="Phone*" />
                <br />
                <label for="email">
                    Email*
                </label>
                <Input type="email" required={true} name="email" placeholder="Email*" />
                <br />
                <label for="company_Size">How big is your company?* </label>
                <Select type="select" required={true} name="company_Size">
                    <option value="" disabled selected hidden>Please Select</option>
                    <option value="Individual">Individual</option>
                    <option value="1-10">1-10</option>
                    <option value="20-50">10-50</option>
                    <option value="100+">100+</option>
                </Select>
                <br />
                <Input type="radio" value="100" name="value" />








                <button type="submit">Next Page</button>
            </Form>
            <p>
                Need on NDA first? Email us at {<a href="mailto:kamalawan.ak@gmail.com?subject = NDA&body =Message">kamalawan.ak@gmail.com</a>}
            </p>
        </>
    );
}