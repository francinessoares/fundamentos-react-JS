import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.Comment}>
            <img src="https://github.com/francinessoares.png" />

            <div className={styles.CommentBox}>
                <div className={styles.CommentContent}>
                    <header>
                        <div className={styles.AuthorAndTime}>
                            <strong>Francine Soares</strong>
                            <time title="11 de Maio às 08:11h" dateTime="2023-05-11 08:11:30">Publicado há 1h</time>
                        </div>

                        <button title="Deletar comentario">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
