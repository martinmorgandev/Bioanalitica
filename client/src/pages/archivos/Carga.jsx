import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Carga = () => {
  const [files, setFiles] = useState([]);

  const onDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const response2 = await axios.post(
        `http://localhost:4000/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error subiendo el archivo:", error);
    }
  };

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/list`);
        // console.log(response.data);
        setFiles(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de archivos:", error);
      }
    };
    fetchFiles();
  }, [files]);

  const downloadFile = async (filename) => {
    try {
      const response = await axios.get(`http://localhost:4000/download/${filename}`, {
        responseType: 'blob', // Indicamos que esperamos un archivo blob
      });
      console.log(response)

      // const blob = new Blob([response.data]);
      // const link = document.createElement('a');
      // link.href = URL.createObjectURL(blob);
      // link.download = filename;
      // link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
    // console.log(filename)
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="card mt-4 p-4">
            <div className="card-body">
              <h3>Suleta tu archivo aqui..</h3>
            </div>
          </div>
        ) : (
          <div className="card mt-4 p-4">
            <div className="card-body">
              <h3>
                Arrastra y suelta un archivo aquí, o haz clic para seleccionar
                uno
              </h3>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2>Lista de Archivos</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
            {file} - {' '}
            {/* {console.log(file)} */}
            <button onClick={() => console.log(file)}>Descargar</button>
          </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carga;
