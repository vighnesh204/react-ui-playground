

const Filter = ({ filterData }) => {
  return (
    <div>
        {filterData.map((item) => {
            return (
                <button key={item.id}>{item.name}</button>
            )
        })}
    </div>
  )
}

export default Filter