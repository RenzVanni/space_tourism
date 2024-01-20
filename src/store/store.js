import {configureStore} from "@reduxjs/toolkit"
import underline from "./slice/underline"

export const store = configureStore({
    reducer: {underline}
})