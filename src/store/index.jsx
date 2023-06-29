import { createContext, useReducer, useContext } from 'react';
import reducer from './reducer';
import { MdPassword } from 'react-icons/md';

const AppContext = createContext();

const initialState = {
  foods: [],
  cart: [],
  total: 0,
  isLoading: false,
  //null
  //'guialexander@g.com'
  login:{
    token: null,
    profile: {
        fullName: null,
        avatar: null,
        email: null,
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
