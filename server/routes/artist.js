const { Router } = require('express')
const router = Router()

const Artist = require('../../models').artist

router.post('/list', async (req, res, next) => {
  const response = await Artist.list()
  res.json(response)
})

router.post('/list-with-picture', async (req, res, next) => {
  const response = await Artist.listWithPicture()
  res.json(response)
})

router.post('/item', async (req, res, next) => {
  const iArtistID = req.body.iArtistID
  const response = await Artist.item({ iArtistID })
  res.json(response)
})

router.post('/item-with-picture', async (req, res, next) => {
  const iArtistID = req.body.iArtistID
  const response = await Artist.itemWithPicture({ iArtistID })
  res.json(response)
})

router.post('/delete', async (req, res, next) => {
  // const iArtistID = req.body.iArtistID
  // const response = await Artist.delete({ iArtistID })
  // return res.json(response);
  try {
    const iArtistID = req.body.iArtistID
    const response = await Artist.delete({ iArtistID })
    if (response) {
      return res.json(response)
    }
    throw new Error('Artist not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
})

router.post('/add', async (req, res, next) => {
  const formdata = req.body
  console.log('server', formdata)
  const response = await Artist.add(formdata)
  return res.json(response)

  // try {
  //   const formdata = req.body.formdata
  //   console.log('!!!', formdata)
  //   const response = await Artist.add({ formdata })
  //   if(response) {
  //     return res.json(response);
  //   }
  //   throw new Error("Can't create Artist");
  // }
  // catch (error) {
  //   return res.status(500).send(error.message);
  // }
})

module.exports = router
