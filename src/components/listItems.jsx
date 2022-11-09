import * as React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, ListItem} from '@mui/material';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

const ListItems = () => {
    const navList = [
        { id: 1, name: 'Notes', icon: <LightbulbOutlinedIcon />, route: '/'},
        { id: 2, name: 'Reminders', icon:  <NotificationsNoneOutlinedIcon />, route: '/reminder' },
        { id: 3, name: 'Bin', icon: <DeleteOutlinedIcon />, route: '/bin' },
    ]

    return (
            <List>
                {
                    navList.map( list => (
                        <ListItem key={list.id} disablePadding sx={{display: 'flex' , marginTop: '10px'}}>
                            <ListItemButton sx={{minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5}}>
                                <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                                    <ListItemIcon sx={{minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', alignItems: 'center'}}>
                                        {list.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={list.name} sx={{opacity: open ? 1 : 0}}/>
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
    )
}

export default ListItems;