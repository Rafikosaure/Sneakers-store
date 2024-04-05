import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../styles/styles.css'
import '../index.css'
import '../App.css'

// DATA
import Data from '../data.json'

// ACTIONS
import * as ACTIONS from '../redux/reducers/sneakers.ts'

// INTERFACES & TYPES
import { Sneaker, RootState } from '../interfaces/sneaker.ts'

// SERVICES
import { allSneakers } from '../services/selector/sneader.selector.ts'



export default function Home() {

    const dispatch = useDispatch()
    const sneakerData = Data as Sneaker[]
    const store: Sneaker[] = useSelector((state: RootState) => allSneakers(state))

    useEffect(() => {
        dispatch(ACTIONS.FETCH_START())
        const fetchSneakers = async (): Promise<void> => {
            try {
                // const data = await axios.get(URL de l'API)
                dispatch(ACTIONS.FETCH_SUCCES(sneakerData))
            } catch(error) {
                console.log(error)
                dispatch(ACTIONS.FETCH_FAILURE())
            }
        }
        fetchSneakers()
    }, [])

    return (
        <div className='app'>
            {store.map((sneaker: Sneaker, index: number) => (
                <Link className='card' key={index} to={`/${index}`}>
                    <div>
                        <img src={sneaker.picture[0].pic1} alt={sneaker.name} />
                    </div>
                    <p>{sneaker.name}</p>
                </Link>
            ))}
        </div>
    )
}
