import { useState } from "react";

const listItems = [
  { id: 1, title: "Read Manga", done: false },
  { id: 2, title: "Watch Anime", done: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <CheckList />
      <Stats />
    </div>
  );
}

function Logo() {
  return (
    <span className="logo">
      ToDo<span style={{ color: "red" }}>keyo</span>
    </span>
  );
}

function Form() {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat? 🤔</h3>
      <input
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

function CheckList() {
  return (
    <div className="list">
      <ul>
        {listItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      <span style={{ textDecoration: item.done ? "line-through" : "" }}>
        {item.title}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <span>Total Tugas: X | Done: X</span>
    </footer>
  );
}

export default App;
