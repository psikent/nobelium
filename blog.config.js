const BLOG = {
  title: '一往无前',
  author: 'Jason Lau',
  email: 'lxjsilver@gmail.com',
  link: 'https://nobelium.vercel.app',
  description: '路漫漫其修远兮，吾将上下而求索。',
  lang: 'en-US',
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/i_lxj',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionApiEndPoint: process.env.NOTION_API_ENDPOINT,
  notionPageId: process.env.NOTION_PAGE_ID
}

export default BLOG
