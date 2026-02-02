import React from 'react'
import StudentCard from './components/StudentCard'

const students = [
  {
    name: 'Alice Johnson',
    roll: 101,
    marks: { Math: 92, English: 88, Science: 95, History: 81 }
  },
  {
    name: 'Bob Lee',
    roll: 102,
    marks: { Math: 75, English: 68, Science: 72, History: 70 }
  },
  {
    name: 'Carmen Diaz',
    roll: 103,
    marks: { Math: 84, English: 79, Science: 81, History: 85 }
  }
]

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Marks Card</h1>
        <p className="subtitle">Parent (`App`) passes student objects to the child (`StudentCard`) via props.</p>
      </header>

      <main className="cards-grid">
        {students.map((stu) => (
          <StudentCard key={stu.roll} student={stu} />
        ))}
      </main>

      <footer className="footer">Reusable component demo • Props • Total & Grade computed in child</footer>
    </div>
  )
}
