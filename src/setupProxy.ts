const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const apiProxy = createProxyMiddleware({
  target: '(link unavailable)',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

app.use('/api', apiProxy);

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});