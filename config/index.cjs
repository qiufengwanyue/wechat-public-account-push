/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxef72ac89a9a0b49d',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '56935edb7fc59ce165f1b5514ac69bf9',

  PROVINCE: '陕西',
  CITY: '西安',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofqts5rwV5UkkG6G8b9LJQBaoKRk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'n0sOtxOc4hCeDgxkLtyQDWIQoxI_3qFMcn7ojkLe4Ds',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-30',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '你宝宝', year: '2003', date: '10-30',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小李', year: '2003', date: '07-22',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '06-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-03' },
        { keyword: 'begin_day', date: '2021-06-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ofqts5p9Obt4-sxcHF6ZzNn4wwQI',
    }
  ],

}

module.exports = USER_CONFIG

