# Nextra Документация

[![Docker](https://img.shields.io/badge/Docker-поддержка-blue)](https://www.docker.com)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black)](https://nextjs.org)

Русскоязычная документация проекта на базе Nextra.

## Установка

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev
```

## Docker

### Сборка и запуск

```bash
docker-compose up --build
```

### Доступные сервисы

- Документация: http://localhost:3000
- Просмотр логов: `docker-compose logs -f`

## Структура проекта

- `/docs` - Markdown/MDX файлы документации
- `/app` - Next.js layout и страницы
- `/public` - Статические файлы