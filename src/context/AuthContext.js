import React from "react";

var AuthStateContext = React.createContext();
var AuthDispatchContext = React.createContext();

//store bara rikhtan hame dakhelesh

function authReducer(state, action) {
    switch (action.type) {
        case "SET_USER_INFO":
            return { ...state, commentText: action.payload };
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

function AuthProvider({ children }) {
    var [state, dispatch] = React.useReducer(authReducer, {
        userInfo: {
            nationalCode:0,
            token:0
        },
    });
    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

function useAuthState() {
    var context = React.useContext(AuthStateContext);
    if (context === undefined) {
        throw new Error("useAuthState must be used within a AuthProvider");
    }
    return context;
}

function useAuthDispatch() {
    var context = React.useContext(AuthDispatchContext);
    if (context === undefined) {
        throw new Error("useAuthDispatch must be used within a AuthProvider");
    }
    return context;
}

export {
    AuthProvider,
    useAuthState,
    useAuthDispatch,
    setUserInfo
};

// ###########################_SetStates_################################
function setUserInfo(dispatch, userInfo) {
    dispatch({
        type: "SET_USER_INFO",
        payload: userInfo,
    });
}


// function updateOrderList(dispatch) {
//     // (isOK, data) => {
//     //   if (isOK) {
//     //     dispatch({
//     //       type: "SET_ORDER_LIST",
//     //       payload: data,
//     //     });
//     //   }
//     // };
// }