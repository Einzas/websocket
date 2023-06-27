import { useEffect, useState } from "react";

const StudentList = ({ data, vote, deleteStudent, changeStudentName }) => {
  const [students, setStudents] = useState(data);

  const handleChangeName = (e, id) => {
    const newName = e.target.value;
    setStudents((students) =>
      students.map((student) => {
        if (student.id === id) {
          student.name = newName;
        }
        return student;
      })
    );
  };

  const onLostFocus = (id, name) => {
    changeStudentName(id, name);
  };

  useEffect(() => {
    setStudents(data);
  }, [data]);

  const createRows = () => {
    return students.map((student) => (
      <tr className="text-center" key={student.id}>
        <td>
          <button onClick={() => vote(student.id)} className="btn btn-primary">
            +
          </button>
        </td>
        <td>
          <input
            onChange={(e) => handleChangeName(e, student.id)}
            onBlur={() => onLostFocus(student.id, student.name)}
            type="text"
            className="form-control"
            value={student.name}
          />
        </td>
        <td>{student.votes}</td>
        <td>
          <button
            onClick={() => deleteStudent(student.id)}
            className="btn btn-outline-danger"
          >
            Borrar
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <h3>Estudiantes Actuales</h3>

      <table className="table table-dark table-striped">
        <thead>
          <tr className="text-center">
            <th></th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>{createRows()}</tbody>
      </table>
    </>
  );
};

export default StudentList;
