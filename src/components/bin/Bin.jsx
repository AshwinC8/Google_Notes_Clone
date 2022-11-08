import { useContext } from 'react';
import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
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
                <Typography>{deleteNote.heading}</Typography>
                <Typography>{deleteNote.text}</Typography>
            </CardContent>
            <CardActions>
                <Delete
                    fontSize="small"
                    style={{ marginLeft: 'auto' }}
                    onClick={() => removeNote(deleteNote)}
                />
                <Restore
                    fontSize="small"
                    onClick={() => restoreNote(deleteNote)}
                />
            </CardActions>
        </StyledCard>
    )
}

export default Bin;