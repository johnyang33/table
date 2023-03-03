import Table from './components/Table';

function App() {

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ]

  // config file works by q 1 
  const config = [

    {
      label: 'Name',
      render: (fruit) => fruit.name },
    { 
      label: 'Color',
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`} />
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
    }
  ];

  const keyFn = (fruit) => { 
    return fruit.name;
  };

  return (
    <Table data={data} config={config} keyFn={keyFn}/>
  );
}

export default App;
