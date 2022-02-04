import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { FullScreenLoader } from '../components/FullScreenLoader/FullScreenLoader';

export interface LoadingContext {
  loading: boolean;
  message: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export const LoadingContext = createContext<LoadingContext>({
  loading: false,
  message: '',
  setLoading: () => {},
  setMessage: () => {},
});

export const LoadingProvider: React.FC = (props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const value = { loading, message, setLoading, setMessage };
  return (
    <LoadingContext.Provider value={value}>
      {props.children}
      <FullScreenLoader loading={loading} message={message} />
    </LoadingContext.Provider>
  );
};
