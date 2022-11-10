import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../context/DataProvider';
import Reminder from './Reminder';
import EmptyReminders from "./EmptyReminders.jsx";
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

const Reminders = () => {

    const { reminders, setReminders } = useContext(DataContext);

    const onDragEnd = (result) => {
        if (!result.destination)
            return;

        const items = reorder(reminders, result.source.index, result.destination.index);

        setReminders(items);
    }
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                { reminders.length != 0 ?
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
                                        reminders.map(( reminder,index) => (
                                            <Draggable key={reminder.id} draggableId={reminder.id} index={index}>
                                                {(provided, snapshot) => (
                                                    <Grid ref={provided.innerRef}
                                                          {...provided.draggableProps}
                                                          {...provided.dragHandleProps}
                                                          item
                                                          key={reminder.id}
                                                    >
                                                        <Reminder reminder={reminder} />
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
                    <EmptyReminders/>
                }
            </Box>
        </Box>
    )
}

export default Reminders;