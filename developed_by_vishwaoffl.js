
  function consoleDevelopedByVishwaoffl(message, imageUrl, linkUrl) {
    const styles = `
        font-size: 18px;
        font-weight: bold;
        padding: 20px;
        background: url(${imageUrl}) no-repeat center;
        background-size: contain;
        color: #ff1493; /* Deep Pink color */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow */
        text-align: center;
    `;

    console.log("%c" + message, styles);
    console.log("Know more about VishwaOffl at: " + linkUrl);
  }

  // Example usage:
  const imageUrl = "https://vishwa.vercel.app/assets/v-high-resolution-logo-white-on-transparent-background-7c53e8d7.png";
  const linkUrl = "https://vishwa.vercel.app/";
  const message = "Welcome to our world of creativity and innovation! 🌟 Let us bring your ideas to life! 🚀";

  consoleDevelopedByVishwaoffl(message, imageUrl, linkUrl);
