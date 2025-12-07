import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    async function getData() {
      const url = "http://localhost:3310/api/programs";
      const response = await fetch(url);
      const result = await response.json();
      setPrograms(result);
    }

    getData();
  }, []);

  return (
    <main>
      <h1>Liste des séries</h1>

      <ul>
        {programs.map((program) => (
          <li key={program.id}>
            <h2>{program.title}</h2>
            <p>
              {program.year} · {program.country}
            </p>
            <img src={program.poster} alt={program.title} width={150} />
            <p>{program.synopsis}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
