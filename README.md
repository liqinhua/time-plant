# time-plant
轻量、强大的时间工厂
格式化时间和获取时间

例子：

    import {convertTime} from 'time-plant'

    convertTime.timestamp(时间戳)
             -> 20181010101010

    convertTime.restoreStringDate('20181010101000', 100)
             -> Wed Oct 10 2018 10:10:00 GMT+0800 (中国标准时间)


方法说明


convertTime


    splitDate(Date格式, type = 1, symbol(年月日连接符), sfSymbol(时分秒连接符))
        symbol默认为    -
        sfSymbol默认为  :

        type            返回
            -> 1        年月日时分秒(20181010101010)
            -> 2        年月日(2018-10-10) 
            -> 3        年月日时分秒(默认2018-10-10 10:10格式)
            -> 4        年月日(20181010)
            -> 5        月日(1010)
            -> 6        日(10)
            -> 7        时分秒(101010)
            -> 8        时分(1010)
            -> 9        时(10)
            -> 10       分秒(1010)
            -> 11       分(10)
            -> 12       秒(10)
            -> 13       时分秒(10:10:10) 
            -> 14       时分(10:10) 
            -> 15       年月日时分秒(默认2018-10-10 10:10:10格式)
            -> 100      Date格式


    timestamp(时间戳, type = 100, symbol(年月日连接符), sfSymbol(时分秒连接符))
        type -> 传参对应的返回值和splitDate一致


    restoreStringDate(时间字符串（20181010101010）, type = 1)
        type -> 传参对应的返回值和splitDate一致
    
        说明
            字符串(20181010101000)还原成想要的时间格式


    restoreJointTime(时间段(月日/日), type = 100)
        type            返回
            -> 1        Date格式
            -> 2        Date格式
    
        说明
            还原特殊的时间段成new data,以当前时间为拼接
            0806 (对应type = 1)  -> Date格式
            06   (对应type = 2)  -> Date格式

    
    assignTime(assignNum)
        sonsole.log(convertTime.assignTime(0)) =>   当天的Data格式
        sonsole.log(convertTime.assignTime(1)) =>   明天的Data格式
        sonsole.log(convertTime.assignTime(-1)) =>  昨天的Data格式

        说明
            获取距离当天的指定日期

    monthStartTime()
        说明
            获得本月的开始日期data格式


转换成es5语法(babel)

    npm install

    npm run build

    得到的list就是转成功的文件


npm 使用

    1. npm login      登录

    2. npm publish    更新

    3. npm unpublish  包名 --force   撤销更新