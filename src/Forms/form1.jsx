import React, { useState } from 'react'
import { useMultipleForm } from "usetheform";
import WizardFormFirstPage from "./wizardform1";
import WizardFormSecondPage from "./wizardform2";
import emailjs from "emailjs-com";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


export default function Form1() {
    const [currentPage, setPage] = useState(1);
    const [res, setRes] = useState();
    const [getWizardState, wizard] = useMultipleForm();
    const { width, height } = useWindowSize()
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const onSubmitWizard = () => {
        emailjs.send('service_ekoq9gp', 'template_01lie83', getWizardState(), 'user_SB8vzz1oigsa4eoqd3vFQ')
            .then(function (response) {
                setRes(response.status);
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


            {
                res === 200
                    ?
                    <div>
                        <Confetti
                            width={width}
                            height={height}
                            tweenDuration={1}
                            numberOfPieces={200}
                            recycle={false}
                        />
                    </div>
                    :
                    null
            }



        </div>
    )
}
