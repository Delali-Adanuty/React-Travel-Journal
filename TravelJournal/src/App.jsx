import Header from "../components/Header";
import Entry from "../components/Entry";
import Contact from "../components/Contact";
import Joke from "../components/Joke";
import data from "../components/data";

export default function App(){
  const entryElements = data.map((entry) => {
    return(
      <Entry 
      key = {entry.id}
      entry = {entry}
      />
    )
  })
  return(
    <>
    <Header />
    {entryElements}
    </>
  )
}