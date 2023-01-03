import CardRow from "./CardRow";
import CardLastUser from "./CardLastUser";
import { useEffect, useState } from "react";

const ContentRowUsers = (props) => {
  const [data, setData] = useState([]);
  const [dataLastUser, setDataLastUser] = useState({
    names: "-",
    email: "-",
    img: "-",
  });
  useEffect(() => {
    fetch("/api/users/")
      .then((response) => response.json())
      .then((users) => {
        setData((oldArray) => [
          ...oldArray,
          { category: "Usuarios", icon: "user", count: users.count },
        ]);

        let idUsers = users.users.map((user) => user.id);
        const idLastUserCreate = Math.max(...idUsers);

        fetch(`/api/users/${idLastUserCreate}`)
          .then((response) => response.json())
          .then((users) => {
            setDataLastUser({
              names: users.users.names,
              email: users.users.email,
              img: users.users.img,
            });
          });
        console.log(dataLastUser);
      });
  }, []);

  return (
    <>
      {data.map((element, index) => {
        return (
          <>
            <CardRow key={index} props={element} />
          </>
        );
      })}
      <div>
        <CardLastUser
          img={dataLastUser.img}
          names={dataLastUser.names}
          email={dataLastUser.email}
        />
      </div>
    </>
  );
};

export default ContentRowUsers;
