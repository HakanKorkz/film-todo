import styles from './film.module.css'

function FilmViews(props) {
    return (
        <div className={styles.filmContainer}>
            <div className={styles.filmPoster}>
                <img src={props.poster} alt={props.tittle}/>
                <div className={styles.filmInfo}>
                    <div className={styles.filmInfoLeft}>
                        <h1>{props.tittle}</h1>
                        <div className={styles.littleInfo}>
                           <span>
                               {`Çıkış Yılı: ${props.releaseYear}`}
                           </span>
                            <span>
                               {`Süresi: ${props.duration}`}
                           </span>
                            <span>
                               {`Yönetmen: ${props.director}`}
                           </span>
                            {
                               
                            }
                        </div>
                    </div>
                    <div className={styles.description}>
                        {
                            props.description
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmViews;
