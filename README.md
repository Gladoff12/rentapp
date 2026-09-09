# RentGear — Аренда фото и видеооборудования

Полноценное веб-приложение: React frontend + Node.js/Express backend + SQLite.

## Возможности

- Каталог оборудования с категориями, поиском и фильтрацией
- Карточка товара с проверкой доступности по датам
- Бронирование с автоматическим расчётом стоимости и залога
- Регистрация / вход (JWT-авторизация)
- Личный кабинет клиента со списком бронирований и отменой
- Админ-панель: статистика, управление оборудованием (CRUD), управление статусами бронирований
- Готовые тестовые данные (16 позиций оборудования, 8 категорий)

## Структура проекта

```
rental-app/
├── backend/          # Express API + SQLite
│   ├── server.js     # маршруты API
│   ├── db.js         # схема БД и seed-данные
│   ├── auth.js        # JWT middleware
│   └── rental.db     # база данных (создаётся автоматически)
└── frontend/          # React (Vite)
    └── src/
        ├── pages/      # Catalog, EquipmentDetail, Login, Register, MyBookings, Admin
        ├── components/ # Header, EquipmentCard, ProtectedRoute, EquipmentFormModal
        ├── AuthContext.jsx
        └── api.js
```

## Запуск

### 1. Backend

```bash
cd backend
npm install
node server.js
```

Сервер запустится на `http://localhost:4000`. База данных `rental.db` создастся автоматически при первом запуске с тестовыми данными.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173`.

## Тестовые учётные данные

**Администратор:**
- Email: `admin@rental.com`
- Пароль: `admin123`

Обычного клиента можно зарегистрировать через форму регистрации на сайте.

## API Endpoints

| Метод | Путь | Описание |
|---|---|---|
| POST | `/api/auth/register` | Регистрация |
| POST | `/api/auth/login` | Вход |
| GET | `/api/auth/me` | Текущий пользователь |
| GET | `/api/categories` | Список категорий |
| GET | `/api/equipment` | Каталог (фильтры: `category_id`, `search`) |
| GET | `/api/equipment/:id` | Детали товара |
| GET | `/api/equipment/:id/availability` | Проверка доступности (`start_date`, `end_date`) |
| POST | `/api/equipment` | Добавить товар (admin) |
| PUT | `/api/equipment/:id` | Изменить товар (admin) |
| DELETE | `/api/equipment/:id` | Скрыть товар (admin) |
| POST | `/api/bookings` | Создать бронирование |
| GET | `/api/bookings/my` | Мои бронирования |
| GET | `/api/bookings` | Все бронирования (admin) |
| PUT | `/api/bookings/:id/status` | Изменить статус (admin) |
| PUT | `/api/bookings/:id/cancel` | Отменить бронирование |
| GET | `/api/stats` | Статистика (admin) |

## Технологии

- **Backend:** Node.js, Express, SQLite3, bcryptjs, jsonwebtoken
- **Frontend:** React 19, React Router, Axios, Vite

## Продакшн-заметки

- Перед деплоем задайте `JWT_SECRET` в переменных окружения (см. `.env.example`)
- В `frontend/src/api.js` замените `API_URL` на адрес продакшн-бэкенда
- Для реального проекта рекомендуется добавить загрузку изображений (multer уже установлен), rate-limiting и HTTPS
