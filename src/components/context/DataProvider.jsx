import {createContext, useState} from "react";

export const DataContext = createContext(null);

const DataProvider = ( {children} ) => {
    const [ notes, setNotes] = useState([]);
    const [ reminders, setReminders] = useState([]);
    const [ bin, setBin] = useState([]);

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            reminders,
            setReminders,
            bin,
            setBin,
        }}>
            { children }
        </DataContext.Provider>
    )
}

export default DataProvider;