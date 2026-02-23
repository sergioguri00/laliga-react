export const formatDateDay = (date: string) => {
  const utcDate = new Date(date)
  const formatter = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour12: false
  })

  const parts = formatter.formatToParts(utcDate)
  const year = parts.find((p) => p.type === 'year')?.value
  const month = parts.find((p) => p.type === 'month')?.value
  const day = parts.find((p) => p.type === 'day')?.value

  return `${day}.${month}.${year}`
}

export const formatDateHour = (time: string) => {
  // Si ya es solo una hora (formato "HH:MM"), devolverla directamente
  if (time.match(/^\d{1,2}:\d{2}$/)) {
    const [hour, minute] = time.split(':')
    return `${hour.padStart(2, '0')}:${minute}`
  }
  
  // Si es un datetime completo, extraer la hora
  const utcDate = new Date(time)
  
  // Verificar si la fecha es válida
  if (isNaN(utcDate.getTime())) {
    console.warn(`Invalid date/time: ${time}`)
    return time // Devolver el valor original si no es válido
  }
  
  const formatter = new Intl.DateTimeFormat('default', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })

  const parts = formatter.formatToParts(utcDate)
  const hour = parts.find((p) => p.type === 'hour')?.value
  const minute = parts.find((p) => p.type === 'minute')?.value

  return `${hour}:${minute}`
}

export const formatBirthdayDate = (date: string) => {
  const dateObj = date.split("-");
  const year = dateObj[0];
  const month = dateObj[1];
  const day = dateObj[2];
  return `${day}/${month}/${year}`;
}