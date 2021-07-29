import React, { useState } from 'react'
import { Form, Input } from "usetheform";

export default function WizardFormSecondPage({ prevPage, ...props }) {
    let [hide, setHide] = useState(false);

    const operation = (e) => {
        setHide(true)
    }
    const hideoption = (e) => {
        setHide(false)
    }


    const showBoxes = () => {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                    <label htmlFor="IOS">IOS</label>
                <Input type="checkbox" name="IOS" />
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="Android">Android</label>
                <Input type="checkbox" name="Android" />
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="Kotlin">Kotlin</label>
                <Input type="checkbox" name="Kotlin" /> 
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="React Native">React Native</label>
                <Input type="checkbox" name="React Native" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    <label htmlFor="Flutter">Flutter</label>
                <Input type="checkbox" name="Flutter" />
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="React">React</label>
                <Input type="checkbox" name="React" />  
                    </div>
                    <div className="col-sm-3">
                    <label htmlFor="Angular">Angular</label>
                <Input type="checkbox" name="Angular" />  
                    </div>
                    <div className="col-sm-3">
                        
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-sm-3">

                    </div>
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-3">
                        
                    </div>
                </div> */}
                
                {/* <label htmlFor="React Native">React Native</label>
                <Input type="checkbox" name="React Native" />
                <br />
                <label htmlFor="Flutter">Flutter</label>
                <Input type="checkbox" name="Flutter" />
                <br />
                <label htmlFor="React">React</label>
                <Input type="checkbox" name="React" />
                <br />
                <label htmlFor="Angular">Angular</label>
                <Input type="checkbox" name="Angular" />
                <br />
                <label htmlFor="Vue">Vue</label>
                <Input type="checkbox" name="Vue" />
                <br />
                <label htmlFor="Ruby">Ruby</label>
                <Input type="checkbox" name="Ruby" />
                <br />
                <label htmlFor="Node">Node</label>
                <Input type="checkbox" name="Node" />
                <br />
                <label htmlFor="Java">Java</label>
                <Input type="checkbox" name="Java" />
                <br />
                <label htmlFor="PHP">PHP</label>
                <Input type="checkbox" name="PHP" />
                <br />
                <label htmlFor="Salesforce Development">Salesforce Development</label>
                <Input type="checkbox" name="Salesforce Development" />
                <br />
                <label htmlFor="Quality Assurance">Quality Assurance</label>
                <Input type="checkbox" name="Quality Assurance" />
                <br />
                <label htmlFor="Devops">Devops</label>
                <Input type="checkbox" name="Devops" />
                <br />
                <label htmlFor="Other">Other</label>
                <Input type="checkbox" name="Other" />
                <br /> */}
            </div>
        )
    }


    return (
        <div className="container bg-light">
            <div class="row pt-5">
                <div className="col-lg-12">
                <Form className="" name="page2" {...props}> 
            <h1 className="text-center mt-3 mb-5">Tell us more about your business needs</h1>

            <h2 className="text-left p-3">What are the main challenges you’re facing right now?– Required field</h2>
            {/* <hr className="hr-height"/> */}
            <ul>
                <li>
                    <div className="d-inline-block d-flex">
                    <label htmlFor="validate_product" className="pr-5">Validating my product idea</label>
                        <div className="checkbox-padding">
                        <Input type="checkbox" className="form-check-input" name="validate_product" />
                        </div>
                    </div>
                    
                </li>
                
                <br />
                <label htmlFor="MVP">Creating an MVP</label>
                <Input type="checkbox" className="form-check-input" name="MVP" />
                <br />
                <label htmlFor="Scale">Scale an existing product</label>
                <Input type="checkbox" className="form-check-input" name="Scale" />
                <br />
                <label htmlFor="more_sales">Driving more sales</label>
                <Input type="checkbox" className="form-check-input" name="more_sales" />
                <br />
                <label htmlFor="Cutting_costs">Cutting costs</label>
                <Input type="checkbox" className="form-check-input" name="Cutting_costs" />

                <br />
            </ul>
            <h4 > Want to use Specific technologies ?</h4 >
            <label htmlFor="technologies">Yes</label>
            <Input type="radio" name="technologies" value="yes" onChange={(e) => operation(e)} />
            <br />
            {
                hide
                    ?
                    showBoxes()
                    :
                    null
            }
            <br />

            <label htmlFor="technologies">No</label>
            <Input type="radio" name="technologies" value="No" onChange={(e) => hideoption(e)} checked="checked" />
            <br />
            <button type="button" onClick={prevPage}>
                Previous Page
            </button>
            <button type="submit">Submit</button>
            </Form >
                </div>
            </div>
        </div>
    );
}

