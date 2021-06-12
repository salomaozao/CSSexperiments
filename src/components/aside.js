const setBodyBg = (imgRef) => {
  //Verification
  document.body.style.backgroundImage = `url${imgRef}`;
};

const Aside = ({ display = true }) => {
  return (
    <div id="aside" style={display ? { opacity: 1 } : { opacity: 0 }}>
      <button onClick={() => setBodyBg(prompt("Insira a URL da imagem"))}>
        Trocar o background
      </button>
      <span>Mostrar componentes</span>
    </div>
  );
};

export default Aside;
