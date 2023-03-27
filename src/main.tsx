import ReactDOM from "react-dom/client"
import App from "./App"
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/global.scss";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <RecoilRoot>
        <BrowserRouter basename="/wedding-card">
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    </RecoilRoot>,
)