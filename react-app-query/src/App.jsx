import { useQuery } from "@tanstack/react-query"

function App() {

  const {data, isLoading, error}  = useQuery({queryKey: ["todo"], 
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      return data
    
    }})
 
 
    if (isLoading) return <p>Chargement...</p>
    if (error) return <p>Erreur: {error.message}</p>

  // Vérifie que data est bien un tableau
  //if (!Array.isArray(data)) return <p>Les données ne sont pas un tableau</p>

  return (
    <div>
      {data.map((todo) => (
        <div key={todo.id}>
          <h1>Todo id: {todo.id}</h1>
          <p>Todo title: {todo.title}</p>
        </div>
))}
    </div>
)
}

export default App