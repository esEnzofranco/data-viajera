import './styles/app.css';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import PostsGrid from './components/posts-grid.js';
import LoadingComponent from './components/loading-component.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu />
      <PostsGrid />
      <Footer />
    </div>
  );
}

export default App;
