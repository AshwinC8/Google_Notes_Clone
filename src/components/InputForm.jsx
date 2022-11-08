import {Box, ClickAwayListener, styled, TextField} from "@mui/material";
import {useState , useRef, useContext} from "react";
import {DataContext} from "./context/DataProvider.jsx";
import { v4 as uuid } from "uuid";

const Container = styled(Box)`
    display : flex;
    flex-direction : column;
    width : 600px;
    padding : 10px 15px;
    box-shadow : 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
    margin : auto;
    border-radius : 8px;
    border-color : #e0e0e0e; 
`

const note = {
    id : '',
    title : '',
    text : '',
}

const InputForm = () => {

    const [showTextField, setShowTextField] = useState(false);

    const [addNote, setAddNote] = useState({...note, id : uuid()});
    const {notes, setNotes} = useContext(DataContext);

    const containerRef = useRef();

    const onTextArea = () => {
        setShowTextField(true);
        containerRef.current.style.minHeight = '70px';
    }

    const handleClickAway = () => {
        setShowTextField(false);
        containerRef.current.style.minHeight = '30px';

        setAddNote({ ...note, id: uuid() });
        if (addNote.heading || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
        }
    }

    const onTextInput = (e) => {
        let changedNote = { ...addNote, [e.target.name]: e.target.value };
        setAddNote(changedNote);
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef}>
                { showTextField &&
                    <TextField
                        placeholder="Title"
                        variant={"standard"}
                        InputProps={{disableUnderline: true}}
                        style={{marginBottom: 10}}
                        onChange={(e) => onTextInput(e)}
                        name='title'
                        value={addNote.title}
                    />
                }
                <TextField
                    placeholder="Take a note..."
                    multiline='true'
                    variant="standard"
                    onClick={onTextArea}
                    InputProps={{ disableUnderline : true }}
                    onChange={(e) => onTextInput(e)}
                    name='text'
                    value={addNote.text}
                />
            </Container>
        </ClickAwayListener>
    )
}

export default InputForm;