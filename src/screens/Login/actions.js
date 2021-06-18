const typesAuth = {
    LOG_IN: 'LOG_IN',
    LOG_IN_TO_STORE: 'LOG_IN_TO_STORE',
    LOG_OUT: 'LOG_OUT',
    LOG_OUT_FROM_STORE: 'LOG_OUT_FROM_STORE',
    ERROR: 'ERROR_LOG_IN'
}

export default typesAuth


export const loggingInToStore = (data) => ({
    type: typesAuth.LOG_IN,
    data
})

export const setUserUid = (uid) => ({
    type: typesAuth.LOG_IN_TO_STORE,
    uid
})

export const logOut = () => ({
    type: typesAuth.LOG_OUT
})