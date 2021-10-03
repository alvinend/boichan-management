import { Task } from "../../models/Task"

export const getTasks = async () => {

  const newTask = new Task({
    name: `test_task_${Date.now()}`,
    dueDate: new Date(),
    desc: 'Haii',
    assignee: 2,
    creator: 2
  })

  await newTask.save()

  const tasks = (await Task.find())!
  
  return {
    tasks
  }
}
