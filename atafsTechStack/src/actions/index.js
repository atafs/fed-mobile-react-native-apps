export const selectedLibrary = (libraryId) => {
    return {
        type: 'SELECTED_LIBRARY',
        payload: libraryId
    }
}