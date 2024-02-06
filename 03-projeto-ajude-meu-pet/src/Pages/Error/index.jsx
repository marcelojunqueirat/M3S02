import { useRouteError } from "react-router-dom";
import './style.css'
import Header from '../../components/Header'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Header />
      <div id="error-page">
        <h1>Oops!</h1>
        <div id="error-message">
          <p>Desculpe, erro inesperado.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    </>
  );
}