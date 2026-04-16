import Card from "./Card"


const Cards = ({ users }) => {
  return (
    <div className="w-full max-h-96 overflow-auto flex flex-wrap justify-center gap-4 p-4 ">
       {users.map((item, index) => (
        <Card key={index} user={item} />
       ))}
    </div>
  )
}

export default Cards