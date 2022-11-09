import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsNoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const Reminder = ({ reminder }) => {

    const { reminders, setNotes, setReminders, setBin } = useContext(DataContext);

    const unRemindNote = (reminder) => {
        const updatedNotes = reminders.filter(data => data.id !== reminder.id);
        setReminders(updatedNotes);
        setNotes(prevArr => [reminder, ...prevArr]);
    }

    const deleteNote = (reminder) => {
        const updatedNotes = reminders.filter(data => data.id !== reminder.id);
        setReminders(updatedNotes);
        setBin(prevArr => [reminder, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography style={{fontSize:'1rem', fontWeight:900}}>{reminder.title}</Typography>
                <Typography style={{fontSize:'15px'}}>{reminder.text}</Typography>
            </CardContent>
            <CardActions>
                <NotificationsNoneOutlinedIcon
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => unRemindNote(reminder)}
                />
                <DeleteOutlinedIcon
                    fontSize="small"
                    onClick={() => deleteNote(reminder)}
                />
            </CardActions>
        </StyledCard>
    )
}

export default Reminder;