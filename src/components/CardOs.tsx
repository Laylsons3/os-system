"use client";

import React, { useState } from "react";

interface FormData {
  name: string;
  department: string;
  sector: string;
  address: string;
  problem: string;
}

export default function CardOs() {
  const initialFormData: FormData = {
    name: "",
    department: "",
    sector: "",
    address: "",
    problem: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviar para o servidor
    console.log([formData]);
    const storedData = localStorage.getItem("_os_data");
    const data = storedData ? JSON.parse(storedData) : [];
    data.push(formData);

    console.log("data", data);
    localStorage.setItem("_os_data", JSON.stringify(data));
    // Após o envio, você pode redefinir o estado do formulário
    setFormData(initialFormData);
  };

  return (
    <div
      id="borda do card"
      className="bg-zinc-100/70 text-zinc-800 p-4 rounded border-zinc-100/80 border-2 w-full max-w-sm"
    >
      <div id="corpo do card" className="flex flex-col w-full gap-y-4">
        <div id="titulo do card" className="text-center font-bold text-lg">
          <h1>Nova Ordem de Serviço</h1>
        </div>
        <form
          onSubmit={handleSubmit}
          id="main do card"
          className="flex flex-col gap-y-2 gap-x-2 w-full"
        >
          <div id="item do card" className="flex w-full gap-x-2">
            <label>Nome:</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 pl-1 bg-white/80 rounded border shadow-inner shadow-zinc-300 border-zinc-400"
              placeholder="Digite seu nome"
            />
          </div>
          <div id="item do card" className="flex w-full gap-x-2">
            <label>Secretaria:</label>
            <input
              required
              type="text"
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="flex-1 pl-1 bg-white/80 rounded border shadow-inner shadow-zinc-300 border-zinc-400"
              placeholder="Digite sua secretaria"
            />
          </div>
          <div id="item do card" className="flex w-full gap-x-2">
            <label>Setor:</label>
            <input
              required
              type="text"
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
              className="flex-1 pl-1 bg-white/80 rounded border shadow-inner shadow-zinc-300 border-zinc-400"
              placeholder="Digite seu setor"
            />
          </div>
          <div id="item do card" className="flex w-full gap-x-2">
            <label>Endereço:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="flex-1 pl-1 bg-white/80 rounded border shadow-inner shadow-zinc-300 border-zinc-400"
              placeholder="Digite o endereço completo"
            />
          </div>
          <div id="item do card" className="flex w-full flex-col">
            <label>Reclamação:</label>
            <textarea
              required
              name="problem"
              value={formData.problem}
              onChange={handleInputChange}
              className="flex-1 pl-1 bg-white/80 rounded border shadow-inner shadow-zinc-300 border-zinc-400"
              placeholder='Descreva seu problema. "Ex: O monitor não está ligando..."'
            />
          </div>
          <button
            className="bg-zinc-100 rounded border border-zinc-400 py-1 hover:bg-zinc-200 shadow-inner shadow-zinc-400"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
