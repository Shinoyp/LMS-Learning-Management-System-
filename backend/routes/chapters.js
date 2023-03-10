const express=require('express');
const { createChapters,
        getChapters,
        getchapter,
        deleteChapter,
        updateChapter,
        createModule
 } = require('../contollers/chaptersController');

 const requireAuth=require('../middleware/requireAuth')
const router=express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET all chapters
router.get('/',getChapters)


//GET a single chapters
router.get('/:id',getchapter)

//POST A NEW chapters || using req u can access data
router.post('/',createChapters)


//Delete a  chapter
router.delete('/:id', deleteChapter)



//Update a chapter
router.patch('/:id', updateChapter)

module.exports=router