
import React from 'react';
import SchedulerAppBar from "./SchedulerAppBar";

export default function Scheduler() {

    // function test(){
    //     console.log("this is a test");
    // }

    return (
        <>
            <SchedulerAppBar></SchedulerAppBar>
            <h1>Per API di schedulazione mi serve ricevere (Linkedin):</h1>
            <ul>
                <li>Chiave API del cliente di link1 studios per approvazione</li>
                <li>Chiave API del cliente di Linkedin</li>
                <li>Contenuto (scritta, testo, immagine, video)</li>
                <li>Quando lo vuole postare per fare il cronjob</li>
            </ul>
        </>
    )
}