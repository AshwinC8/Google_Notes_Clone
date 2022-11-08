import {Box, Typography} from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import {styled} from "@mui/material/styles";

const Lightbulb = styled(LightbulbOutlinedIcon)`
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

const EmptyNote = () => {

    return (
        <Container>
            <Lightbulb/>
            <Text>Notes you add appear here</Text>
        </Container>
    )
}

export default EmptyNote;