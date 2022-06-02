import React, { useState } from 'react'
import { useMultipleForm } from "usetheform";
import WizardFormFirstPage from "./wizardform1";
import WizardFormSecondPage from "./wizardform2";
import WizardFormThirdPage from './wizardform3';
import WizardThankYou from './wizardthankyou';
import Page2 from './page2'
import Page3 from './page3';
import axios from 'axios';



export default function Form1() {
    const [currentPage, setPage] = useState(1);
    const [res, setRes] = useState();
    const [getWizardState, wizard] = useMultipleForm();
    // const nextPage = () => setPage((prev) => ++prev);
    // const prevPage = () => setPage((prev) => --prev);

    const onSubmitWizard = () => {


        axios.post("https://sheet.best/api/sheets/d6fa6b1c-a455-43f7-99e2-f638c8747c02", getWizardState())

        .then(response => {
            setRes(response.status);
        })

        console.log(getWizardState(), res)
    }

    const fun = () => {
        if (res === 200 && currentPage === 1) {
            setPage(2)
        }
    }




    return ( 
    <div> 
        {
            currentPage === 1 && ( 
            <WizardFormFirstPage {...wizard }
                onSubmit = { onSubmitWizard }/>
            )
        }

        {
            /* 
                        {currentPage === 5 && (
                            <WizardFormSecondPage
                                {...wizard}
                                prevPage={prevPage}
                                onSubmit={onSubmitWizard}
                            />
                        )} */
        }

        {
            currentPage === 2 && (

                <WizardThankYou {...getWizardState() }/>
            )
        }

        {
            res === 200 && currentPage === 1 ?
                fun() :
                null
        } 
        </div>
        )
    }