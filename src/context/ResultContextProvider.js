import React, {createContext, useContext, useState} from 'React';
const ResultContext = createContext();
const baseURL = 'https://google-search1.p.rapidapi.com/google-search';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch (`${baseURL}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'google-search1.p.rapidapi.com',
                'x-rapidapi-key': '74a12c7e7dmshaa0ea571ae1eeeep10a6ebjsn96763919a56d'
            }
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
    }
    return(
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading}}>
            {children}

        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);