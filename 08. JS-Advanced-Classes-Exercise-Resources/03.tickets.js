function tickets(tickets, criteria) {
    class Tickets {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const ticketArr = []
    tickets.forEach(element => {
        const [destination, price, status] = element.split("|")
        ticketArr.push(new Tickets(destination, Number(price), status))

    });
    if (criteria === "destination") {
        return ticketArr.sort((a, b) => a.destination.localeCompare(b.destination))
    } else if (criteria === "status") {
        return ticketArr.sort((a, b) => a.status.localeCompare(b.status))
    } else if (criteria === "price") {
        return ticketArr.sort((a, b) => a.price - b.price)
    }
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))