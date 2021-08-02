import React, { useState } from 'react'
import { Form, Input, TextArea } from "usetheform";
import "../styles/main.scss"


export default function WizardFormSecondPage({ prevPage, ...props }) {
    let [hide, setHide] = useState(false);
    let [otherHide, setOtherHide] = useState(false);
    const operation = (e) => {
        setHide(true)
    }
    const hideoption = (e) => {
        setHide(false)
    }

    const showHide = (e) => {
        let checkBox = document.getElementById("other");
        if (checkBox.checked === true) {
            setOtherHide(true)
        }
        else {
            setOtherHide(false)
        }
    }


    const showOther = () => {
        return (

            <div className="row">
                <div className="col-md-6">
                    <TextArea rows="3" cols="2" type="text" className="form-control" name="other_technologies" />
                </div>
            </div>
        )
    }

    const showBoxes = () => {
        return (
            <div className="container">
                <ul>
                    <div className="row">
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="IOS" />
                                    <div className="checkbox-padding">
                                        <label>IOS</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Android" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Android">Android</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="React Native" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="React Native">React Native</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Kotlin" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Kotlin">Kotlin</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>

                <ul>
                    <div className="row">
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Vue" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Vue">Vue</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Angular" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Angular">Angular</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="React" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="React">React</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Flutter" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Flutter">Flutter</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>

                <ul>
                    <div className="row">
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Ruby" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Ruby">Ruby</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Node" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Node">Node</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Java" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Java">Java</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" className="form-check-input" name="PHP" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="PHP">PHP</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </ul>

                {/* <ul>
                    <div className="row">
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Salesforce Development" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Salesforce Development">Salesforce Development</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Devops" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Devops">Devops</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Quality Assurance" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Quality Assurance">Quality Assurance</label>
                                    </div>
                                </div>
                            </li>
                        </div>
                <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Other" />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Other">Other</label>
                                    </div>
                                </div>
                            </li>
                        </div>
            </div>
                </ul > */}

                <ul ul >
                    <div className="row">

                        <div className="col-sm-3">
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" id="other" name="Other" onClick={showHide} />
                                    <div className="checkbox-padding">
                                        <label htmlFor="Other">Other</label>
                                    </div>
                                </div>
                            </li>


                        </div>
                        <div className="col-sm-12 mt-3">
                            <li>
                                {
                                    otherHide
                                        ?
                                        showOther()
                                        :
                                        null
                                }
                            </li>
                        </div>

                    </div>
                </ul >
            </div >
        )
    }


    return (
        <div className="container bg-light">
            <div class="row pt-3">
                <div className="col-lg-12">
                    <Form className="well form-horizontal p-5" name="page3" {...props}>
                        <h1 className="text-center mt-3 mb-5"> Want to use Specific technologies?</h1>
                        {/* <h4 className="text-left p-3">What are the main challenges you’re facing right now?</h4> */}
                        {/* <hr className="hr-height"/> */}
                        {/* <ul>
                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Cutting_costs" />
                                    <div className="checkbox-padding">
                                        <label>Cutting costs</label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="MVP" />
                                    <div className="checkbox-padding">
                                        <label>Creating an MVP</label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="more_sales" />
                                    <div className="checkbox-padding">
                                        <label>Driving more sales</label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="Scale" />
                                    <div className="checkbox-padding">
                                        <label>Scale an existing product</label>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="d-inline-block d-flex">
                                    <Input type="checkbox" className="form-check-input" name="validate_product" />
                                    <div className="checkbox-padding">
                                        <label className="pr-5">Validating my product idea</label>
                                    </div>
                                </div>
                            </li>
                        </ul> */}

                        {/* <h4 > Want to use Specific technologies ?</h4 > */}

                        <div className="row">
                            <div className="col-sm-1 p-3">
                                <Input type="radio" id="yes" className="btn-check" name="technologies" value="yes" onChange={(e) => operation(e)} />
                                <label className="btn btn-outline-primary" for="yes">Yes</label>
                            </div>

                            <div className="col-sm-1 p-3">
                                <Input type="radio" id="no" className="btn-check" name="technologies" value="No" onChange={(e) => hideoption(e)} checked="checked" />
                                <label className="btn btn-outline-primary" for="no">No</label>
                            </div>
                        </div>

                        {
                            hide
                                ?
                                showBoxes()
                                :
                                null
                        }
                        <div className="row">
                            <div className="col py-3 pl-2">
                                <button type="button" className="btn btn-outline-primary" onClick={prevPage}>
                                    Previous Page
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col py-3 pl-2">
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </div>
                        </div>

                    </Form >
                </div>
            </div>
        </div>
    );
}

