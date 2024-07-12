import React, { useState } from "react";
import { useCanister } from "@connect2ic/react";
import { resizeImage, fileToCanisterBinaryStoreFormat } from "../utils/image";
import { useDropzone } from "react-dropzone";

const ImageMaxWidth = 2048;

const CrearProducto = ({ onProductoCreado }) => {
  const [dulcestradicionalesCanister] = useCanister("dulcestradicionalesCanister");
  const [nombreProducto, setNombreProducto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [nombreArtesano, setNombreArtesano] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
    onDrop: async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        try {
          const firstFile = acceptedFiles[0];
          const newFile = await resizeImage(firstFile, ImageMaxWidth);
          setFile(newFile);
        } catch (error) {
          console.error(error);
        }
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Loading...");

    try {
      const fileArray = await fileToCanisterBinaryStoreFormat(file);
      await dulcestradicionalesCanister.crearProductos({
        nombreProducto,
        idProducto: "",
        descripcion,
        precio,
        nombreArtesano,
        imagen: fileArray,
      });
      setLoading("Done");
      onProductoCreado(); // Llamar al callback para notificar que se ha creado un nuevo producto
    } catch (error) {
      console.error("Error al crear producto:", error);
      setLoading("Error");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col p-4 w-full">
      <h1 className="h1 text-center border-b border-gray-500 pb-2">Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center border mt-4 border-gray-500 p-5 space-x-2 w-96">
          <div className="flex flex-col space-y-2 w-full">
            <label htmlFor="nombreProducto">Nombre del Producto</label>
            <input
              id="nombreProducto"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={nombreProducto}
              onChange={(e) => setNombreProducto(e.target.value)}
            />
            <label htmlFor="descripcion">Descripción</label>
            <input
              id="descripcion"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <label htmlFor="precio">Precio</label>
            <input
              id="precio"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
            <label htmlFor="nombreArtesano">Nombre del Artesano</label>
            <input
              id="nombreArtesano"
              required
              className="border border-gray-500 px-2"
              type="text"
              value={nombreArtesano}
              onChange={(e) => setNombreArtesano(e.target.value)}
            />
            <button className="w-full" {...getRootProps({ className: "dropzone" })}>
              <p className="bg-gray-950 hover:bg-gray-900 text-white p-2">Seleccionar imagen</p>
              <input required {...getInputProps()} />
            </button>
            <p className="mt-2 border-b border-gray-500">{file ? file.name : "No file selected"}</p>
            <button type="submit" className="w-full p-2 rounded-sm bg-gray-950 hover:bg-gray-900 text-white text-lg font-bold">
              Crear Producto
            </button>
          </div>
        </div>
      </form>
      <p className="mx-2">{loading}</p>
    </div>
  );
};

export default CrearProducto;
