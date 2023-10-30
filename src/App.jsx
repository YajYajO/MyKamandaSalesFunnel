import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ChatPage from './ChatPage/ChatPage';
import LogInForm from './LogInForm';

const App = () => {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setHasToken(true);
        }
    }, []);

    return (
        <Routes>
            <Route path="/login" element={hasToken ? <Navigate to="/chat" /> : <LogInForm />} />
            <Route path="/chat" element={!hasToken ? <Navigate to="/login" /> : <ChatPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}

export default App;
