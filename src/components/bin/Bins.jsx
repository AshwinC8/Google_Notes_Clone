import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../context/DataProvider';
import Bin from './Bin';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Bins = () => {

    const { bin } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        bin.map(deleteNote => (
                            <Grid item>
                                <Bin deleteNote={deleteNote} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Bins;