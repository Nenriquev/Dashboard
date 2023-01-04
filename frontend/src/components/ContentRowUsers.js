import CardRow from "./CardRow";
import CardLastUser from "./CardLastUser";
import CardUsersSales from "./CardUsersSales";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";

const ContentRowUsers = (props) => {
  const [data, setData] = useState([]);
  const [dataLastUser, setDataLastUser] = useState({
    names: "-",
    email: "-",
    img: "-",
  });
  const [dataUsersSales, setDataUsersSales] = useState([]);

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

        fetch("/api/users/list")
          .then((response) => response.json())
          .then((users) => {
            let dataUsers = [];
            users.users.forEach((element, index) =>
              dataUsers.push({
                top: index + 1,
                id: element.id,
                name: element.names,
                email: element.email,
                orders: element.orders,
                image: element.image,
              })
            );
            setDataUsersSales(dataUsers);
          });
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
                  <CardRow props={element} key={index} />
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
          <div className="ContentRowUsersSales">
          <Typography
              gutterBottom
              fontFamily={"Console"}
              variant="h3"
              component="div"
              sx={{ textShadow: "0px 0px 0, 1px 2px 2px #5e1b88" , marginTop:"20px"}}
            >
              Top 3 Buyers
            </Typography>
            <div className="ContentRowUsersBox">
            {dataUsersSales.map((element, index) => {
              return <CardUsersSales {...element} key={index} />;
            })}
          </div>
          </div>
      </div>
    </>
  );
};

export default ContentRowUsers;
