import React, { useState } from 'react'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import "../styles/main.scss"

export default function Wizardthankyou({ prevPage, ...props }) {
    let [points, setPoints] = useState(0)
    let [comp_touched, setComp_touched] = useState(0)
    let [funds_tounched, setFunds_touched] = useState(0)
    let [budget_tounched, setBudget_touched] = useState(0)
    let [newUser, setNewUser] = useState(0)

    const { width, height } = useWindowSize()

    const dataLayerEvent = { 'event': 'new_lead' }

    const pointsys = () => {
        const comp_size = props.company_Size
        const funds = props.company_Funds
        const budget = props.budget

        if (comp_touched === 0) {
            if (comp_size === "Individual" && newUser === 0) {
                setNewUser(newUser = newUser + 1)
                setPoints(points = points + 0)

                if (comp_touched === 0) {
                    setComp_touched(1)
                }

            }
            else if (comp_size === "1-10" && newUser === 0) {
                setPoints(points = points + 1)
                setNewUser(newUser = newUser + 1)
                if (comp_touched === 0) {
                    setComp_touched(1)
                }
            }
            else if (comp_size === "10-50" && newUser === 0) {
                setPoints(points = points + 1)
                if (comp_touched === 0) {
                    setComp_touched(1)
                }
            }
            else if (comp_size === "100+" && newUser === 0) {
                setPoints(points = points + 5)
                if (comp_touched === 0) {
                    setComp_touched(1)
                }
            }
        }

        if (funds_tounched === 0) {
            if (funds === "self") {
                setPoints(points = points + 0)
                if (newUser === 0) {
                    setNewUser(newUser = newUser + 1)
                }

                if (funds_tounched === 0) {
                    setFunds_touched(1)
                }
            }
            else if (funds === "existing-business" && newUser === 0) {
                setPoints(points = points + 1)
                if (funds_tounched === 0) {
                    setFunds_touched(1)
                }
            }
            else if (funds === "seed-Angel" && newUser === 0) {
                setPoints(points = points + 1)
                if (funds_tounched === 0) {
                    setFunds_touched(1)
                }
            }
            else if (funds === "venture-capital" && newUser === 0) {
                setPoints(points = points + 5)
                if (funds_tounched === 0) {
                    setFunds_touched(1)
                }
            }
        }

        if (budget_tounched === 0) {
            if (budget === "Don't Know" && newUser === 0) {
                setPoints(points = points + 1)
                if (budget_tounched === 0) {
                    setBudget_touched(1)
                }
            }
            else if (budget === "100-1000" && newUser === 0) {
                setPoints(points = points + 1)
                if (budget_tounched === 0) {
                    setBudget_touched(1)
                }
            }
            else if (budget === "1000-5000" && newUser === 0) {
                setPoints(points = points + 2)
                if (budget_tounched === 0) {
                    setBudget_touched(1)
                }
            }
            else if (budget === "5000-15000" && newUser === 0) {
                setPoints(points = points + 4)
                if (budget_tounched === 0) {
                    setBudget_touched(1)
                }
            }
            else if (budget === "20k+" && newUser === 0) {
                setPoints(points = points + 4)
                if (budget_tounched === 0) {
                    setBudget_touched(1)
                }
            }
        }
        console.log(comp_touched, budget_tounched, funds_tounched, points, newUser)
    }

    const forNewUser = () => {
        return (
            <div>
                <strong>
                    Branding and creating a minimal viable product
                </strong>
                <p className="text-left mt-3">We are happy to assist with that and we have put together something that you will love. It has helped many of our clients in the past save money and time on their projects. And most importantly, it helped grow their business exponentially.</p>
                <a href="https://brandingforprofitbook.com/">
                    <button type="button" className="btn btn-outline-primary">
                        I’M READY TO GROW MY BUSINESS
                    </button>
                </a>
            </div>


        )
    }
    const calPoints = (p) => {
        if (p > 2 && p < 10) {
            return (

                <strong>
                    Generating more leads and sales through a landing page
                </strong>

            )
        }
        else if (p >= 8) {
            return (
                <div>
                    <strong>
                        Creating a bolt on digital product to grow your business
                    </strong>
                    <p className="text-left mt-3">We are happy to assist with that and we have put together something that you will love. It has helped many of our clients in the past save money and time on their projects. And most importantly, it helped grow their business exponentially.</p>
                    <a href="https://calendly.com/imobilize">
                        <button type="button" className="btn btn-outline-primary">
                            BOOK A MEETING WITH US
                        </button>
                    </a>
                </div>

            )
        }
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(dataLayerEvent);

    return (
        <div className="container">

            <div className="p-3">

                {
                    comp_touched === 0 && funds_tounched === 0 && budget_tounched === 0
                        ?
                        pointsys()
                        :
                        null
                }

                <h1 className="text-center mt-3 mb-5"> Thank you for submitting your enquiry</h1>
                <p className="text-left">We will review the details and get back to you with an answer soon.

                    In the past we have helped hundreds of clients design, develop and launch their digital products. Not only do we help to create the products themselves such as websites and mobile apps, we even assist with marketing strategy.
                </p>
                <p className="text-left">From assessing your level, we feel you will need help with  </p>

                {
                    newUser === 1
                        ?
                        forNewUser()
                        :
                        calPoints(points)
                }

                {/* <p className="text-left mt-3">We are happy to assist with that and we have put together something that you will love. It has helped many of our clients in the past save money and time on their projects. And most importantly, it helped grow their business exponentially.</p> */}
                {/* <button type="button" className="btn btn-outline-primary">
                    I’M READY TO GROW MY BUSINESS
                </button> */}

                <Confetti
                    width={width}
                    height={height}
                    tweenDuration={1}
                    numberOfPieces={200}
                    recycle={false}
                />
            </div>
        </div>

    )
}
