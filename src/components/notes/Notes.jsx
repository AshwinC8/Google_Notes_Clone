import {Box, Grid, styled} from "@mui/material";
import InputForm from "../InputForm.jsx";
import {useContext} from "react";
import {DataContext} from "../context/DataProvider.jsx";
import Note from "./Note.jsx";
import EmptyNote from "./EmptyNote.jsx";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const { notes } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <InputForm/>
                    { notes.length != 0 ?
                        <Grid container
                              direction="column"
                              justifyContent="center"
                              alignItems="center"
                              style={{marginTop: 16, textAlign: 'left'}}
                        >
                            {
                                notes.map((note) => (
                                        <Grid item
                                              key={note.id}
                                        >
                                            <Note
                                                note={note}
                                            />
                                        </Grid>
                                    )
                                )
                            }
                        </Grid>
                        :
                        <EmptyNote/>
                    }
            </Box>
        </Box>
    )
}

export default Notes;