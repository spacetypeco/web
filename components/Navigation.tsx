export default function Navigation() {
  return (
    <div className="flex-h flex-end nav full-w full-h">
      <div className="flex-v flex-between full-h controls">
        <div id="nav-area">
          <div id="nav-box">
            <a href="/type" className="link">
              Type Foundry
            </a>
            <a href="/teaching" className="link">
              Teaching
            </a>
            <a href="/about" className="link">
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
