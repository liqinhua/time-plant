// 时间工厂
const convertTime = {
    // 时间戳转换
    /* 
        把时间戳转换成 -> 20181010101000 格式 
                       -> new Date 格式

                  参数 -> parm 时间戳
    */
    timestamp(parm, type = 1, symbol = '-', sfSymbol = ':') {
        if (!parm) {
            return parm
        }
        let datas = new Date(parm)
        var N = datas.getFullYear();
        var Y = datas.getMonth() + 1; //获取当前月份的日期
        var R = datas.getDate();
        var S = datas.getHours();
        var F = datas.getMinutes();
        var M = datas.getSeconds();
        if (Y.toString().length == 1) {
            Y = `0${Y}`
        }
        if (S.toString().length == 1) {
            S = `0${S}`
        }
        if (R.toString().length == 1) {
            R = `0${R}`
        }
        if (F.toString().length == 1) {
            F = `0${F}`
        }
        if (M.toString().length == 1) {
            M = `0${M}`
        }
        switch (Number(type)) {
            case 1:
                // '20181010101010'
                return `${N}${Y}${R}${S}${F}${M}`;
            case 2:
                // '2018-10-10'
                return `${N}${symbol}${Y}${symbol}${R}`;
            case 3:
                // 10:10
                return `${S}${sfSymbol}${F}`;
            case 4:
                // '2018-10-10 10:10'
                return `${N}${symbol}${Y}${symbol}${R} ${S}${sfSymbol}${F}`;
            case 5:
                // new date格式
                return datas
        }
    },

    // new date装换成20181010101000格式
    dateTime(parm, type = '1', symbol = '-', sfSymbol = ':') {
        if (parm instanceof Date) {
            var N = parm.getFullYear();
            var Y = parm.getMonth() + 1; //获取当前月份的日期
            var R = parm.getDate();
            var S = parm.getHours();
            var F = parm.getMinutes();
            var M = parm.getSeconds();
            if (Y.toString().length == 1) {
                Y = `0${Y}`
            }
            if (S.toString().length == 1) {
                S = `0${S}`
            }
            if (R.toString().length == 1) {
                R = `0${R}`
            }
            if (F.toString().length == 1) {
                F = `0${F}`
            }
            if (M.toString().length == 1) {
                M = `0${M}`
            }
            switch (Number(type)) {
                case 1:
                    // 年月日时分秒'201810101010'
                    return `${N}${Y}${R}${S}${F}${M}`;
                case 2:
                    // 年月日 20181010
                    return `${N}${Y}${R}`;
                case 3:
                    // 月日 1010
                    return `${Y}${R}`;
                case 4:
                    // 日 10
                    return `${R}`;
                case 5:
                    // 年月日
                    return `${N}${symbol}${Y}${symbol}${R}`;
                case 6:
                    // 年月日时分
                    return `${N}${symbol}${Y}${symbol}${R} ${S}${sfSymbol}${F}`;
                case 7:
                    // 年月日时分秒
                    return `${N}${symbol}${Y}${symbol}${R} ${S}${sfSymbol}${F}${sfSymbol}${M}`;
            }
        }
        return parm
    },

    /*
        还原特殊的时间段成new data,以当前时间为拼接
        0806 (对应type = 1) -> 20181010101000 -> new Date 
        06   (对应type = 2)   -> 20181010101000 -> new Date
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

    // 字符串(20181010101000)还原成正常new date时间格式
    restoreStringDate(parm, type = 1) {
        if (parm) {
            var year = parm.substring(0, 4)
            var month = parm.substring(4, 6)
            var data = parm.substring(6, 8)
            var hour = parm.substring(8, 10)
            var min = parm.substring(10, 12)
            var sec = parm.substring(12, 14)
            var date = new Date()
            date.setFullYear(year, Number(month) - 1, data)
            date.setHours(hour, min, sec)
            switch (Number(type)) {
                case 1: // 年月
                    return date
            }
        }
        return parm
    }
}
export default convertTime;