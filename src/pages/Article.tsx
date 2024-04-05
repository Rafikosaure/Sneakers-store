import { useParams } from "react-router-dom"
// import Data from '../data.json'
// import { Sneaker } from "../interfaces/sneaker"
import '../styles/styles.css'
import '../index.css'
import '../App.css'
// import { useSelector } from "react-redux"
// import SneakerInterface from '../interfaces/sneaker'


export default function Article() {

  const { sneakerId } = useParams()
  /* const currentSneaker = useSelector(
    (state: SneakerInterface) => state.sneakers.data[sneakerId]
  ) */
  // const sneakerData = Data as Sneaker[]
  // const currentSneaker = sneakerData.indexOf(sneakerIndex)
  // const currentSneaker = sneakerData.find((sneaker) => sneaker.name === sneakerIndex)
  // console.log(currentSneaker?.name)

  return (
    <div className="app">
      <h1>{sneakerId}</h1>
    </div>
  )
}
