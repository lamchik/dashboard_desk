const TICKETS_STORAGE_KEY = "tickets"

const getData = (storageKey) => JSON.parse(localStorage.getItem(storageKey))
const saveData = (storageKey, data) => localStorage.setItem(storageKey, JSON.stringify(data))


const getTickets = () => getData(TICKETS_STORAGE_KEY) || []
const saveTickets = (data) => saveData(TICKETS_STORAGE_KEY, data)

export const getAllTickets = async (filters = {}) => {

  return getTickets().filter(ticket => {
    if (filters.tags) {
      if (!ticket.tags || ticket.tags.length === 0)

        return false
    }

    if (filters.comments) {
      if (!ticket.comments || ticket.comments.length === 0) return false
    }

    if (filters.description) {
      if (!ticket.description) return false
    }

    return true
  })
}

// метод для получения одной таски по ID;
export const getTicketById = async (id) => {
  return getTickets().find(elem => elem.id.toString() === id)
}

// метод для добавления карточки;
const generateId = () => {
  return Math.floor(Math.random() * 100000000);
}
export const createTicket = async (ticket) => {
  const ticketWithId = {...ticket, id: generateId()}
  saveTickets(getTickets().concat([ticketWithId]))
  return ticketWithId
}

// метод для удаления карточки по ID;
export const deleteTicket = async (id) => {
  console.log("delete by id", id)
  saveTickets(getTickets().filter(ticket => ticket.id.toString() !== id.toString()))
}

// метод для изменения карточки по ID;
export const updateTicket = async (id, updatedTicket) => {
  const tickets = getTickets()
  tickets.splice(tickets.findIndex(elem => elem.id === id), 1)
  saveTickets(tickets.concat([updatedTicket]))
  return updatedTicket
}

// метод добавления комментария к карточке по ID.
export const addComment = async (ticketId, comment) => {
  const ticket = await getTicketById(ticketId)
  if (ticket.comments === undefined) {
    ticket.comments = []
  }
  ticket.comments.push({...comment, id: generateId()})
  await updateTicket(ticketId, ticket)
  return ticket
}
