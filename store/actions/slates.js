export const slatesActions = {
    addSlate: (state, actions) => {
        state.listing.push({
            ...actions.payload,
            id: state.idCount,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isActive: true,
            isPublic: false,
            isShared: false,
            isDeleted: false,
            tokens: 0,
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
        const slateIndex = state.listing.findIndex(slate => slate.id === actions.payload.id)
        state.listing[slateIndex] = {
            ...state.listing[slateIndex],
            isDeleted: true
        }
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
        console.log('41=>',state.listing[slateIndex])
    }
}