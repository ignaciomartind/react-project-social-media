import "./user.css";

import { useParams } from "react-router-dom";

export default function User() {
  let { id } = useParams();

  const users = [
    {
      id: 1,
      job: "Developer",
      lang: "Español",
    },
    {
      id: 2,
      job: "Jardinero",
      lang: "Español",
    },
    {
      id: 3,
      job: "Bartender",
      lang: "Portugués",
    },
  ];

  id = parseInt(id);
  let currentUser = users.filter((user) => user.id === id);

  console.log(currentUser);

  if (currentUser.length === 0) {
    return (
      <div className="user">
        <p>No se encontró el usuario.</p>
      </div>
    );
  } else if (currentUser !== []) {
    return (
      <div className="user">
        <p>
          Id del usuario: <span className="user-hl">{currentUser[0].id}</span>
        </p>
        <p>
          Trabajo: <span className="user-hl">{currentUser[0].job}</span>
        </p>
        <p>
          Idioma: <span className="user-hl">{currentUser[0].lang}</span>
        </p>
      </div>
    );
  }
}
