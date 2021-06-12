const Calendar = () => {
  const weekdays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo",
  ];

  const date = new Date();
  const today = {
    month: date.getMonth(),
    day: date.getDate(),
    weekday: weekdays[date.getDay()],
  };
  return (
    <div className="date center-x center-y">
      <div className="row title">
        <span>{today.day}</span>
        <span>{today.month + 1}</span>
      </div>
      <span className="lead">{today.weekday}</span>
    </div>
  );
};

export default Calendar;
