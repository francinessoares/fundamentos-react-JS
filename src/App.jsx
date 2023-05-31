import { Post } from './Post';

import './styles.css';

function App() {
  return (
    <>
      <Post 
        author="Francine Soares" 
        content="lorem ipsum dolor sit amet"
      />
      <Post 
        author="Francine Soares" 
        content="lorem ipsum dolor sit amet lorem ipsum"
      />
    </>
  )
}

export default App
