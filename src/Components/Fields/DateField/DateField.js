const DateField = (props) => {
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}; //, hour: 'numeric', minute: 'numeric', second:'numeric'
    let formatDate;

    if (props.date) {
        const dateElements = props.date.split("-");
        const yearD = dateElements[0];
        const monthD = dateElements[1];
        const dayAndHour = dateElements[2].split("T");
        const dayD = dayAndHour[0];
        const hourElements = dayAndHour[1].split(":");
        const hourD = hourElements[0];
        const minuteD = hourElements[1];
        const secondD = hourElements[2].slice(0, 2);
        const date = new Date(yearD, monthD, dayD, hourD, minuteD, secondD);
        formatDate = date.toLocaleString("en-US", options);
    } else {
        formatDate = "-/-/-";
    }

    return (
        formatDate
    )
};

export default DateField;