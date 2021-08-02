import React, { useState } from 'react'
import { Form, Input, TextArea } from "usetheform";
import "../styles/main.scss"

export default function Wizardform3({ prevPage, ...props }) {
    let [hide, setHide] = useState(false);

    const operation = (e) => {
        let checkBox = document.getElementById("other");
        if (checkBox.checked === true) {
            setHide(true)
        }
        else {
            setHide(false)
        }
    }



    const showOther = () => {
        return (

            <div className="row">
                <div className="col-md-6">
                    <TextArea rows="3" cols="2" type="text" className="form-control" name="other_problems" />
                </div>
            </div>
        )
    }

    return (
        <div>
            <Form className="well form-horizontal p-5" name="page2" {...props}>
                <h1 className="text-center mt-3 mb-5">Tell us more about your business needs</h1>
                <h4 className="text-left p-3">What are the main challenges you’re facing right now?</h4>
                {/* <hr className="hr-height"/> */}
                <ul>
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
                    <li>
                        <div className="d-inline-block d-flex">
                            <Input type="checkbox" className="form-check-input" id="other" name="Other" onClick={operation} />
                            <div className="checkbox-padding">
                                <label className="pr-5">Other</label>
                            </div>
                        </div>
                    </li>

                    <li>
                        {
                            hide
                                ?
                                showOther()
                                :
                                null
                        }
                    </li>
                </ul>




                <div className="row">
                    <div className="col-sm-3">
                        <button type="button" class="btn btn-outline-primary" onClick={prevPage}>
                            Previous Page
                        </button>
                        <button type="submit" class="btn btn-outline-primary">Next Page</button>
                    </div>

                </div>


            </Form>



        </div>
    )
}
