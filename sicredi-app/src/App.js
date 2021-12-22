import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/login';
import Dragon from './pages/dragon';
import Dragons from './pages/dragons';
import Form from './pages/form';
import RequireAuth from './components/RequireAuth';

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        <Navigate to="/"></Navigate>
    }, [user]);

    return (
        <div className='App'>
        <p>{user}</p>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Login user={user} callback={setUser} />} />
                <Route path="/dragon" exact
                    element={
                        <RequireAuth user={user}>
                            <Dragons />
                        </RequireAuth>
                    }
                />
                <Route path="/dragon/:id" exact element={
                <RequireAuth user={user}>
                    <Dragon />
                </RequireAuth>
                } />
                <Route path="/dragon/form" exact element={
                    <RequireAuth user={user}>
                        <Form />
                    </RequireAuth>
                } />
                <Route path="/dragon/form/:id" exact element={
                    <RequireAuth user={user}>
                        <Form />
                    </RequireAuth>
                } />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;