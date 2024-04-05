import { configureStore } from "@reduxjs/toolkit"; // => dépendance qui facilite l'usage de Redux.
// => "configureStore" crée le store plus simplement 
// qu'avec les précédentes versions de Redux.
// Cette méthode reçoit un objet en paramètre avec
// une propriété "reducer" qui utilise 
// automatiquement "combinerReducer".
// La fonction "configureStore" se connecte
// automatiquement au DevTools.

import Sneakers from "./reducers/sneakers";

export default configureStore({
    reducer: {
        sneakers: Sneakers
    }
})

