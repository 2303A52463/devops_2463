import React from 'react'

export default function StudentCard({ student }) {
  const subjects = Object.keys(student.marks)
  const marksArr = Object.values(student.marks)
  const total = marksArr.reduce((s, v) => s + v, 0)
  const maxPerSubject = 100
  const percentage = (total / (subjects.length * maxPerSubject)) * 100

  function gradeFromPercent(p) {
    if (p >= 90) return 'A+'
    if (p >= 80) return 'A'
    if (p >= 70) return 'B'
    if (p >= 60) return 'C'
    return 'F'
  }

  const grade = gradeFromPercent(percentage)

  return (
    <article className="card">
      <div className="card-header">
        <div>
          <h2 className="student-name">{student.name}</h2>
          <div className="roll">Roll: <strong>{student.roll}</strong></div>
        </div>
        <div className="grade-badge">{grade}</div>
      </div>

      <div className="marks-list">
        {subjects.map((sub) => (
          <div className="mark-row" key={sub}>
            <span className="subject">{sub}</span>
            <span className="score">{student.marks[sub]}</span>
          </div>
        ))}
      </div>

      <div className="card-footer">
        <div className="total">Total: {total} / {subjects.length * maxPerSubject}</div>
        <div className="percent">{percentage.toFixed(2)}%</div>
      </div>

      <div className="progress-bar">
        <div className="progress" style={{ width: `${Math.min(100, percentage)}%` }} />
      </div>
    </article>
  )
}
