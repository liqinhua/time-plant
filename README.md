# time-plant
轻量、强大的时间工厂
格式化时间和获取时间

例子：

    import {convertTime} from 'time-plant'

    convertTime.timestamp(时间戳) -> 20181010101010



方法说明


convertTime


    timestamp(时间戳, type = 1, 年月日连接符, 时分秒连接符)
        type            返回
            -> 1        20181010101010(年月日时分秒)
            -> 2        2018-10-10(年月日)
            -> 3        10:10(时分)
            -> 4        2018-10-10 10:10(年月日时分)
            -> 5        new Date
        说明
            把时间戳转换成  -> 20181010101000 格式 
                            -> new Date 格式


    dateTime(new date, type = 1, 年月日连接符, 时分秒连接符)
        type            返回
            -> 1        20181010101010(年月日时分秒)
            -> 2        20181010(年月日)
            -> 3        1010(月日)
            -> 4        10(日)
            -> 5        2018-10-10(年月日)
            -> 6        2018-10-10 10:10(年月日时分)
            -> 7        2018-10-10 10:10:10(年月日时分秒)
    
        说明
            new date装换成20181010101000格式
    

    restoreJointTime(时间段(月日/日), type = 1)
        type            返回
            -> 1        new Date 格式
            -> 2        new Date 格式
    
        说明
            还原特殊的时间段成new data,以当前时间为拼接
            0806 (对应type = 1) -> 20180806101000 -> new Date 
            06   (对应type = 2) -> 20181006101000 -> new Date


    restoreStringDate(时间字符串, type = 1)
        type            返回
            -> 1        new Date 格式
    
        说明
            字符串(20181010101000)还原成正常new date时间格式
    
    assignTime(assignNum)
        sonsole.log(convertTime.assignTime(0)) =>   当天的new data格式
        sonsole.log(convertTime.assignTime(1)) =>   明天的new data格式
        sonsole.log(convertTime.assignTime(-1)) =>  昨天的new data格式

        说明
            获取距离当天的指定日期

    monthStartTime()
        说明
            获得本月的开始日期new data格式


转换成es5语法(babel)
    npm install
    npm run dev
    得到的list就是转成功的文件


npm 使用
    1. npm login      登录
    2. npm publish    更新
    3. npm unpublish  包名 --force   撤销更新