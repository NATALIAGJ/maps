const authActions = {
    LOGOUT: 'LOGOUT',
    PERFIL: 'PERFIL',
    logout: () => ({
        type: authActions.LOGOUT
    }),
    perfil: (data) => ({
        type: authActions.PERFIL,
        payload: data
    }),
};
export default authActions;
