import styles from './index.module.css'
import FilmViews from "components/element/FilmViews";

function HomeComponent() {
    const movies = [
        {
            "tittle": "Senden Bana Kalan",
            "poster": "https://i2.milimaj.com/i/milliyet/75/1200x675/5c8dac4945d2a05010d99e92.jpg",
            "duration": "2s 1dk",
            "releaseYear": "17 Nisan 2015",
            "categories": {
                0: "Romantik",
                1: "Dram"
            },
            "director": "Abdullah Oğuz",
            "players": {
                0: "Neslihan Atagül",
                1: "Ekin Koç",
                2: "Zeynep Kankonde"
            },
            "description": "Çocukluğunda annesiz ve babasız kalan Özgür, büyükbabasının mirası sayesinde zorluk görmeden, biraz da şımartılarak büyümüştür. Büyükbabasından kalacak olan miras sayesinde rahat ve sorumsuz bir hayat sürmeyi planlarken 18 yaşına bastığı gün işlerin hiç de umduğu gibi gitmeyeceğini öğrenir. Özgür mirası alabilmek için vasiyetnamede yazan bir şartı yerine getirmek zorundadır. Buna göre İstanbul'dan Çanakkale'nin Adatepe köyüne taşınacak ve burada bir yıl geçirecektir. Özgür bu şartı yerine getirmezse mirasın yalnızca ufak bir kısmını alabilecek, geri kalan kısmı ise hayır kurumlarına bağışlanacaktır. Mirası hak ettiğini düşünen Özgür, Adatepe'ye gider ve kendini bekleyen yeni hayata böylece atılmış olur. Adatepe'de onu büyük sürprizler beklemektedir. En büyük sürpriz ise beklenmedik bir anda hayatına giren Elif olacaktır.\n" +
                "Yönetmenliğini Abdullah Oğuz'un üstlendiği sıcak bir aşk filmi olan yapımda başrolleri genç oyuncular Neslihan Atagül ve Ekin Koç paylaşıyor. ANS Prodüksiyon'un yapımcılığını üstlendiği projenin uyarlama senaryosu ise Levent Kazak'a ait. Filmin oyuncu kadrosunda ayrıca Gamze Pelin Gökçe, Zeynep Kankonde, Sabri Özmener, Wilma Elles ve Doğa Konakoğlu gibi isimler yer alıyor.\n"

        }
    ]
    return (
        <section className={styles.homeSection}>
            {
                movies.length > 0 && movies.map((movie, key) => (
                        <FilmViews key={key}
                                   tittle={movie.tittle}
                                   description={movie.description}
                                   players={movie.players}
                                   director={movie.director}
                                   categories={movie.categories}
                                   releaseYear={movie.releaseYear}
                                   duration={movie.duration}
                                   poster={movie.poster}/>
                    )
                )
            }


        </section>
    );
}

export default HomeComponent;
