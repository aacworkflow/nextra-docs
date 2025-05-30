# Базовый образ Node.js
FROM node:18-alpine

# Рабочая директория
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Собираем проект
RUN npm run build

# Порт для доступа
EXPOSE 3000

# Команда запуска
CMD ["npm", "start"]