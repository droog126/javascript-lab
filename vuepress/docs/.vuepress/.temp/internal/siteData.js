export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "itclanCoder网站",
  "description": "itclanCoder的网站,专注前端技术栈分享",
  "head": [],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
