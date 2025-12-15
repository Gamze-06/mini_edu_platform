import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import { fakePayment } from "../services/paymentService";
import { findInstructor } from "../services/matchingService";

function UserDashboard() {
  const [ownedCourses, setOwnedCourses] = useState([]);

  //  Mini Udemy – Eğitim satın alma
  const handleBuy = async (course) => {
    const res = await fakePayment();

    if (res.success) {
      setOwnedCourses((prev) => [...prev, course]);
      alert("Ödeme başarılı! Eğitim hesabınıza tanımlandı.");
    }
  };

  //  Mini Uber – Canlı ders talebi
  const handleLiveLessonRequest = () => {
    const instructor = findInstructor();

    if (instructor) {
      alert(`Canlı ders için ${instructor.name} atandı`);
    } else {
      alert("Uygun eğitmen bulunamadı");
    }
  };

  return (
    <div className="container">
      
      <div className="dashboard-header">
        <div>
          <h2>Eğitim Panelin</h2>
          <p className="dashboard-subtitle">
            Satın alabileceğin eğitimler ve canlı ders talepleri
          </p>
        </div>
      </div>

      
      <h3>Eğitimler</h3>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onBuy={handleBuy}
            owned={ownedCourses.some((c) => c.id === course.id)}
          />
        ))}
      </div>

      {/* 🧾 Satın alınan eğitimler */}
      <h3>Satın Aldığım Eğitimler</h3>
      {ownedCourses.length === 0 ? (
        <p>Henüz satın alınmış eğitim yok.</p>
      ) : (
        <ul className="owned-list">
          {ownedCourses.map((c) => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      )}

      <div className="live-lesson">
        <h3>Canlı Ders</h3>
        <button onClick={handleLiveLessonRequest}>
          Canlı Ders Talebi Oluştur
        </button>
      </div>
    </div>
  );
}

export default UserDashboard;
