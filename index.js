const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
// Logger Middleware
const logger = reduxLogger.createLogger()

// Action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'First Redux Action'
  }
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: 'First Redux Action'
  }
}

// Reducer
const cakeInitialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}
const iceCreamInitialState = {
  numOfCakes: 10,
  numOfIceCreams: 20
}

const cakeReducer = (state = cakeInitialState, action) => {
  switch(action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes -1
      }

    default: return state
  }
}

const iceCreamReducer = (state = iceCreamInitialState, action) => {
  switch(action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams -1
      }

    default: return state
  }
}

// Combining reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})

// Store -> holds application state
const store = createStore(rootReducer, applyMiddleware(logger))

console.log('Inicial State', store.getState())

// Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(() => {})

// Allows state to be updated via dispatch(action)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()