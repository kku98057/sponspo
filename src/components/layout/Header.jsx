import Container from "./Container";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full h-[60px] bg-slate-600 fixed top-0 z-10">
      <Container>
        <div className="w-full flex items-center justify-between h-full">
          <div className="w-[120px] bg-red-50 h-full">
            <img src="" alt="" />
          </div>
          <Nav />
        </div>
      </Container>
    </header>
  );
}
