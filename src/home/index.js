const initHome = () => {
  console.log("Hello world 2");

  lottie.loadAnimation({
    container: document.getElementById("leadza_ani"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "json/leadza_phone.json"
  });
};

export default initHome;