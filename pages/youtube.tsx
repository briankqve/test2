import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function YouTube() {
  return (
    <>
      <Head>
        <title>История YouTube - Развитие видеоплатформы | Тестовый сайт</title>
        <meta name="description" content="Изучите увлекательную историю создания и развития YouTube - крупнейшей видеоплатформы в мире. От первых дней до современного состояния." />
        <meta name="keywords" content="YouTube история, создание YouTube, видеоплатформа, онлайн видео, развитие интернет технологий, цифровая революция" />
        <meta property="og:title" content="История YouTube - Развитие видеоплатформы" />
        <meta property="og:description" content="Изучите увлекательную историю создания и развития YouTube - крупнейшей видеоплатформы в мире." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.vercel.app/youtube" />
        <link rel="alternate" hrefLang="ru" href="https://testik1-hzxt.vercel.app/youtube" />
      </Head>
      
      <Navigation />
      
      <main className="container">
        <div style={{ padding: '2rem 0' }}>
          <h1>История создания YouTube</h1>
          
          <div style={{ marginTop: '2rem', lineHeight: '1.8' }}>
            <p>
              YouTube был создан в феврале 2005 года тремя бывшими сотрудниками PayPal: Чедом Хёрли, 
              Стивеном Ченом и Джаведом Каримом. Идея платформы родилась из их желания поделиться 
              видео с друзьями после вечеринки. Первоначально сервис задумывался как сайт знакомств, 
              но быстро эволюционировал в универсальную видеоплатформу. Первое видео "Я в зоопарке" 
              было загружено 23 апреля 2005 года и положило начало новой эре цифрового контента.
            </p>
            
            <p>
              В 2006 году YouTube был приобретен корпорацией Google за 1,65 миллиарда долларов США, 
              что стало одним из самых значительных приобретений в истории интернет-индустрии. 
              Под руководством Google платформа быстро масштабировалась, добавив поддержку разных 
              языков, интеграцию с социальными сетями и систему монетизации для создателей контента. 
              Революционная идея позволить любому пользователю загружать и делиться видео изменила 
              способ потребления медиа во всем мире.
            </p>
            
            <p>
              Сегодня YouTube является второй по посещаемости поисковой системой в мире, уступая только 
              Google. Платформа насчитывает более 2 миллиардов активных пользователей ежемесячно и 
              доступна на 80 языках в 100 странах. YouTube породил новое поколение цифровых знаменитостей 
              и создал целую индустрию контент-маркетинга, образовательных программ и развлечений, 
              кардинально изменив медиаландшафт XXI века.
            </p>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>Официальный канал YouTube</h2>
            <a 
              href="https://www.youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-block',
                padding: '1rem 2rem', 
                backgroundColor: '#ff0000', 
                color: 'white', 
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Перейти на YouTube.com
            </a>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </main>
      
      <footer>
        <div className="container">
          <p>&copy; 2025 Тестовый сайт. Все права защищены.</p>
        </div>
      </footer>
    </>
  )
}

