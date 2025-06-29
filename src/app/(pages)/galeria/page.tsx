"use client"; 
import { useState } from "react";

const imagens = [
  {
    url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    titulo: "Milho - Crescimento",
    setor: "A-1",
    data: "2024-06-22 08:30",
  },
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
    titulo: "Soja - Floração",
    setor: "A-2",
    data: "2024-06-22 09:15",
  },
  {
    url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    titulo: "Trigo - Desenvolvimento",
    setor: "B-1",
    data: "2024-06-22 10:00",
  },
  {
    url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400",
    titulo: "Milho - Maturação",
    setor: "A-3",
    data: "2024-06-22 11:45",
  },
  {
    url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400",
    titulo: "Soja - Vagem",
    setor: "B-2",
    data: "2024-06-22 13:20",
  },
  {
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
    titulo: "Análise de Pragas",
    setor: "A-1",
    data: "2024-06-22 14:30",
  },
];

export default function Galeria() {
  const [busca, setBusca] = useState("");
  const [filtroSetor, setFiltroSetor] = useState("todos");

  const imagensFiltradas = imagens.filter((img) => {
    const buscaLower = busca.toLowerCase();
    const tituloMatch = img.titulo.toLowerCase().includes(buscaLower);
    const setorMatch = img.setor.toLowerCase().includes(buscaLower);
    const filtroSetorMatch =
      filtroSetor === "todos" || img.setor === filtroSetor;
    return (tituloMatch || setorMatch) && filtroSetorMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Galeria de Imagens
            </h1>
            <p className="text-gray-600 mt-2">
              Fotos coletadas pelo robô CID nos cultivos
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Buscar por cultivo ou setor..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-filter text-gray-400 h-5 w-5"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  value={filtroSetor}
                  onChange={(e) => setFiltroSetor(e.target.value)}
                >
                  <option value="todos">Todos os Setores</option>
                  <option value="A-1">Setor A-1</option>
                  <option value="A-2">Setor A-2</option>
                  <option value="A-3">Setor A-3</option>
                  <option value="B-1">Setor B-1</option>
                  <option value="B-2">Setor B-2</option>
                  <option value="B-3">Setor B-3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {imagensFiltradas.length === 0 && (
              <div className="col-span-full text-center text-gray-500 py-10">
                Nenhuma imagem encontrada.
              </div>
            )}
            {imagensFiltradas.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={img.url}
                    alt={img.titulo}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-eye h-5 w-5 text-gray-600"
                      >
                        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    </button>
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-download h-5 w-5 text-gray-600"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {img.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">Setor {img.setor}</p>
                  <p className="text-xs text-gray-500">{img.data}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
