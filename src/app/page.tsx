"use client";

import { useState } from "react";
import Image from "next/image"; // 👈 Importa el componente Image de Next.js

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intelligence, setIntelligence] = useState("");
  const [softSkills, setSoftSkills] = useState("");
  const [hardSkills, setHardSkills] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email });
    alert("¡Formulario enviado! Revisa la consola.");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-50 p-8">
      {/* 👇 Logo arriba del título */}
      <Image 
        src="/logo.png"  // Ruta desde la carpeta public/
        alt="Logo Cognify"
        width={120}
        height={120}
        className="mb-6"
      />

      <h1 className="text-4xl font-bold mb-6 text-blue-900">Registro Cognify</h1>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <label className="block mb-4">
          <span className="block mb-1 font-semibold">Nombre completo</span>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="block mb-1 font-semibold">Correo electrónico</span>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
        
          />
        </label>

        <button 
          type="submit"
          className="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
      </form>
    </main>
  );
}

