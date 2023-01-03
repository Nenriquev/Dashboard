import { useEffect, useState } from "react";
import ImgMediaCard from "./Card";
import CardTotalUsers from "./CardTotalUsers";


const ContentRowUsers = (props) => {
  const [users, setUsers] = useState([]);
  let [dataLastUser, setDataLastUser] = useState({
    names: "-",
    email: "-",
    img: "-",
  });

  useEffect(() => {
    fetch("/api/users/")
      .then((response) => response.json())
      .then((users) => {
        setUsers(users.count);

        let idUsers = users.users.map((user) => user.id);
        const idLastUserCreate = Math.max(...idUsers);

        fetch(`/api/users/${idLastUserCreate}`)
          .then((response) => response.json())
          .then((users) => {
            console.log(users);
            setDataLastUser({
              names: users.users.names,
              email: users.users.email,
              img: users.users.img,
            });
          });
      });
  }, []);

  return (
    <div className="userRow">
        <h1>Users</h1>
        
          <div className="userCol">
            <CardTotalUsers number={users} />
            <ImgMediaCard
              img={dataLastUser.img}
              names={dataLastUser.names}
              email={dataLastUser.email}
            />
          </div>
    </div>
  );
};

export default ContentRowUsers;
