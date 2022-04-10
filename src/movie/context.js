import React, { useEffect,useState,useContext } from 'react'

const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [isLoading,setLoading] = useState(false)
    const [isError,setError] = useState(false)
    const [movies,setMovies] = useState([])
    const [query,setQuery] = useState('man')
    const fetchMovies = async (url) => {

        try {
            setLoading(true)
            const response = await (await fetch(url)).json();
            if(Array.isArray(response.Search)) {
                setMovies(response.Search)
                setError(false)
            }
            else {
                setError(true)
                setMovies([])
            }
            setLoading(false)


        }
        catch(e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchMovies(`${React_App_MOVIE_URL}/?s=${query}&apikey=${React_App_API_KEY}`)
    },[query])

    return (
        <AppContext.Provider value={{isLoading,isError,movies,query,setQuery}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
}
export {AppContext, AppProvider}