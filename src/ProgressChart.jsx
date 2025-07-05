import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function ProgressChart({ subjects }) {
  const competitorData = [
    { name: "Nikita", progress: averageProgress(subjects) },
    { name: "Amit", progress: 55 },
    { name: "Priya", progress: 42 },
    { name: "Rahul", progress: 68 },
  ];

  return (
    <div style={{ marginTop: "40px", height: 300 }}>
      <h2 style={{ textAlign: "center" }}>📊 Your Progress vs Others</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={competitorData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Bar dataKey="progress" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function averageProgress(subjects) {
  if (subjects.length === 0) return 0;
  const total = subjects.reduce((acc, s) => acc + s.progress, 0);
  return Math.round(total / subjects.length);
}

export default ProgressChart;
