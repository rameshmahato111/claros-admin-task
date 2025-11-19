import { Link } from "react-router-dom"


const PageNotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="bg-red-300 p-2 rounded font-bold">404 error</h1>
        <p>We've lost this page</p>
        <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
         <Link to="/" className="border-b-2 border-blue-400">Go to home page</Link>
    </section>
  )
}

export default PageNotFound