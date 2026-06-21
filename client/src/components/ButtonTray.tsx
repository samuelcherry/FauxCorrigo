import Button from "./Button";
import { useEffect, useState } from "react";

const ButtonTray = () => {
  const [ticketCounts, setTicketCounts] = useState({
    low: 0,
    medium: 0,
    high: 0,
    urgent: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticketCounts),
    });
  }, [ticketCounts]);

  useEffect(() => {
    async function loadCounts() {
      const response = await fetch("http://localhost:3000/tickets");
      const data = await response.json();
      setTicketCounts(data);
    }
    loadCounts();
  }, []);

  return (
    <>
      <div className=" flex justify-center">
        <div className="flex justify-center items-center">
          <Button
            color="green"
            text="low"
            count={ticketCounts.low}
            onIncrement={() =>
              setTicketCounts((prev) => ({ ...prev, low: prev.low + 1 }))
            }
            onDecrement={() =>
              setTicketCounts((prev) => ({ ...prev, low: prev.low - 1 }))
            }
          />
          <Button
            color="yellow"
            text="medium"
            count={ticketCounts.medium}
            onIncrement={() =>
              setTicketCounts((prev) => ({ ...prev, medium: prev.medium + 1 }))
            }
            onDecrement={() =>
              setTicketCounts((prev) => ({ ...prev, medium: prev.medium - 1 }))
            }
          />
          <Button
            color="orange"
            text="high"
            count={ticketCounts.high}
            onIncrement={() =>
              setTicketCounts((prev) => ({ ...prev, high: prev.high + 1 }))
            }
            onDecrement={() =>
              setTicketCounts((prev) => ({ ...prev, high: prev.high - 1 }))
            }
          />
          <Button
            color="red"
            text="urgent"
            count={ticketCounts.urgent}
            onIncrement={() =>
              setTicketCounts((prev) => ({ ...prev, urgent: prev.urgent + 1 }))
            }
            onDecrement={() =>
              setTicketCounts((prev) => ({ ...prev, urgent: prev.urgent - 1 }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default ButtonTray;
