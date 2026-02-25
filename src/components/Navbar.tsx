import { translator } from "@/utils/dictionary";

const Navbar = () => {
  const page = window.location.href.split("/");
  const pageId = page[3] ? page[3] : null;
  return (
    <header
      className="h-20 fixed top-0 w-full z-50 border-b border-black"
      style={{ backgroundColor: "white" }}
    >
      <nav className="grid grid-cols-3 gap-4 p-4 w-full justify-items-center h-full items-center">
        <a
          href={"/"}
          className="navbar-logo transition justify-self-start ml-2 sm:ml-5"
        >
          <svg
            width="70"
            height="70"
            viewBox="0 0 70 70"
            className="fill-mainblack hover:scale-105  w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          >
            <path d="M2.91 25.173L20.332 0h16.854L15.497 30.861h14.08L7.675 42.026l-4.41-5.618C1.701 34.346.99 32.782.99 30.648c0-1.92.712-3.77 1.92-5.475zM17.203 51.2c0-1.778.712-3.698 1.99-5.547L51.265 0h18.56L33.841 51.2h16.213L24.882 64l-5.405-6.897c-1.493-1.92-2.275-3.84-2.275-5.902l.001-.002z"></path>
          </svg>
        </a>
        {pageId && (
          <a
            href={`/${pageId}`}
            className="font-laliga text-2xl sm:text-3xl flex items-center justify-center text-mainblack hover:scale-105 transition"
          >
            <span className="uppercase">
              {translator("es", pageId as keyof typeof translator)}
            </span>
          </a>
        )}
        {/*<LanguageSelector lang={page[3]} />*/}
      </nav>
    </header>
  );
};

export { Navbar };
