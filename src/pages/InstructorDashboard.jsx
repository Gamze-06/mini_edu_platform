function InstructorDashboard() {
  return (
    <div className="container">
      <div className="dashboard-header">
        <div>
          <h2>Eğitmen Panelin</h2>
          <p className="dashboard-subtitle">
            Eğitimlerin ve canlı ders taleplerin
          </p>
        </div>
      </div>

      <div className="dashboard-card">
        <h4>Aktif Eğitimler</h4>
        <p className="dashboard-muted">React 101</p>
        <p className="dashboard-muted">Advanced JavaScript</p>
      </div>

      <div className="dashboard-card">
        <h4>Canlı Ders Talepleri</h4>
        <p className="dashboard-muted">
          Şu anda atanmış canlı ders bulunmuyor.
        </p>
      </div>
    </div>
  );
}

export default InstructorDashboard;
