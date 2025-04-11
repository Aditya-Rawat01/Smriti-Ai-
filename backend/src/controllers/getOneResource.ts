import { Folder } from "../models/folder.model";
import { Resource } from "../models/Resources.model";

const getOneResource = async (req: any, res: any) => {
    try{
        const { resourceId } = req.params;
        if (!resourceId) {
            return res.status(400).json({ message: "Resource ID is required" });
        }

        const userId = req.user._id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        // Fetch resources for the specified folder
        const resource = await Resource.findOne({ 
            _id:resourceId, });
        // if (!resources || resources.length === 0) {
        //     return res.status(404).json({ message: "No resources found for this folder" });
        // }
        return res.status(200).json({ message: "Folder fetched successfully", resource });
    }
    catch (error) {
        console.error("Error fetching resources:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export { getOneResource };