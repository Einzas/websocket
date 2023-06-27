import React, { useState } from "react";

const StudentAdd = ({ createStudent }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim().length > 0) {
      createStudent(value);
      setValue("");
    }
  };

  return (
    <>
      <h3 className="mb-5"> Agregar Estudiante</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre del Estudiante"
          autoComplete="off"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
};

export default StudentAdd;
