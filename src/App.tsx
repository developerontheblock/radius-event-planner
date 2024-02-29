import Footer from "./components/Footer";
import Header from "./components/Header";
import PartnersData from "./components/PartnersData";

export const App = () => {
  return (
    <div
      id="app"
      className="flex flex-col min-h-screen bg-gray-100 text-gray-900"
    >
      <Header title="Radius Event Planner" />
      <div className="flex-grow flex flex-wrap">
        <div className=" bg-gray-300 w-full sm:w-1/4 p-4">
          <h2 className="text-lg font-semibold mb-2">Left Section</h2>
          <p className="mb-4">Welcome to Radius Event Planner</p>
        </div>
        <main className="w-full sm:w-3/4 p-4">
          <div>
            <h1 className="text-xl font-semibold mb-4">Main Content</h1>
            <PartnersData />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Partner Id
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Partner Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-4 py-2">
                        Row {index + 1}, Col 1
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        Row {index + 1}, Col 2
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
