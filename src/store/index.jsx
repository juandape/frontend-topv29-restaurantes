import { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';
import { MdPassword } from 'react-icons/md';

const AppContext = createContext();

const initialState = {
  foods: [],
  cart: [],
  total: 0,
  isLoading: false,
  
  login:{
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsajBqdTJqaTAwMDJucDU4dWdxcjFxOHEiLCJlbWFpbCI6Imp1YW4ucGVAZ21haWwuY29tIiwiaWF0IjoxNjg3OTY2MzY4fQ.VOd8gN_g0Kfu1ZlHphMxUFbHIoGxugTdf4pCtoQttzA",
    profile: {
        fullName: "Juan Peña",
        avatar: null,
        email: "juan.pe@gmail.com",
        roles: [
            {
                id: "clj0jvzke0000npd8j9z3b5yc",
                name: "ADMIN"
            }
              ]
             }
      },

};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };

  return (
    <AppContext.Provider value={store}>
      {children}
    </AppContext.Provider>
  );
};

export const useSelector = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useSelector must be used within a AppProvider');
  }
  return context.state;
};

export const useDispatch = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useDispatch must be used within a AppProvider');
  }
  return context.dispatch;
};
