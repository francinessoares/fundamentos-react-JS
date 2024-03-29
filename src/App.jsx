import { Post } from './components/Post';
import { Header } from './components/Header'
import { Sidebar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/francinessoares.png',
      name: 'Francine Soares',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-06-13 20:00:00'),  
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/maykbrito' },
    ],
    publishedAt: new Date('2023-06-13 20:00:00'),
  },
];


function App() {
  return (
    <>
      <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
       { posts.map(post =>  {
        return (
          <Post
            author={[post.author]}
            content={[post.content]}
            publishedAt={[post.publishedAt]}
          />
        )
       }) }
      </main>
    </div>
    </>
  )
}

export default App
