import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { initialSneaker } from "../../interfaces/sneaker"
import { Sneaker } from "../../interfaces/sneaker"


const initialState: initialSneaker = {
  data: [],
  loading: null,
  error: false
}

export const Sneakers = createSlice({
  name: "Sneakers",
  initialState,
// C'est ici que les "REDUCERS" sont définis.
// Les "REDUCERS" sont des fonctions qui décrivent
// comment l'état de l'application change 
// en réponse à des actions.
// Dans ce cas, trois "reducers" sont définis :
// 1) FETCH_START,
// 2) FETCH_SUCCESS
// 3) et FETCH_FAILURE.
  reducers: {
    FETCH_START: (draft: initialSneaker) => {
      draft.loading = true
    }, 
    FETCH_SUCCES: (draft: initialSneaker, actions: PayloadAction<Sneaker[]>) => {
      draft.loading = false
      draft.data = actions.payload
    },
    FETCH_FAILURE: (draft: initialSneaker) => {
      draft.loading = false
      draft.error = true
    }
  }
})

export const {
  FETCH_START,
  FETCH_SUCCES,
  FETCH_FAILURE
} = Sneakers.actions

export default Sneakers.reducer