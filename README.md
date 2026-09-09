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

