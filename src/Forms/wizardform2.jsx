import React, { useState } from 'react'
import { Form, Input, TextArea } from "usetheform";
import "../styles/main.scss"


export default function WizardFormSecondPage({ prevPage, ...props }) {
    let [otherHide, setOtherHide] = useState(false);

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


    return (
        <div className="container bg-light">
            <div class="row pt-3">
                <div className="col-lg-12">
                    <Form className="well form-horizontal p-5" name="page3" {...props}>
                        <h1 className="text-center mt-3 mb-5"> Want to use Specific technologies?</h1>

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

                        <div className="row">
                            <div className="col-sm-3 pl-2 py-3">
                                <Input type="checkbox" id="no" className="btn-check" name="technologies" id="no" autocomplete="off" />
                                <label className="btn btn-outline-primary" for="no">Let Us Decide</label>
                            </div>
                        </div>
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

