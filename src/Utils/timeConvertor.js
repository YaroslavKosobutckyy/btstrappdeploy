export default time => {
    let date = new Date();
    date.setTime(time);
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
