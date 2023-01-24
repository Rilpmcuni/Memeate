import React, { useEffect, useState } from "react";
import squidward from "./assets/handsome-squidward.jpg";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconAlertTriangleFilled,
  IconX,
  IconExternalLink,
} from "@tabler/icons-react";
import "./App.css";
import ReactDOM from "react-dom";
import html2canvas from "html2canvas";
import Input from "./components/ui/Input";
import confetti from "canvas-confetti";

function App() {
  const handleConfetti = () => {
    confetti();
  };
  const colors = [
    "bg-red-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-purple-300",
  ];

  const [currentColor, setCurrentColor] = useState(0);
  const [isEffectActive, setIsEffectActive] = useState(true);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    let interval: any;

    if (isEffectActive) {
      interval = setInterval(() => {
        setCurrentColor((prevColor) => (prevColor + 1) % colors.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isEffectActive]);

  const toggleEffect = () => {
    setIsEffectActive((prevIsEffectActive) => !prevIsEffectActive);
  };
  const [testoUno, setTestoUno] = useState("primer testo");
  const [testoDos, setTestoDos] = useState("segundo testo");

  const handleDescargarImagen = () => {
    const element = document.getElementById("capture")!;

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "componente.png";
      link.href = imgData;
      link.click();
    });
  };
  const handleAll = () => {
    handleDescargarImagen();
    handleConfetti();
  };
  return (
    <div
      className={`bg-transition ${colors[currentColor]} App flex flex-col justify-center items-center h-screen`}
    >
      <h1 className="text-6xl text-white font-black mb-8">MEMEATE</h1>
      <div className="flex flex-col sm:flex-row items-center justify-around gap-4">
        <div
          id="capture"
          className="text-center select-none bg-red-300 flex w-11/12 sm:w-auto flex-col px-3 py-1 items-center justify-center relative"
        >
          <img src={squidward} alt="Un meme" className=" sm:h-[50vh]" />
          <h3 className="text-3xl font-bold absolute inset-x-auto top-2 text-white rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
            {testoUno}
          </h3>
          <h3 className="text-3xl font-bold absolute inset-x-auto bottom-2 text-white rounded-2xl px-2 py-1 flex flex-col items-center justify-center">
            {testoDos}
          </h3>
        </div>
        {/*  */}
        <div className="flex flex-col bg-gray-300 rounded-xl p-4 w-11/12 sm:w-auto sm:h-[50vh] items-center justify-center">
          <Input
            label={"El primer testo"}
            value={testoUno}
            onChange={(event: any) => setTestoUno(event.currentTarget.value)}
          />
          <Input
            label={"El segundo testo"}
            value={testoDos}
            onChange={(event: any) => setTestoDos(event.currentTarget.value)}
          />
          <button
            className="w-full px-2 py-3 bg-green-200 hover:bg-green-400 active:bg-green-600 border border-green-900 rounded-lg font-bold mt-4"
            onClick={handleAll}
          >
            Descargar
          </button>
          <span
            onClick={() => setOpenModal(true)}
            className="w-full underline text-blue-600 cursor-pointer hover:text-blue-900"
          >
            ¡Atención, amantes de los memes!
          </span>
        </div>
        {/*  */}
      </div>
      <div
        className={`${
          openModal ? "flex" : "hidden"
        } mt-4 flex-col bg-gray-300 relative rounded-xl p-4 sm:p-6 w-11/12 sm:w-11/12 items-center justify-center`}
      >
        <IconX
          onClick={() => setOpenModal(false)}
          className="text-black absolute right-4 top-4 cursor-pointer hover:text-gray-600 active:text-gray-900"
        />
        <p className="w-full ">
          Antes de descargar cualquier contenido gracioso, dejemos claro que no
          nos hacemos responsables si el meme resulta ser un{" "}
          <b>virus troyano</b> proveniente de la India. Sabemos que los indios
          son expertos en muchas cosas, pero no queremos que te conviertas en su
          próximo proyecto. Así que, descarga bajo tu propio riesgo y asegúrate
          de tener tu <b>antivirus actualizado.</b> ¡Que los memes te hagan reír
          y no llorar!"
        </p>
        <div className="flex flex-col sm:flex-row mt-2 gap-4 bg-red-300 rounded-xl p-4 w-11/12 sm:w-11/12 items-center justify-center">
          <IconAlertTriangleFilled />

          <p>
            Recuerda que este disclaimer es una broma y no debe tomarse como una
            declaración real sobre los memes o la tecnología en la India.
          </p>
        </div>
      </div>

      {/*  */}
      <button
        className="absolute right-4 bottom-6 flex flex-row"
        onClick={toggleEffect}
      >
        {isEffectActive ? (
          <>
            <IconPlayerPauseFilled /> Colores
          </>
        ) : (
          <>
            <IconPlayerPlayFilled /> Colores
          </>
        )}
      </button>
      <a
        className="absolute left-4 bottom-6 flex flex-row underline hover:text-gray-600 active:text-gray-900"
        href="https://fabian-lisantti.vercel.app/"
        target={"_blank"}
      >
        A mi Portafolio <IconExternalLink />
      </a>
    </div>
  );
}

export default App;
