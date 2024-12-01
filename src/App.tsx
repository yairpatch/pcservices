import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SubmitTicket from './pages/SubmitTicket';
import TrackTicket from './pages/TrackTicket';
import Admin from './pages/Admin';
import Login from './pages/Login';
import TicketDetails from './pages/TicketDetails';
import ProtectedRoute from './components/ProtectedRoute';
import './i18n/config';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="submit-ticket" element={<SubmitTicket />} />
          <Route path="track-ticket" element={<TrackTicket />} />
          <Route path="login" element={<Login />} />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin/ticket/:ticketId"
            element={
              <ProtectedRoute>
                <TicketDetails isAdminView />
              </ProtectedRoute>
            }
          />
          <Route path="ticket/:ticketId" element={<TicketDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;