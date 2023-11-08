import BaseRoutes from "./root/routes/BaseRoutes"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyContextProvider } from "./context/SectionProvider";

export default function App() {
  return (
    <MyContextProvider>
      <BaseRoutes />
    </MyContextProvider>
  )
}
