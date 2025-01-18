import Chai from "./chai"

function App() {
  return (
    <>
    <h1>chai aur rect with vite ! BITTU KUMAR</h1>
    <Chai/>
    </>
  )
}

export default App

// Rule of jsx is that we can render only one element so thats why we have to either return h1 element or Chai element . If we want to return more than one element then we have to wrap them in a div or fragment element .
