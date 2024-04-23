class Time {

    getTime = () => {
        const now = new Date();
        const utcTimestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
            now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(),
            now.getUTCMilliseconds());

        return utcTimestamp

    }
    convertToLocalDate = (date) => {
        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }
}
module.exports = new Time;