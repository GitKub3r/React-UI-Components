import "./title.css";

export const Title = ({ title, desc }) => {
  return (
    <div className="title-container">
      <h1 className="title">{title}</h1>
      <p className="desc">{desc}</p>
    </div>
  );
};
