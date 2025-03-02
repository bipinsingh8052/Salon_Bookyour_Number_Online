import { configureStore} from '@reduxjs/toolkit'
import Input from './slices/Searchslice'
const Store=configureStore({
    reducer:{
        search:Input,
    }
})

export default Store;