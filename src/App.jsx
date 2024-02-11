import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PersonalInfo from "./components/PersonalInfo";
import Button from "./components/Button";
import Card from "./components/Card";

const App = () => {
  const [age, setAge] = useState(19);
  const [showSidebar, setShowSidebar] = useState(false);
  const [data, setData] = useState([
    {
      title: "title one",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title two",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
    {
      title: "title three",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti unde voluptates non esse? Laboriosam saepe dolor recusandae. Esse odio rerum possimus. At nemo, dolorem facilis nesciunt culpa officiis commodi architecto?",
    },
  ]);

  // const handleAge = () => {
  //   setAge(age - 1);
  //   console.log("test");
  // };

  // const handleAddAge = () => {
  //   setAge(age + 1);
  //   console.log("test");
  // };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      {/* <h1>Hello Selamat Pagi😊</h1>
      <p>umur saya {age}</p>
      <button onClick={handleAge}>Kurangi Angka Umur</button>
      <button onClick={handleAddAge}>Tambah Angka Umur</button> */}
      {/* {showSidebar ? (
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      ) : null} */}
      <Button handleSidebar={handleSidebar} />
      {showSidebar && <Sidebar />}
      <PersonalInfo age={age} showSidebar={showSidebar} />
      {data.map((item, index) => (
        <Card title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default App;
