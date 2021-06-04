const typesAuth = {
    LOG_IN: 'LOG_IN',
    LOG_IN_TO_STORE: 'LOG_IN_TO_STORE',
    LOG_OUT: 'LOG_OUT',
    LOG_OUT_FROM_STORE: 'LOG_OUT_FROM_STORE',
}

export default typesAuth

export const loggingInToStore = (uid) => ({
    type: typesAuth.LOG_IN_TO_STORE,
    uid
})

export const loggingOutFromStore = () => ({
    type: typesAuth.LOG_OUT
})