import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../context/DataProvider';
import Bin from './Bin';
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {reorder} from "../notes/Notes.jsx";
import EmptyBin from "./EmptyBin.jsx";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Bins = () => {

    const { bin, setBin } = useContext(DataContext);

    const onDragEnd = (result) => {
        if (!result.destination)
            return;
        const items = reorder(bin, result.source.index, result.destination.index);
        setBin(items);
    }


    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                    { bin.length!=0 ?
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
                                            bin.map((deletedNote, index) => (
                                                <Draggable key={deletedNote.id} draggableId={deletedNote.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Grid ref={provided.innerRef}
                                                              {...provided.draggableProps}
                                                              {...provided.dragHandleProps}
                                                              item
                                                              key={deletedNote.id}
                                                        >
                                                            <Bin deleteNote={deletedNote} />
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
                        <EmptyBin/>
                    }
            </Box>
        </Box>
    )
}

export default Bins;