import SideCanvas from "./SideCanvas";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <form className="d-flex" role="search">
          <button
            className="btn btn-outline-success"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          >
            <i className="bi bi-list"></i>
          </button>
        </form>
      </div>
      <SideCanvas id="staticBackdrop" />
    </nav>
  );
};
export default Navbar;
