function AdminDashboard() {
  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h2>Yönetim Paneli</h2>
          <p className="dashboard-subtitle">
            Sistem durumu ve yönetim işlemleri
          </p>
        </div>
      </div>

      <div className="dashboard-card">
        <h4>Sistem Özeti</h4>
        <p className="dashboard-muted">Toplam Kullanıcı: 120</p>
        <p className="dashboard-muted">Toplam Eğitmen: 8</p>
        <p className="dashboard-muted">Toplam Eğitim: 15</p>
      </div>

      <div className="dashboard-card dashboard-actions">
        <h4>Yönetim İşlemleri</h4>
        <button>Kullanıcıları Yönet</button>
        <button>Eğitimleri Yönet</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
