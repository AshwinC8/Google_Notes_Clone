import {Box, Grid, styled} from "@mui/material";
import InputForm from "../InputForm.jsx";
import {useContext} from "react";
import {DataContext} from "../context/DataProvider.jsx";
import Note from "./Note.jsx";
import EmptyNote from "./EmptyNote.jsx";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

export const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const Notes = () => {
    const { notes, setNotes } = useContext(DataContext);

    const onDragEnd = (result) => {
        if (!result.destination)
            return;

        const items = reorder(notes, result.source.index, result.destination.index);

        setNotes(items);
    }

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <InputForm/>
                    { notes.length != 0 ?
                        <DragDropContext onDragEnd={onDragEnd}>
                            <Droppable droppableId="droppable" >
                                {(provided, snapshot) => (
                                    <Grid container
                                          {...provided.droppableProps}
                                          ref={provided.innerRef}
                                          direction="column"
                                          justifyContent="center"
                                          alignItems="center"
                                          style={{marginTop: 16, textAlign: 'left'}}
                                    >
                                        {
                                            notes.map((note, index) => (
                                                    <Draggable key={note.id} draggableId={note.id} index={index}>
                                                        {(provided, snapshot) => (
                                                            <Grid ref={provided.innerRef}
                                                                  {...provided.draggableProps}
                                                                  {...provided.dragHandleProps}
                                                                  item
                                                                  key={note.id}
                                                                  >
                                                                <Note
                                                                    note={note}
                                                                />
                                                            </Grid>
                                                            )
                                                        }
                                                    </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                    </Grid>
                                    )
                                }
                                </Droppable>
                        </DragDropContext>
                        :
                        <EmptyNote/>
                    }
            </Box>
        </Box>
    )
}

export default Notes;