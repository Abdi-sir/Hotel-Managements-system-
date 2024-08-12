import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  // Fetching data with useQuery
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['Cabins'],
    queryFn: getCabins,
  });

  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  function deleteHandeler() {
    
  }



  return (
    <div>
      <h1>Cabins</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Max Capacity</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regular Price</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((cabin) => (
            <tr key={cabin.id}>
              <img src={cabin.image} alt={cabin.name} className="w-16 h-16 object-cover"/>
              <td className="px-6 py-4 whitespace-nowrap">{cabin.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{new Date(cabin.created_at).toLocaleDateString()}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cabin.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cabin.maxCapacity}</td>
              <td className="px-6 py-4 whitespace-nowrap">${cabin.regularPrice}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cabin.discount}%</td>
              <td className="px-6 py-4 whitespace-nowrap ">{cabin.description}</td>
              <td className="px-6 py-4 whitespace-nowrap"><button>delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cabins;
