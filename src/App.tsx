import {RouterProvider} from "react-router-dom";
import {router} from "pages/routes/Routes.tsx";
import Header from "components/header/Header.tsx";
import Footer from "components/footer/Footer.tsx";

import './App.css';
function App() {

    return (
        <>
            <Header/>
              <main>
                  <RouterProvider router={router}/>
              </main>
            <Footer/>
        </>
    );
}

export default App;
