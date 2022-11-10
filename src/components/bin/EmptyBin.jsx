import {styled} from "@mui/material/styles";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {Box, Typography} from "@mui/material";

const BinIcon = styled(DeleteOutlinedIcon)`
    font-size : 120px;
    opacity: .1;
    margin : 20px;
    color : #202124;
`

const Text = styled(Typography)`
    font-size : 1.375rem;
    color: #80868b;
`

const Container = styled(Box)`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 20vh;
`

const EmptyBin = () => {

    return(
        <Container>
            <BinIcon/>
            <Text>No notes in Recycle Bin</Text>
        </Container>
    )
}

export default EmptyBin;