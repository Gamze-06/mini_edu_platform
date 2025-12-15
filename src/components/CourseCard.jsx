function CourseCard({ course, onBuy, owned }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <p>
        <strong>Eğitmen:</strong> {course.instructor}
      </p>
      <p>
        <strong>Fiyat:</strong> {course.price} ₺
      </p>

      {owned ? (
        <span className="badge">Satın alındı</span>
      ) : (
        <button onClick={() => onBuy(course)}>Satın Al</button>
      )}
    </div>
  );
}

export default CourseCard;
