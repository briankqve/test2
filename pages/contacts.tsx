import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'

export default function Contacts() {
  return (
    <>
      <Head>
        <title>Контакты - Свяжитесь с нами | Тестовый сайт</title>
        <meta name="description" content="Свяжитесь с нами для получения дополнительной информации. Мы готовы ответить на ваши вопросы и помочь с решением задач." />
        <meta name="keywords" content="контакты, связаться, вопросы, поддержка, телефон, связь" />
        <meta property="og:title" content="Контакты - Свяжитесь с нами" />
        <meta property="og:description" content="Свяжитесь с нами для получения дополнительной информации. Мы готовы ответить на ваши вопросы." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.vercel.app/contacts" />
        <link rel="alternate" hrefLang="ru" href="https://testik1-hzxt.vercel.app/" />
      </Head>
      
      <Navigation />
      
      <main className="container">
        <div style={{ padding: '2rem 0' }}>
          <h1>Контакты</h1>
          
          <div style={{ marginTop: '3rem', maxWidth: '600px' }}>
            <div style={{ 
              backgroundColor: '#f8f9fa', 
              padding: '2rem', 
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Свяжитесь с нами</h2>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#555' }}>Телефон</h3>
                <a 
                  href="tel:+88005553535" 
                  style={{ 
                    fontSize: '1.2rem',
                    color: '#007bff',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  +88005553535
                </a>
                <p style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.9rem', 
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  Проще позвонить, чем у кого-то занимать
                </p>
              </div>
              
              <div style={{ 
                backgroundColor: '#e7f3ff',
                padding: '1rem',
                borderRadius: '4px',
                borderLeft: '4px solid #007bff'
              }}>
                <p style={{ margin: 0, color: '#0056b3' }}>
                  <strong>Время работы:</strong> Пн-Пт с 9:00 до 18:00<br/>
                  <strong>Выходные:</strong> Сб-Вс (по предварительной договоренности)
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <h2>Как мы можем помочь?</h2>
            <div style={{ 
              marginTop: '1rem', 
              lineHeight: '1.8',
              maxWidth: '600px'
            }}>
              <p>
                Мы готовы ответить на ваши вопросы о наших услугах, предоставить консультацию 
                по техническим вопросам и обсудить возможности сотрудничества. 
              </p>
              <p>
                Если у вас есть конкретные задачи или проекты, требующие решения, 
                не стесняйтесь связаться с нами - мы всегда открыты для диалога.
              </p>
            </div>
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

