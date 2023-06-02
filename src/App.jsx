import Post from './Post';
import { Header } from './components/Header'
import { Sidebar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
          author="Francine Soares" 
          content="lorem ipsum dolor sit amet"
        />
        <Post 
          author="Francine Soares" 
          content="lorem ipsum dolor sit amet lorem ipsum"
        />
      </main>
    </div>
    </>
  )
}

export default App
