
import SchedulerAppBar from "./SchedulerAppBar";
import SchedulerCalendar from "./0200.Planner/SchedulerCalendar";
import PostCalendar from "./0200.Planner/PostCalendar";

export default function Scheduler() {

    const posts = [
        { id: 1, date: new Date(2024, 7, 16), content: 'Post 1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, date: new Date(2024, 7, 16), content: 'Post 2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, date: new Date(2024, 7, 17), content: 'Post 3' },
        { id: 4, date: new Date(2024, 7, 18), content: 'Post 4', imageUrl: 'https://via.placeholder.com/150' },
    ];

    return (
        <>
            <SchedulerAppBar></SchedulerAppBar>

            {
                //<SchedulerCalendar posts={posts}></SchedulerCalendar>
            }
            <PostCalendar></PostCalendar>
            <h1>Per l'API di schedulazione mi serve ricevere (Linkedin):</h1>
            <ul>
                <li>Chiave API del cliente di link1 studios per approvazione</li>
                <li>Chiave API del cliente di Linkedin</li>
                <li>Contenuto (scritta, testo, immagine, video)</li>
                <li>Quando lo vuole postare per fare il cronjob</li>
            </ul>

        </>




    )
}