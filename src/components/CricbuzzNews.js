function CribuzzNews({ imgLink, title, content, newsLink, linkText }) {
  return (
    <div
      style={{
        width: "420px",
        marginBottom: "30px",
      }}
    >
      <img
        style={{
          borderRadius: "10px",
        }}
        src={imgLink}
        alt="dc news"
      />
      <h3>{title}</h3>
      <p>{content}</p>
      <a href={newsLink}>{linkText}</a>
      <hr />
    </div>
  );
}

export default CribuzzNews;
