import * as React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, ListItem} from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const ListItems = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />},
        { id: 2, name: 'Reminders', icon:  <NotificationsNoneOutlinedIcon /> },
        { id: 3, name: 'Bin', icon: <DeleteOutlinedIcon /> },
    ]

    return (
            <List>
                {
                    navList.map( list => (
                        <ListItem key={list.id} disablePadding sx={{display: 'block'}}>
                            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
                                <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center'}}>
                                    {list.icon}
                                </ListItemIcon>
                                <ListItemText primary={list.name} sx={{opacity: open ? 1 : 0}}/>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
    )
}

export default ListItems;