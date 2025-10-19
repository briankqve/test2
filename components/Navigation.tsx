import Link from 'next/link'
import React from 'react'

export default function Navigation(): React.ReactElement {
  return (
    <header>
      <nav className="container">
        <div>
          <Link href="/">
            <h2>Тестовый Сайт</h2>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/youtube">YouTube</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
