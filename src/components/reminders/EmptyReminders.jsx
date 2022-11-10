import {styled} from "@mui/material/styles";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {Box, Typography} from "@mui/material";

const ReminderIcon = styled(NotificationsNoneOutlinedIcon)`
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

const EmptyReminders = () => {
    return(
        <Container >
            <ReminderIcon/>
            <Text>Notes with upcoming reminders appear here</Text>
        </Container>
    )
}

export default EmptyReminders;