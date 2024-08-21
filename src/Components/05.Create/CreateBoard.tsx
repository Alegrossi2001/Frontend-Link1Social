import { Button } from "@mui/material";

export default function CreateBoard() {

    const apiUrl = process.env.REACT_APP_API_KEY;

    const randomtest = () => {
        console.log(apiUrl);
    }

    return (
        <>
            <p>This is the hardest section to create. It needs to be a collaboration tool like Trello</p>
            <Button onClick={randomtest}>TEST</Button>
        </>
    )
}