import LogoApp from "../img/android-chrome-512x512.png"

const Home = () => {
    return (
      <>
        <div
          style={{
            width: '100%',
            margin: '0 auto',
            padding: '0 16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              margin: '25px auto',
              justifyContent: 'center',
            }}
          >
            Welcome to the Tweets APP!
          </h1>
          <img src={LogoApp} width="512px" height="512px" alt="project logo"></img>
        </div>
      </>
    );
}

export default Home;