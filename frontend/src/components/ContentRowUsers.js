import { useEffect, useState } from "react";
import ImgMediaCard from "./Card";
import CardTotalUsers from "./CardTotalUsers";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

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
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          bgcolor: "#1E0943",
          margin: "10px 20px 10px",
          padding: "0px 20px 10px",
          color: "white",
        }}
      >
        <h1>Users</h1>
        <Box sx={{ display: "flex" }}>
          <div>
            <CardTotalUsers number={users} />
          </div>
          <div>
            <ImgMediaCard
              img={dataLastUser.img}
              names={dataLastUser.names}
              email={dataLastUser.email}
            />
          </div>
        </Box>
      </Card>
    </>
  );
};

export default ContentRowUsers;
