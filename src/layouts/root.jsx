/* eslint-disable react/prop-types */
import NavBarFooter from "../components/Aviso";

export function RootLayout({ children }) {
  return (
    <main>
      { children }
      <NavBarFooter />
    </main>
  )
}