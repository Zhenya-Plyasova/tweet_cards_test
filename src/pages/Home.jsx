import manyUsers from "../img/many-users.jpg";

const Home = () => {
    return (
      <>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              margin: '20px auto',
              justifyContent: 'center',
            }}
          >
            Welcome to the Tweets APP!
          </h1>
          <img src={manyUsers} with = 'auto' height='450px' alt='net of people'></img>
        </div>
      </>
    );
}

export default Home;