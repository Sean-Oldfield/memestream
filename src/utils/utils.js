export const formatDate = unformattedDate => {
    const UNIXDate = new Date(unformattedDate * 1000);
    const date = UNIXDate.toLocaleString('en-gb', { day: 'numeric', month: 'long', year: 'numeric' });
    const time = UNIXDate.toLocaleTimeString('en-gb', { hour: '2-digit', minute: '2-digit' });
    const formattedDate = `${date} ${time}`;
    return formattedDate;
}