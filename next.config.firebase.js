/** @type {import('next').NextConfig} */
const nextConfig = {
  // Для Firebase Hosting нужен статический экспорт
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // SEO настройки
  poweredByHeader: false,
  // Базовый путь для Firebase (если нужен)
  assetPrefix: '',
  basePath: ''
}

module.exports = nextConfig
