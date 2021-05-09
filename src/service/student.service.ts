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
const StudentDocument = mongoose.model<Student>("Student",StudentSchema,"Students");

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

export const getStudents =async ():Promise<StudentViewModel[]>=>{
    const students = await StudentDocument.find().exec();
    const vm : StudentViewModel[] = students.map((student) => convertToViewModel(student));
    return vm;
}

export const save = async (payload:any): Promise<String> => {
    const newStudent = new StudentDocument({
        ...payload,
        id: new mongoose.Types.ObjectId(),
        createdAt: new Date(),
        modifiedAt: new Date()
    });

    const saveStudenet = await newStudent.save();
    return saveStudenet.id
}