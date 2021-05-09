import mongoose, { model, Schema } from "mongoose";
const schema = mongoose.Schema;

const StudentSchema = new Schema({
    name:{type: String},
    phone:{type: String},
    email:{type: String},
    createdAt:{type: Date},
    modifiedAt:{type: Date}
});

export interface Student extends mongoose.Document{
    id:string,
    name:string,
    phone:string,
    email:string
}
export const StudentDocument = mongoose.model<Student>("Student",StudentSchema,"Students");

export interface StudentViewModel{
    id:string,
    name:string,
    phone:string,
    email:string
}
export interface StudentRequestModel{
    id:string,
    name:string,
    phone:string,
    email:string
}

const convertToViewModel = (model:Student)=>{
    let StdVm : StudentViewModel ={
        ...JSON.parse(JSON.stringify(model))
    };
    return StdVm;
}

export const getAll =async <T extends mongoose.Document> (collection: mongoose.Model<T>):Promise<T[]>=>{
    const docs = await collection.find().exec();
    //const vm : StudentViewModel[] = students.map((student) => convertToViewModel(student));
    return docs;
}

export const save = async<T extends mongoose.Model<any>> (collection: T,payload:any): Promise<String> => {
    const newCol = {
        ...payload,
        id: new mongoose.Types.ObjectId(),
        createdAt: new Date(),
        modifiedAt: new Date()
    };

    const savedCol = await collection.create(newCol);
    return savedCol.id
}