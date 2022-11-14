import {Button, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useContext} from "react";
import {DataContext} from "../context/DataProvider.jsx";

const EmptyButton = styled(Button)`
    margin: 0 12px;
    padding: 8px 24px;
    font-weight: 500;
    text-transform: none;
`

const Text = styled(Typography)`
    color: #202124;
    font-size: 17px;
    font-family: "Google Sans",Roboto,Arial,sans-serif;
`

const BinText = () => {
    const { bin, setBin } = useContext(DataContext);

    const emptyBin = () => {
        setBin([]);
    }

    return(
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Text sx={{fontStyle: 'italic'}}>Notes in the Recycle Bin are deleted after 7 days.</Text>
            {
                bin.length != 0&&
                <EmptyButton onClick={emptyBin}>
                    Empty Bin
                </EmptyButton>
            }
        </Grid>
    )
}

export default BinText;