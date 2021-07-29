import React, { useState } from 'react'
import { useMultipleForm } from "usetheform";
import WizardFormFirstPage from "./wizardform1";
import WizardFormSecondPage from "./wizardform2";
import emailjs from "emailjs-com";



export default function Form1() {
    const [currentPage, setPage] = useState(2);
    const [getWizardState, wizard] = useMultipleForm();
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const onSubmitWizard = () => {
        emailjs.send('service_ekoq9gp', 'template_01lie83', getWizardState(), 'user_SB8vzz1oigsa4eoqd3vFQ')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
        console.log(getWizardState())
    }




    return (
        <div>
            {currentPage === 1 && (
                <WizardFormFirstPage {...wizard} onSubmit={nextPage} />
            )}
            {currentPage === 2 && (
                <WizardFormSecondPage
                    {...wizard}
                    prevPage={prevPage}
                    onSubmit={onSubmitWizard}
                />
            )}
        </div>
    )
}
