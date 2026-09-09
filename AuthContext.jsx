:root {
  --bg: #0f1115;
  --bg-soft: #161a21;
  --surface: #1b202a;
  --surface-hover: #222836;
  --border: #2a3140;
  --text: #eef1f6;
  --text-dim: #9aa4b5;
  --accent: #ff6b35;
  --accent-hover: #ff8255;
  --accent-soft: rgba(255, 107, 53, 0.12);
  --success: #34d399;
  --warn: #fbbf24;
  --danger: #f87171;
  --radius: 12px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

* { box-sizing: border-box; }

html, body, #root {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: var(--bg);
  color: var(--text);
}

body {
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }
input, select, textarea { font-family: inherit; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 17, 21, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.02em;
}
.logo-mark {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--accent), #ff9166);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
.nav-links {
  display: flex;
  gap: 28px;
  align-items: center;
}
.nav-links a {
  color: var(--text-dim);
  font-weight: 500;
  font-size: 15px;
  transition: color 0.15s;
}
.nav-links a:hover, .nav-links a.active { color: var(--text); }

.header-actions { display: flex; align-items: center; gap: 12px; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 9px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  transition: all 0.15s;
  white-space: nowrap;
}
.btn-primary { background: var(--accent); color: #fff; }
.btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
.btn-ghost { background: transparent; color: var(--text); border: 1px solid var(--border); }
.btn-ghost:hover { background: var(--surface-hover); }
.btn-sm { padding: 7px 12px; font-size: 13px; }
.btn-danger { background: rgba(248, 113, 113, 0.12); color: var(--danger); }
.btn-danger:hover { background: rgba(248, 113, 113, 0.2); }
.btn-block { width: 100%; }

.user-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 6px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 100px;
  font-size: 14px;
}
.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--accent-soft);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 13px;
}

/* Hero */
.hero {
  padding: 72px 0 48px;
  text-align: center;
}
.hero h1 {
  font-size: 46px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 16px;
}
.hero h1 span { color: var(--accent); }
.hero p {
  color: var(--text-dim);
  font-size: 17px;
  max-width: 560px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.search-bar {
  display: flex;
  gap: 10px;
  max-width: 560px;
  margin: 0 auto;
}
.search-bar input {
  flex: 1;
  padding: 14px 18px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  font-size: 15px;
  outline: none;
}
.search-bar input:focus { border-color: var(--accent); }

/* Category pills */
.category-row {
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 24px 0;
  scrollbar-width: none;
}
.category-row::-webkit-scrollbar { display: none; }
.pill {
  padding: 9px 18px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-dim);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.15s;
}
.pill:hover { border-color: var(--accent); color: var(--text); }
.pill.active { background: var(--accent); border-color: var(--accent); color: #fff; }

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
  padding: 8px 0 60px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-4px); border-color: #3a4256; }
.card-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  background: var(--bg-soft);
}
.card-body { padding: 16px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.card-cat {
  font-size: 12px;
  color: var(--accent);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.card-title { font-size: 16px; font-weight: 700; line-height: 1.3; }
.card-desc {
  font-size: 13.5px;
  color: var(--text-dim);
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}
.price { font-size: 18px; font-weight: 800; }
.price span { font-size: 13px; color: var(--text-dim); font-weight: 500; }
.qty-badge { font-size: 12px; color: var(--success); }
.qty-badge.low { color: var(--warn); }
.qty-badge.none { color: var(--danger); }

/* Detail page */
.detail-wrap {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 48px;
  padding: 40px 0 80px;
}
@media (max-width: 860px) {
  .detail-wrap { grid-template-columns: 1fr; gap: 28px; }
  .hero h1 { font-size: 32px; }
}
.detail-img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  aspect-ratio: 4/3;
  background: var(--bg-soft);
}
.detail-info h1 { font-size: 28px; margin: 0 0 6px; letter-spacing: -0.02em; }
.detail-meta { color: var(--text-dim); font-size: 14px; margin-bottom: 20px; }
.detail-desc { line-height: 1.7; color: #cbd2de; margin-bottom: 24px; }

.book-box {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}
.book-box .price-big { font-size: 26px; font-weight: 800; margin-bottom: 4px; }
.book-box .price-big span { font-size: 14px; color: var(--text-dim); font-weight: 500; }
.deposit-note { font-size: 13px; color: var(--text-dim); margin-bottom: 20px; }

.date-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; }
.field label {
  display: block;
  font-size: 12.5px;
  color: var(--text-dim);
  margin-bottom: 6px;
  font-weight: 600;
}
.field input, .field select {
  width: 100%;
  padding: 11px 12px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: var(--bg-soft);
  color: var(--text);
  font-size: 14px;
  outline: none;
}
.field input:focus, .field select:focus { border-color: var(--accent); }

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid var(--border);
  margin: 12px 0 16px;
  font-weight: 700;
}
.availability-note {
  font-size: 13px;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 14px;
}
.availability-note.ok { background: rgba(52, 211, 153, 0.1); color: var(--success); }
.availability-note.bad { background: rgba(248, 113, 113, 0.1); color: var(--danger); }

