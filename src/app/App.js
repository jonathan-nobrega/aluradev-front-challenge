import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditorPage from '../pages/EditorPage'
import CommunityPage from '../pages/CommunityPage'
import '../scss/App.css'

export default function App() {
  return (
    <div>
      <Router>

        <Routes>
        <Route path="/" element={<EditorPage />} exact />
        <Route path="/community" element={<CommunityPage />} />
        </Routes>
    </Router>
    </div>
  );
}
