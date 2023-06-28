module.exports = {
  disableAutomaticViewportHeight: true,
  configurations: {
    '01 Desktop': {
      target: 'chrome.docker',
      width: 1600,
      height: 978,
    },
    '02 Desktop Small': {
      target: 'chrome.docker',
      width: 1200,
      height: 720,
    },
    '03 Laptop': {
      target: 'chrome.docker',
      width: 992,
      height: 720,
    },
    '04 Mobile Large': {
      target: 'chrome.docker',
      width: 480,
      height: 900,
      mobile: true
    },
    '05 iPhone 7': {
      target: 'chrome.docker',
      preset: 'iPhone 7',
    },
    '06 Google Pixel': {
      target: 'chrome.docker',
      preset: 'Google Pixel',
    },
  },
  fileNameFormatter: ({ configurationName, kind, story }) =>
    `${configurationName}/${kind}/${story}`
};