/* Auth */
.auth-wrap {
  max-width: 400px;
  margin: 60px auto;
  padding: 32px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
}
.auth-wrap h2 { margin: 0 0 6px; font-size: 24px; }
.auth-wrap .sub { color: var(--text-dim); font-size: 14px; margin-bottom: 24px; }
.field-group { margin-bottom: 14px; }
.error-msg {
  background: rgba(248, 113, 113, 0.1);
  color: var(--danger);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13.5px;
  margin-bottom: 16px;
}
.switch-line { text-align: center; margin-top: 18px; font-size: 14px; color: var(--text-dim); }
.switch-line a { color: var(--accent); font-weight: 600; }

/* Bookings */
.page-title { font-size: 26px; font-weight: 800; margin: 40px 0 24px; letter-spacing: -0.02em; }
.booking-list { display: flex; flex-direction: column; gap: 14px; padding-bottom: 60px; }
.booking-card {
  display: flex;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  align-items: center;
}
.booking-img { width: 84px; height: 84px; border-radius: 10px; object-fit: cover; background: var(--bg-soft); flex-shrink: 0; }
.booking-info { flex: 1; min-width: 0; }
.booking-info h3 { margin: 0 0 4px; font-size: 16px; }
.booking-dates { color: var(--text-dim); font-size: 13.5px; }
.booking-right { text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 8px; }
.booking-price { font-weight: 700; font-size: 16px; }

.status-badge {
  display: inline-block;
  padding: 4px 11px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 700;
}
.status-pending { background: rgba(251, 191, 36, 0.15); color: var(--warn); }
.status-confirmed { background: rgba(96, 165, 250, 0.15); color: #60a5fa; }
.status-active { background: rgba(52, 211, 153, 0.15); color: var(--success); }
.status-completed { background: rgba(154, 164, 181, 0.15); color: var(--text-dim); }
.status-cancelled { background: rgba(248, 113, 113, 0.15); color: var(--danger); }

/* Admin */
.admin-tabs { display: flex; gap: 8px; margin-bottom: 24px; border-bottom: 1px solid var(--border); }
.admin-tab {
  padding: 12px 4px;
  margin-right: 24px;
  color: var(--text-dim);
  font-weight: 600;
  font-size: 14.5px;
  border-bottom: 2px solid transparent;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
}
.admin-tab.active { color: var(--text); border-bottom-color: var(--accent); }

.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 32px; }
.stat-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}
.stat-card .label { font-size: 13px; color: var(--text-dim); margin-bottom: 6px; }
.stat-card .value { font-size: 26px; font-weight: 800; }

table { width: 100%; border-collapse: collapse; background: var(--surface); border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); }
th, td { padding: 12px 14px; text-align: left; font-size: 13.5px; border-bottom: 1px solid var(--border); }
th { color: var(--text-dim); font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.03em; background: var(--bg-soft); }
tr:last-child td { border-bottom: none; }

.modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  display: flex; align-items: center; justify-content: center; z-index: 100; padding: 20px;
}
.modal {
  background: var(--surface); border: 1px solid var(--border); border-radius: 16px;
  padding: 28px; max-width: 480px; width: 100%; max-height: 90vh; overflow-y: auto;
}
.modal h2 { margin: 0 0 20px; font-size: 20px; }
.form-grid { display: grid; gap: 14px; }
.modal-actions { display: flex; gap: 10px; margin-top: 20px; }

.empty-state { text-align: center; padding: 60px 20px; color: var(--text-dim); }
.empty-state h3 { color: var(--text); margin-bottom: 8px; }

.loader { text-align: center; padding: 60px; color: var(--text-dim); }

.select-wrap { position: relative; }
