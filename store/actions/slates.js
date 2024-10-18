export const slatesActions = {
    addSlate: (state, actions) => {
        state.listing.push({
            ...actions.payload,
            id: state.idCount,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isActive: true,
            isPublic: true,
            isDeleted: false,
            tokens: [],
            shares: [],
            comments: [],
            pinned: false,
        })
        state.idCount = state.idCount + 1
    },
    editSlate: (state, actions) => {
        const slateIndex = state.listing.findIndex(slate => slate.id === actions.payload.id)
        state.listing[slateIndex] = {
            ...state.listing[slateIndex],
            ...actions.payload
        }
    },
    deleteSlate: (state, actions) => {
        // const slateIndex = state.listing.findIndex(slate => slate.id === actions.payload.id)
        // state.listing[slateIndex] = {
        //     ...state.listing[slateIndex],
        //     isDeleted: true
        // }
        state.listing = state.listing.filter(slate => slate.id !== actions.payload.id)
    },
    deleteAll: (state) => {
        state.listing = []
    },
    pinSlate: (state, actions) => {
        const slateIndex = state.listing.findIndex(slate => slate.id === actions.payload.slateId)
        state.listing[slateIndex] = {
            ...state.listing[slateIndex],
            pinned: actions.payload.pinned
        }
    },
    searchSlate: (state, actions) => {
        state.searchValue = actions.payload.searchValue
    }
}