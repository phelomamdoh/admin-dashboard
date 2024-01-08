import Link from "next/link";

const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Homepage</h1>
      <p style={{ marginTop: "20px" }}>Login Now !!</p>
      <Link
        href={`/login`}
        style={{
          marginTop: "15px",
          backgroundColor: "white",
          color: "black",
          padding: "5px 10px",
          borderRadius: "6px",
        }}
      >
        Login here
      </Link>
    </div>
  );
};

export default Homepage;
