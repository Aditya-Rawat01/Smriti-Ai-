import express from 'express';
import folderRoutes from './createfolder-routes';
import getAllFolderRoutes from './getAllFolder-routes';
import getResourcesRoutes from './getResources-routes';
import storeSummaryRoutes from './storeSummarie-routes';
import mermaidRoutes from './mermaid-routes';

import { clerkMiddleware } from "@clerk/express";
import { tokenMiddleware } from '../middlewares/tokenMiddleware';
import getUser from './getUser-route'
import storeResources from './storeResources-routes';
import getOneFolderRoutes from './getOneFolder-routes'
import getOneResourceRoute from './getOneFolder-routes'
const router = express.Router();
router.use(clerkMiddleware())
router.use(tokenMiddleware)
router.get('/me',(req,res)=>{
    res.json({
        "msg":"hello"
    })
})

router.use('/folders', folderRoutes);// POST /api/folders
router.use('/folders', getAllFolderRoutes); // GET /api/folders

router.use('/resources', storeSummaryRoutes); // PATCH /api/resources/:folderId/:resourceId
router.use('/resources/mermaid', mermaidRoutes); // get /api/resources/mermaid/:folderId/:resourceId
router.use('/folder', getOneFolderRoutes) // get individual folder

router.use('/resources', getResourcesRoutes); // GET /api/resources/:folderId
router.use('/resources',storeResources ); // post /api/resources/:folderId
router.use('/user',getUser)
router.use('/resource',getOneResourceRoute)
export default router;