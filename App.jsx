import { Link } from 'react-router-dom';

export default function EquipmentCard({ item }) {
  return (
    <Link to={`/equipment/${item.id}`} className="card">
      <img className="card-img" src={item.image_url} alt={item.name} loading="lazy" />
      <div className="card-body">
        <div className="card-cat">{item.category_name || 'Оборудование'}</div>
        <div className="card-title">{item.name}</div>
        <div className="card-desc">{item.description}</div>
        <div className="card-footer">
          <div className="price">
            {item.price_per_day.toLocaleString('ru-RU')} ₽<span> / день</span>
          </div>
          <div className={`qty-badge ${item.quantity <= 0 ? 'none' : item.quantity <= 2 ? 'low' : ''}`}>
            {item.quantity > 0 ? `В наличии: ${item.quantity}` : 'Нет в наличии'}
          </div>
        </div>
      </div>
    </Link>
  );
}
