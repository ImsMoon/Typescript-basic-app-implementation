export interface Student{
    id:string,
    name:string,
    phone:string,
    email:string
}
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

export const getStudents =async ():Promise<StudentViewModel[]>=>{
    return await
    [
        {
            id:"1",name:"moon",phone:"017",email:"me@moon.com"
        }
    ]
}