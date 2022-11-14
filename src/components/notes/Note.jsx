import {Card, CardActions, CardContent, IconButton, ImageList, ImageListItem, Tooltip, Typography} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import {DataContext} from "../context/DataProvider.jsx";
import {useContext, useState} from "react";

const StyledCard = styled(Card)`
    width: 615px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Note = ({note}) => {
    const { notes, setNotes, reminders, setReminders, setBin } = useContext(DataContext);
    const [file, setFile] = useState();

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const reminderNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setReminders(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        const updatedReminders = reminders.filter(data => data.id !== note.id);
        setReminders(updatedReminders);
        setBin(prevArr => [note, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                {file &&
                    <ImageList sx={{ width: 615, maxHeight: 450}} variant="woven" cols={3} gap={8}>
                        <ImageListItem>
                            <img
                                src={file}
                            />
                        </ImageListItem>
                    </ImageList>
                }
                <Typography style={{fontSize:'1rem', fontWeight:500}}>{note.title}</Typography>
                <Typography style={{fontSize:'15px', wordWrap: "break-word"}}>{note.text}</Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Remind me">
                    <IconButton onClick={() => reminderNote(note)}>
                        <AddAlertOutlinedIcon
                            fontSize="small"
                            style={{ marginLeft: 'auto' }}
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Add Image">
                    <IconButton aria-label="upload">
                        <AddPhotoAlternateOutlinedIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete note">
                    <IconButton onClick={() => deleteNote(note)}>
                        <DeleteOutlinedIcon
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </StyledCard>
    )
}

export default Note;