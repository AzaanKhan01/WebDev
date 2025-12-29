const Layout = (props) => {
  return (
    <div>
        <header>
            <h1>{props.title}</h1>
        </header>
        {/* Main Content */}
        <main>
            {props.children}
        </main>
        {/* Footer */}
        <footer>
            <p>&copy; 2023 My Website. All rights reserved.</p>
        </footer>
    </div>
  );
};
export default Layout;