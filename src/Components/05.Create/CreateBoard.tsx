import { Button } from "@mui/material";

export default function CreateBoard() {

    const apiUrl = process.env.REACT_APP_API_KEY;

    const randomtest = () => {
        console.log(apiUrl);
    }

    return (
        <>
            <p>Hello?</p>
            <Button onClick={randomtest}>FUCK YOU</Button>
        </>
    )
}