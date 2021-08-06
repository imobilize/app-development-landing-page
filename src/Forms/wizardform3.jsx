import React, { useState } from 'react'
import { Form, Input, TextArea } from "usetheform";
import Header from './header';
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
        <div className="container">
            <Header />
            <Form className="well form-horizontal p-3" name="page3" {...props}>
                <h3 className="text-left p-3">What are the main challenges you’re facing right now?</h3>
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
                    <div className="col-sm-6">
                        <div className="p-2">
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
    )
}
