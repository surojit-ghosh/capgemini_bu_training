ask: Team TaskFlow Dashboard
Scenario
A small project team uses an internal dashboard to track daily tasks.
The manager’s name, task summary, filter labels, and each task’s details should all come from the top-level parent component and be passed down to child components using props only.
 
Components to create
App
Dashboard
WelcomeBanner
TaskFilter
TaskList
TaskCard
 
1.App stores all data:
	manager/user name
	summary count
	selected filter
	task list
 
2.App passes data to Dashboard
	Dashboard passes required props to:
	WelcomeBanner
	TaskFilter
	TaskList
 
3.TaskList passes individual task details to TaskCard