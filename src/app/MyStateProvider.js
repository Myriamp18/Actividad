import {createContext, useState, useContext} from 'react';

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const MyStateProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export default MyStateProvider;