import React, { useState } from 'react'
import { useMultipleForm } from "usetheform";
import WizardFormFirstPage from "./wizardform1";
import WizardFormSecondPage from "./wizardform2";
import WizardFormThirdPage from './wizardform3';
import WizardThankYou from './wizardthankyou';
import Page2 from './page2'
import Page3 from './page3';
import emailjs from "emailjs-com";



export default function Form1() {
    const [currentPage, setPage] = useState(1);
    const [res, setRes] = useState();
    const [getWizardState, wizard] = useMultipleForm();
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const onSubmitWizard = () => {
        emailjs.send('service_ekoq9gp', 'template_01lie83', getWizardState(), 'user_SB8vzz1oigsa4eoqd3vFQ')
            .then(function (response) {
                setRes(response.status);
            }, function (error) {
                console.log('FAILED...', error);
            });
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
