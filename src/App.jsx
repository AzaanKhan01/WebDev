import Layout from "./components/Layout";

const App = () => {
  return (
  <div>
    {/* Homepage Layout */}
    <Layout title="Welcome Page">
      <p>Welcome to our website!.This is a basic React Layout using reusbale components
        You can use this layout to structure different pages of your application.
      </p>
    </Layout>
    {/* Services */}
    <Layout>
      <h2>Our Services</h2>
      <ul>
        <li>Web Development</li>
        <li>App Development</li>
        <li>SEO Optimization</li>
      </ul>
    </Layout>
  </div>
  );
};
export default App;