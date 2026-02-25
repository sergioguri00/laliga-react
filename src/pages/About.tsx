const About = () => {
  return (
    <>
      <div className="mt-20 pt-8 text-center">
        <p className="font-bold text-xl">Sobre el proyecto</p>
        <br />
        <p>
          Esto es una web app hecha con fines educativos. No se trata de una web
          oficial de LaLiga.
        </p>
        <br />
        <br />
        <p>
          Para mejor portabilidad, se ha optado por no tener un backend y toda
          la información se obtiene desde unos archivos JSON.
        </p>
        <br />
        <p>El frontend está hecho con React y TailwindCSS.</p>
        <br />
        <br />
        <p>
          Puedes encontrar el código fuente de esta web app presionando el botón
          con el logo de Github al final de esta página.
        </p>
        <br />
        <br />
        <p className="font-bold text-xl">Sobre el autor</p>
        <br />
        <p>Me llamo Sergio Guerrero Rivero.</p>
        <p>
          Estudio Ingeniería de Software en la Universitat Politècnica de
          Catalunya (UPC).
        </p>
        <p>
          Me encanta programar, en especial me gusta todo lo que tiene que ver
          con páginas webs y aplicaciones.
        </p>
        <br />
        <p>
          Este es uno de los proyectos que he hecho para aprender más sobre
          React, TailwindCSS y Node.js.
        </p>
        <p>
          Espero poder hacer más en el futuro y no dejar nunca de estar a la
          vanguardia de las nuevas tecnologías.
        </p>
        <br />
        <p>
          Debajo de estas líneas tienes unos botones que te llevarán a las
          páginas principales de los lenguajes de programación utilizados
        </p>
        <p>
          en este proyecto y al repositorio de GitHub donde se encuentra el
          código fuente de esta web app.
        </p>
        <div className="flex flex-row gap-4 p-10 items-center justify-center">
          <a
            className="rounded-full p-3 transition hover:scale-105"
            style={{ backgroundColor: "#222222" }}
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/logos/react.svg" className="h-10 w-10" />
          </a>
          <a
            className="rounded-full p-3 transition hover:scale-105"
            href="https://tailwindcss.com/"
            style={{ backgroundColor: "#06b5d3" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/logos/tailwindcss.svg" className="h-10 w-10" />
          </a>
          <a
            className="rounded-full p-3 transition hover:scale-105"
            href="https://nodejs.org/"
            style={{ backgroundColor: "#539e43" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/logos/nodejs.svg" className="h-10 w-10" />
          </a>
          <a
            className="rounded-full p-3 transition hover:scale-105"
            href="https://github.com/sergioguri00/laliga-react"
            style={{ backgroundColor: "#1b1f23" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src="/assets/logos/github.svg" className="h-10 w-10" />
          </a>
        </div>
        <p className="font-bold text-xl pb-10">¡Gracias por tu visita!</p>
      </div>
    </>
  );
};

export { About };
