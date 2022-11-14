import { useContext } from 'react';
import {Card, CardContent, CardActions, Typography, IconButton, Tooltip} from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    width: 615px;
    margin: 8px;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
`

const Bin = ({ deleteNote }) => {

    const { bin, setNotes, setReminders, setBin } = useContext(DataContext);

    const restoreNote = (deleteNote) => {
        const updatedNotes = bin.filter(data => data.id !== deleteNote.id);
        setBin(updatedNotes);
        setNotes(prevArr => [deleteNote, ...prevArr]);
    }

    const removeNote = (deleteNote) => {
        const updatedNotes = bin.filter(data => data.id !== deleteNote.id);
        setBin(updatedNotes);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography style={{fontSize:'1rem', fontWeight:500}}>{deleteNote.title}</Typography>
                <Typography style={{fontSize:'15px', wordWrap: "break-word"}}>{deleteNote.text}</Typography>
            </CardContent>
            <CardActions>
                <Tooltip title="Delete Forever">
                    <IconButton onClick={() => removeNote(deleteNote)}>
                        <Delete
                            fontSize="small"
                        />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Restore">
                    <IconButton onClick={() => restoreNote(deleteNote)} >
                        <Restore
                            fontSize="small"
                            style={{ marginRight: 'auto'}}
                            placeholder="Restore"
                        />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </StyledCard>
    )
}

export default Bin;