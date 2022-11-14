import { useContext } from 'react';
import {Card, CardContent, CardActions, Typography, IconButton, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    width: 615px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Reminder = ({ reminder }) => {

    const { notes, reminders, setNotes, setReminders, setBin } = useContext(DataContext);

    const unRemindNote = (reminder) => {
        const updatedNotes = reminders.filter(data => data.id !== reminder.id);
        setReminders(updatedNotes);
        setNotes(prevArr => [reminder, ...prevArr]);
    }

    const deleteNote = (reminder) => {
        const updatedNotes = notes.filter(data => data.id !== reminder.id);
        setNotes(updatedNotes);
        const updatedReminders = reminders.filter(data => data.id !== reminder.id);
        setReminders(updatedReminders);
        setBin(prevArr => [notes, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography style={{fontSize:'1rem', fontWeight:500}}>{reminder.title}</Typography>
                <Typography style={{fontSize:'15px', wordWrap: "break-word"}}>{reminder.text}</Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Remind me">
                    <IconButton onClick={() => unRemindNote(reminder)}>
                        <AddAlertOutlinedIcon
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Image">
                    <IconButton>
                        <AddPhotoAlternateOutlinedIcon
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete note">
                    <IconButton onClick={() => deleteNote(reminder)}>
                        <DeleteOutlinedIcon
                        fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </StyledCard>
    )
}

export default Reminder;