const TicketTable = () => {
  const data = [
    {
      uuid: "a1b2c3d4",
      createdAt: "2026-04-25T10:30:00Z",
      priority: "low",
    },
    {
      uuid: "e5f6g7h8",
      createdAt: "2026-04-25T11:15:00Z",
      priority: "high",
    },
    {
      uuid: "i9j0k1l2",
      createdAt: "2026-04-25T12:45:00Z",
      priority: "urgent",
    },
  ];
  return (
    <table className="">
      <thead>
        <tr>
          <th className="border p-2">UUID</th>
          <th className="border p-2">Created at</th>
          <th className="border p-2">Priority</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.uuid} className="hover:bg-gray-50">
            <td className="border p-2">{row.uuid}</td>
            <td className="border p-2">
              {new Date(row.createdAt).toLocaleString()}
            </td>
            <td className="border p-2 capitalize">{row.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;
