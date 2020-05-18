const { Router } = require('express')
const router = Router()

const Artist = require('../../models').artist

router.post('/list', async (req, res, next) => {
  const response = await Artist.list()
  res.json(response)
})

router.post('/item', async (req, res, next) => {
  const iArtistID = req.body.iArtistID
  const response = await Artist.item({ iArtistID })
  res.json(response)
})

module.exports = router
