import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers'
import thunk from 'redux-thunk'


export const store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

// 1) STORE 
// är min globala state
// Top-Level Exports

// Creates a Redux store that holds the complete state tree of your app. There should only be a single store in your app.

// vid api-anrop vill man ha middleware pga tidsaspekten och köra dem asynk 
//- thunk är ett av verktygen - gör tex att man i sin action kan pausa tex innan du dispatchar
// måste kombineras i storen för att det kan bara finnas 2 st saker i en store detta görs med compose