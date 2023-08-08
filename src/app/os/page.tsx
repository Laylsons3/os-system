"use client";

import { useEffect, useState } from "react";

interface OsItem {
  name: string;
  department: string;
  sector: string;
  address: string;
  problem: string;
}

export default function Os() {
  const [items, setItems] = useState<OsItem[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("_os_data");
    const data = storedData ? JSON.parse(storedData) : [];
    setItems(data);
  }, []);

  console.log(items);

  return (
    <div className="flex w-full flex-col justify-center items-center h-full mt-2">
      <table>
        <thead>
          <tr>
            <th className="px-4">OS Nº</th>
            <th className="px-4">Nome</th>
            <th className="px-4">Secretaria</th>
            <th className="px-4">Setor</th>
            <th className="px-4">Endereço</th>
            <th className="px-4">Problema</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="text-center mx-4">
              <td className="px-4">{index + 1}</td>
              <td className="px-4">{item.name}a</td>
              <td className="px-4">{item.department}</td>
              <td className="px-4">{item.sector}</td>
              <td className="px-4">{item.address}</td>
              <td className="px-4">{item.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {!items.length && (
        <div className="w-full flex justify-center mt-2">
          Não ha ordens de serviços cadastradas
        </div>
      )}
      <div className="mt-8">
        <a href="/" className="hover:underline">
          voltar para o início
        </a>
      </div>
    </div>
  );
}
