/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx259ff4453bf2f3cc',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2e4aae0a4e526c562f5339af86e913c3',

  PROVINCE: '江苏',
  CITY: '镇江',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oIPdB6ectAFC1KlFSHuoOclQy_Oo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'hABgmv-jFEICCny7p-zV8jKyxHVOuOVKHChJ0GJSvIo	',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '2002', date: '08-18',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '唐楠', year: '2003', date: '07-27',
        },
        {
          type: '节日', name: '相识纪念日', year: '4个月', date: '06-12',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [21
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-18' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-19' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oIPdB6S-gezav-ho7UAsRN5lM6LE',

  CALLBACK_USERS: [
    {
      name: '唐楠',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oIPdB6S-gezav-ho7UAsRN5lM6LE',
    }
  ],

}

module.exports = USER_CONFIG

