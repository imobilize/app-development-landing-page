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
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const onSubmitWizard = () => {

        axios.post("https://sheet.best/api/sheets/8a7a3f8b-963a-4168-98ba-ab212ba994b8", getWizardState())
            .then(response => {
                setRes(response.status);
            })

        console.log(getWizardState(), res)
    }

    const fun = () => {
        if (res === 200 && currentPage === 5) {
            setPage(6)
        }
    }




    return (
        <div>
            {currentPage === 1 && (
                <WizardFormFirstPage {...wizard} onSubmit={nextPage} />
            )}

            {currentPage === 2 && (
                <Page2
                    {...wizard}
                    prevPage={prevPage}
                    onSubmit={nextPage}
                />
            )}

            {currentPage === 3 && (
                <Page3
                    {...wizard}
                    prevPage={prevPage}
                    onSubmit={nextPage}
                />
            )}

            {currentPage === 4 && (
                <WizardFormThirdPage
                    {...wizard}
                    onSubmit={nextPage}
                    prevPage={prevPage}
                />
            )}

            {currentPage === 5 && (
                <WizardFormSecondPage
                    {...wizard}
                    prevPage={prevPage}
                    onSubmit={onSubmitWizard}
                />
            )}

            {currentPage === 6 && (

                <WizardThankYou
                    {...getWizardState()}
                // onSubmit={nextPage}
                // prevPage={prevPage}
                />
            )}

            {
                res === 200 && currentPage === 5
                    ?
                    fun()
                    :
                    null
            }

        </div>
    )
}
