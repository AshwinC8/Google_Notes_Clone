import { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../context/DataProvider';
import Reminder from './Reminder';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Reminders = () => {

    const { reminders } = useContext(DataContext);

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container>
                    {
                        reminders.map(reminder => (
                            <Grid item>
                                <Reminder reminder={reminder} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default Reminders;