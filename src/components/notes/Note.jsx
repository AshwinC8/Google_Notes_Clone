import {Card, CardActions, CardContent, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationsNoneOutlinedIcon  from '@mui/icons-material/NotificationsNoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {DataContext} from "../context/DataProvider.jsx";
import {useContext} from "react";

const StyledCard = styled(Card)`
    width: 240px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Note = ({note}) => {
    const { notes, setNotes, setReminders, setBin } = useContext(DataContext);

    const reminderNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setReminders(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setBin(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography style={{fontSize:'1rem', fontWeight:900}}>{note.title}</Typography>
                <Typography style={{fontSize:'15px'}}>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <NotificationsNoneOutlinedIcon
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => reminderNote(note)}
                />
                <DeleteOutlinedIcon
                    fontSize="small"
                    onClick={() => deleteNote(note)}
                />
            </CardActions>
        </StyledCard>
    )
}

export default Note;