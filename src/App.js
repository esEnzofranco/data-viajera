import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import PostsGrid from './components/posts-grid.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostPage from './components/post-page.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<PostsGrid />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
