function List(){
  const funReactFactsList = [
    'Was released in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100k stars on Github',
    'Is maintained by Facebook',
    'Powers thousands of enterprise applications including mobile apps'
  ];

  return (
      <ul>
        {funReactFactsList.map(fact=>(
          <li>{fact}</li>
        ))}
      </ul>
  )
}

export default List;