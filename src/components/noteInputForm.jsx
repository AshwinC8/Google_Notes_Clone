import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import {Button, Divider, Input, InputLabel, TextField} from "@mui/material";
import {Container} from "@mui/system";
import Box from "@mui/material/Box";

export const inputMainForm = (
    <Container sx={{ position:"center" }}>
        <Box maxWidth="sm" display="flex" sx={{ border: 2, bordercolor: 'black', borderRadius: 1, p: 2, height:'30%', width:'100%'}}>
            <FormControl>
                <InputLabel htmlFor="my-input">Title</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />

                <Divider/>

                <TextField
                    id="standard-multiline"
                    label="Text"
                    multiline
                    rows={4}
                />

                <Button></Button>
            </FormControl>
        </Box>
    </Container>
);