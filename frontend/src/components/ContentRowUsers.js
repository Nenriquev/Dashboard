import CardRow from "./CardRow";
import CardLastUser from "./CardLastUser";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

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
      <div className="ContentRowUsersConteiner">
      <Typography
          gutterBottom
          fontFamily={"Console"}
          variant="h3"
          component="div"
          sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88" }}
        >
          Users
        </Typography>
       

        <div className="ContentRowUsers">
          <div>
            {data.map((element, index) => {
              return (
                <>
                  <CardRow key={index} props={element} />
                </>
              );
            })}
          </div>
          <div>
            <CardLastUser
              img={dataLastUser.img}
              names={dataLastUser.names}
              email={dataLastUser.email}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentRowUsers;
