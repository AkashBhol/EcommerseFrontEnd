import './App.css';
import MainLayout from './Design/MainLayout';
import AppRoutes from './AppRoutes';
import { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';



function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <AppRoutes />
        <MainLayout />
      </SnackbarProvider>
    </div>
  );
}

export default App;
