const { Router } = require('express')
const router = Router()

const Nouvelle = require('../../models/new')

router.post('/get', async (req, res, next) => {
  const response = await Nouvelle.list()
  res.json(response)
})

module.exports = router
