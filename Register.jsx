import { useEffect, useState } from 'react';
import api from '../api';

const STATUS_LABELS = {
  pending: 'Ожидает подтверждения',
  confirmed: 'Подтверждено',
  active: 'Активна аренда',
  completed: 'Завершена',
  cancelled: 'Отменена'
};

function formatDate(d) {
  return new Date(d).toLocaleDateString('ru-RU', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    api.get('/bookings/my').then((res) => setBookings(res.data)).finally(() => setLoading(false));
  };

  useEffect(() => { load(); }, []);

  const handleCancel = async (id) => {
    if (!confirm('Отменить это бронирование?')) return;
    await api.put(`/bookings/${id}/cancel`);
    load();
  };

  if (loading) return <div className="loader">Загрузка...</div>;

  return (
    <div className="container">
      <h1 className="page-title">Мои бронирования</h1>
      {bookings.length === 0 ? (
        <div className="empty-state">
          <h3>Пока нет бронирований</h3>
          <p>Перейдите в каталог, чтобы выбрать оборудование</p>
        </div>
      ) : (
        <div className="booking-list">
          {bookings.map((b) => (
            <div className="booking-card" key={b.id}>
              <img className="booking-img" src={b.image_url} alt={b.equipment_name} />
              <div className="booking-info">
                <h3>{b.equipment_name}</h3>
                <div className="booking-dates">{formatDate(b.start_date)} — {formatDate(b.end_date)}</div>
              </div>
              <div className="booking-right">
                <span className={`status-badge status-${b.status}`}>{STATUS_LABELS[b.status]}</span>
                <div className="booking-price">{b.total_price.toLocaleString('ru-RU')} ₽</div>
                {(b.status === 'pending' || b.status === 'confirmed') && (
                  <button className="btn btn-danger btn-sm" onClick={() => handleCancel(b.id)}>Отменить</button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
