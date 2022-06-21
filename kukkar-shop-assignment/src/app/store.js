const { configureStore } = require("@reduxjs/toolkit");
import { useDispatch, useSelector } from "react-redux";

console.log("Values from Store")
export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const useAppDispatch = ()=>useDispatch();
export const useAppSelector = useSelector;