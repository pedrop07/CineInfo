import { configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import { darkModeReducer } from './reducers/darkModeReducer'

const darkModePersistConfig = {
  key: '@CineInfo/darkMode',
  storage: AsyncStorage
};

const persistDarkModeReducer = persistReducer(darkModePersistConfig, darkModeReducer);

export const store = configureStore({
  reducer: {
    darkMode: persistDarkModeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)