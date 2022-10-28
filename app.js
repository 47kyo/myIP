const express = require('express')
const axios = require('axios')
const app = express();

//simple get request
app.get('/', async (req,res)=>{
  const response = await axios.get('http://api.ipify.org/?format=json')  //ip that makes axios fetches 
  res.json({
    'X-FORWARDED-FOR': req.header('x-forwarded-for') || null, 
    'REQ.CONNECTION.REMOTEADDRESS': req.connection.remoteAddress || null,
    'REQ.IP': req.ip || null,
    'REQ.IPS': req.ips || null,
    'HEROKU_SERVER_IP': response.data.ip || null
  })
})


const listener = app.listen(process.env.PORT || 3000, () => console.log(`server running on ${listener.address().port}`))
