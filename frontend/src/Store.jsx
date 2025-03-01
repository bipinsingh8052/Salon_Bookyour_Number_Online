import { configureStore} from '@reduxjs/toolkit'
import Searchinput from './slices/Searchslice'
const Store=configureStore({
    reducer:{
        search:Searchinput
    }
})

export default Store;