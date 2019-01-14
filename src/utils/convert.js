// 时间工厂
const convertTime = {
    /* 
        把时间戳转换成 -> 20181010101000 格式 
                       -> new Date 格式

                  参数 -> payload 时间戳
    */
    timestamp(payload, type = 100, symbol = '-', sfSymbol = ':') {
        if (payload) {
            let datas = new Date(payload)
            return convertTime.splitDate(datas, type, symbol, sfSymbol)
        } else {
            return convertTime.splitDate(new Date(), type, symbol, sfSymbol)
        }
    },

    // 字符串(20181010101000)还原成正常new date时间格式
    restoreStringDate(payload, type = 100, symbol = '-', sfSymbol = ':') {
        if (payload) {
            var year = payload.substring(0, 4)
            var month = payload.substring(4, 6)
            var data = payload.substring(6, 8)
            var hour = payload.substring(8, 10)
            var min = payload.substring(10, 12)
            var sec = payload.substring(12, 14)
            var date = new Date()
            date.setFullYear(year, Number(month) - 1, data)
            date.setHours(hour, min, sec)
            return convertTime.splitDate(date, type, symbol, sfSymbol)
        } else {
            return convertTime.splitDate(new Date(), type, symbol, sfSymbol)
        }
    },
    /*
        还原特殊的时间段成new data,以当前时间为拼接
        0806 (对应type = 1) -> 20181010101000 -> new Date 
        06   (对应type = 2) -> 20181010101000 -> new Date
    */
    restoreJointTime(jointTime, type = 1) {
        let currentTiem = convertTime.dateTime(new Date())
        switch (Number(type)) {
            case 1: // 年月
                return convertTime.restoreStringDate(currentTiem.slice(0, 4) + jointTime + currentTiem.slice(8, 14))
            case 2: // 日
                return convertTime.restoreStringDate(currentTiem.slice(0, 6) + jointTime + currentTiem.slice(8, 14))   
            default:
                return jointTime
        }
    },

    // 获取距离当天的指定日期
    // sonsole.log(assignTime(0)) =>   当天的Data格式
    // sonsole.log(assignTime(1)) =>   明天的Ddata格式
    // sonsole.log(assignTime(-1)) =>  昨天的Ddata格式
    assignTime (assignNum) {
        var today = new Date();
        // getDate 可返回月份的某一天。
        today.setDate(today.getDate() + assignNum);
        return today
    },
    // 获得本月的开始日期
    monthStartTime (payload) {
        let now = new Date()
        let nowMonth = now.getMonth()
        let nowYear = now.getYear()
        nowYear += (nowYear < 2000) ? 1900 : 0
        return new Date(nowYear, nowMonth, 1)
    },
    // 组合拆分new data格式
    splitDate (payload, type = 1, symbol = '-', sfSymbol = ':') {
        let datas
        if (payload instanceof Date) {
            datas = payload
        } else {
            datas = new Date()
        }
        var N = datas.getFullYear();
        var Y = datas.getMonth() + 1; //获取当前月份的日期
        var R = datas.getDate();
        var S = datas.getHours();
        var F = datas.getMinutes();
        var M = datas.getSeconds();
        if (Y.toString().length === 1) {
            Y = `0${Y}`
        }
        if (R.toString().length === 1) {
            R = `0${R}`
        }
        if (S.toString().length === 1) {
            S = `0${S}`
        }
        if (F.toString().length === 1) {
            F = `0${F}`
        }
        if (M.toString().length === 1) {
            M = `0${M}`
        }

        switch (Number(type)) {
            case 1:
                // 年月日时分秒 201810101010
                return `${N}${Y}${R}${S}${F}${M}`
            case 2:
                // 年月日(默认2018-10-10格式)
                return `${N}${symbol}${Y}${symbol}${R}`
            case 3:
                // 年月日时分(默认2018-10-10 10:10格式)
                return `${N}${symbol}${Y}${symbol}${R} ${S}${sfSymbol}${F}`
            case 4:
                // 年月日 20181010
                return `${N}${Y}${R}`
            case 5:
                // 月日 1010
                return `${Y}${R}`
            case 6:
                // 日 10
                return `${R}`
            case 7:
                // 时分秒(101010)
                return `${S}${F}${M}`
            case 8:
                // 时分(1010)
                return `${S}${F}`
            case 9:
                // 时(10)
                return `${S}`
            case 10:
                // 分秒(1010)
                return `${F}${M}`
            case 11:
                // 分(10)
                return `${F}`
            case 12:
                // 秒(10)
                return `${M}`
            case 13:
                // 时分秒(默认10:10:10格式)
                return `${S}${sfSymbol}${F}${sfSymbol}${M}`
            case 14:
                // 时分秒(默认10:10格式)
                return `${S}${sfSymbol}${F}`
            case 15:
                // 年月日时分秒(默认2018-10-10 10:10:10格式)
                return `${N}${symbol}${Y}${symbol}${R} ${S}${sfSymbol}${F}${sfSymbol}${M}`
            case 100:
                // new date格式
                return datas
        }
    },
}
export default convertTime;