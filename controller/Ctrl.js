const Schema = require('../model/Schema');

const userctrl = {
    add: async (req, res) => {

      
        const files=req.file.path;

        const { name, tagline, schedule, description, moderator, category, sub_category, rigor_rank, attendees } = req.body;

        
        try {
            // console.log(files);
            const newdata = await Schema({ name, tagline, schedule, description, moderator, category, sub_category, rigor_rank, files, attendees })

            const result = await newdata.save()
            console.log(result);
            
            res.status(201).json({msg:"Detail saved"})
            

        } catch (error) {
            res.status(306).json({msg:"Detail Not save please fill all detail"});

        }

        
    },
    get: async (req, res) => {
        try {

            const unique = await Schema.find();
            res.status(200).json({ unique })

        } catch (error) {
            res.status(404).json({ mesg: "Detail not found" })

        }


    },

    getOne: async (req, res) => {
        const id = req.params.id;


        try {
            const unique = await Schema.findOne({ _id: id })

            if (unique === null || unique === "") {
                res.status(404).json({ msg: "Data not found" })
            }
            else {
                res.status(200).json({ unique })
            }

        } catch (error) {
            res.status(404).json({ msg: "Data not found and have check detail" })

        }



    },
    edit: async (req, res) => {

        const user = req.body;


        try {


            const Updated = await Schema.findOneAndUpdate({ _id: req.params.id }, user, { new: true });


            res.status(201).json({ msg: "Updated Sucessfull" })


        } catch (error) {
            res.status(409).json({ msg: "data is not edited" })

        }

    },
    delete: async (req, res) => {
        const id = req.params.id;

        try {
            const identity = await Schema.findOneAndDelete({ _id: id })
            res.status(200).json({msg:"Deleted Sucessful"})            
        } catch (error) {
            res.status(400).json({msg:"Can't find the detail to delete"})
            
        }

    }

}

module.exports = userctrl;