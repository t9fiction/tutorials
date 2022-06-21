import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../contract/contract";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

const initialState = {
    web3: null,
    contract: null,
    accounts: [],
    web3Error: null
}

const web3ConnectSlice = createSlice({
    name: "Web3Connect",
    initialState,
    reducers: {
    }
})

export const web3Reducer = web3ConnectSlice.reducer;