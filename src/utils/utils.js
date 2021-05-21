export const formatDate = unformattedDate => {

    const UNIXDate = new Date(unformattedDate * 1000);
    const now = new Date();
    
    let diff = (now.getTime() - UNIXDate.getTime()) / 1000;
    diff /= (60 * 60);
    diff = Math.abs(Math.round(diff));

    const formattedDate = `${diff} hours ago`;
    return formattedDate;
}

export const formatVoteCount = unformattedNum => {
    return unformattedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}