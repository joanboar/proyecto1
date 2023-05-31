function List({ joanboar }) {
  return (
    <div className="container-user">
      <h2>{joanboar.tag}</h2>
      <p>{joanboar.category}</p>
      <img src={"comteco.jpg" + joanboar.image} alt="" />
    </div>
  );
}

export default List;
